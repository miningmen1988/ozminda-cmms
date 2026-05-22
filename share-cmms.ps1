param(
  [switch]$InstallCloudflared,
  [switch]$NoPause
)

$ErrorActionPreference = "SilentlyContinue"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$StartScript = Join-Path $Root "start-cmms.ps1"
$Port = 8001
$LocalUrl = "http://127.0.0.1:$Port/"

function Pause-IfNeeded {
  if (-not $NoPause) {
    Write-Host ""
    Read-Host "Press Enter to close"
  }
}

function Test-CmmsHealth {
  try {
    $health = Invoke-RestMethod -Uri "${LocalUrl}api/health" -TimeoutSec 2
    return $health -and $health.ok -eq $true
  } catch {
    return $false
  }
}

function Get-Cloudflared {
  $command = Get-Command cloudflared -ErrorAction SilentlyContinue
  if ($command) { return $command }

  $candidates = @(
    "$env:ProgramFiles\cloudflared\cloudflared.exe",
    "${env:ProgramFiles(x86)}\cloudflared\cloudflared.exe"
  )

  foreach ($candidate in $candidates) {
    if ($candidate -and (Test-Path $candidate)) {
      return [pscustomobject]@{ Source = $candidate }
    }
  }

  return $null
}

function Install-Cloudflared {
  $winget = Get-Command winget -ErrorAction SilentlyContinue
  if (-not $winget) {
    Write-Host "winget was not found. Install Cloudflare Tunnel manually:"
    Write-Host "https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/"
    return $false
  }

  Write-Host "Installing Cloudflare Tunnel..."
  & $winget.Source install --id Cloudflare.cloudflared -e --accept-package-agreements --accept-source-agreements
  return $true
}

Write-Host ""
Write-Host "Starting O'zMinda CMMS..."
& $StartScript -NoBrowser

for ($i = 0; $i -lt 20; $i++) {
  if (Test-CmmsHealth) { break }
  Start-Sleep -Milliseconds 500
}

if (-not (Test-CmmsHealth)) {
  Write-Host "CMMS did not start at $LocalUrl"
  Write-Host "Try running start-cmms.ps1 first."
  Pause-IfNeeded
  exit 1
}

$Cloudflared = Get-Cloudflared

if (-not $Cloudflared -and $InstallCloudflared) {
  Install-Cloudflared | Out-Null
  $Cloudflared = Get-Cloudflared
}

if (-not $Cloudflared) {
  Write-Host ""
  Write-Host "Cloudflare Tunnel is not installed yet."
  Write-Host "Install it once with this command:"
  Write-Host "winget install --id Cloudflare.cloudflared -e"
  Write-Host ""
  Write-Host "Then run this file again:"
  Write-Host ".\share-cmms.ps1"
  Write-Host ""
  Write-Host "Or let this script try to install it:"
  Write-Host ".\share-cmms.ps1 -InstallCloudflared"
  Pause-IfNeeded
  exit 1
}

Write-Host ""
Write-Host "Local app: $LocalUrl"
Write-Host "Public link will appear below as https://....trycloudflare.com"
Write-Host "Copy that link and send it to other people."
Write-Host "Keep this window open while they are using the app."
Write-Host ""

& $Cloudflared.Source --no-autoupdate tunnel --url $LocalUrl
