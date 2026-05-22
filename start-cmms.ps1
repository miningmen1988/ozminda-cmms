param(
  [switch]$NoBrowser,
  [switch]$Lan
)

$ErrorActionPreference = "SilentlyContinue"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Port = 8001
$LocalUrl = "http://127.0.0.1:$Port/"

function Get-CmmsLanIp {
  try {
    $ip = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction Stop |
      Where-Object {
        $_.IPAddress -notmatch "^(127|169\.254)\." -and
        $_.IPAddress -notmatch "^0\." -and
        $_.AddressState -eq "Preferred"
      } |
      Sort-Object InterfaceIndex |
      Select-Object -First 1 -ExpandProperty IPAddress

    if ($ip) { return $ip }
  } catch {}

  try {
    $lines = ipconfig | Select-String -Pattern "IPv4.*:\s*([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)"
    foreach ($line in $lines) {
      if ($line.Line -match "IPv4.*:\s*([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)") {
        $ip = $Matches[1]
        if ($ip -notmatch "^(127|169\.254|0)\.") { return $ip }
      }
    }
  } catch {}

  return ""
}

$LanIp = if ($Lan) { Get-CmmsLanIp } else { "" }
$PhoneUrl = if ($Lan -and $LanIp) { "http://${LanIp}:$Port/" } else { "" }

function Get-CmmsHealth {
  param([Parameter(Mandatory = $true)][string]$BaseUrl)

  try {
    return Invoke-RestMethod -Uri "${BaseUrl}api/health" -TimeoutSec 2
  } catch {
    return $null
  }
}

function Test-CmmsUrl {
  param([Parameter(Mandatory = $true)][string]$BaseUrl)

  $health = Get-CmmsHealth -BaseUrl $BaseUrl
  return $health -and $health.ok -eq $true
}

function Get-CmmsPortPid {
  try {
    $connection = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction Stop |
      Select-Object -First 1
    if ($connection) { return [int]$connection.OwningProcess }
  } catch {}

  try {
    $pattern = "[:.]$Port\s+.*LISTENING\s+(\d+)$"
    $line = netstat -ano | Select-String -Pattern $pattern | Select-Object -First 1
    if ($line -and $line.Line -match $pattern) { return [int]$Matches[1] }
  } catch {}

  return $null
}

function Stop-CmmsPortOwner {
  $ownerPid = Get-CmmsPortPid
  if ($ownerPid) {
    try {
      Stop-Process -Id $ownerPid -Force
      Start-Sleep -Milliseconds 700
    } catch {}
  }
}

function Start-CmmsBackend {
  param([switch]$LanMode)

  if ($LanMode) {
    $env:CMMS_HOST = "0.0.0.0"
  } else {
    Remove-Item Env:\CMMS_HOST -ErrorAction SilentlyContinue
  }

  $node = Get-Command node -ErrorAction SilentlyContinue
  if ($node) {
    Start-Process `
      -FilePath $node.Source `
      -ArgumentList @("server.js") `
      -WorkingDirectory $Root `
      -WindowStyle Hidden
    return
  }

  $npm = Get-Command npm -ErrorAction SilentlyContinue
  if ($npm) {
    Start-Process `
      -FilePath $npm.Source `
      -ArgumentList @("start") `
      -WorkingDirectory $Root `
      -WindowStyle Minimized
  }
}

$TargetUrl = if ($Lan -and $PhoneUrl) { $PhoneUrl } else { $LocalUrl }
$LocalHealth = Get-CmmsHealth -BaseUrl $LocalUrl

if (-not $Lan -and $LocalHealth -and $LocalHealth.lanEnabled -eq $true) {
  Stop-CmmsPortOwner
}

if ($Lan -and $PhoneUrl -and (Test-CmmsUrl -BaseUrl $LocalUrl) -and -not (Test-CmmsUrl -BaseUrl $PhoneUrl)) {
  Stop-CmmsPortOwner
}

if (-not (Test-CmmsUrl -BaseUrl $TargetUrl)) {
  Start-CmmsBackend -LanMode:$Lan
  for ($i = 0; $i -lt 20; $i++) {
    if (Test-CmmsUrl -BaseUrl $TargetUrl) { break }
    Start-Sleep -Milliseconds 500
  }
}

if ($Lan) {
  Write-Host ""
  Write-Host "O'zMinda CMMS mobile mode is enabled."
  Write-Host "Computer URL: $LocalUrl"

  if ($PhoneUrl) {
    Write-Host "Phone URL: $PhoneUrl"
    try { Set-Clipboard -Value $PhoneUrl } catch {}
    Write-Host "The phone URL was copied to clipboard."
    Write-Host "On Android: open Phone URL in Chrome, then use Add to Home screen."
  } else {
    Write-Host "Phone URL was not detected. Make sure Wi-Fi is enabled on this computer."
  }

  Write-Host "Phone and computer must be connected to the same Wi-Fi network."
}

if (-not $NoBrowser) {
  Start-Process $LocalUrl
}
