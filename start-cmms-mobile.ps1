param(
  [switch]$NoBrowser,
  [switch]$NoPause
)

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$StartScript = Join-Path $Root "start-cmms.ps1"

& $StartScript -Lan -NoBrowser:$NoBrowser

if (-not $NoPause) {
  Write-Host ""
  Read-Host "Mobile address is shown above. Press Enter to close"
}
