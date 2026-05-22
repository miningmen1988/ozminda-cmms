$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Www = Join-Path $Root "www"
$RootFullPath = [System.IO.Path]::GetFullPath($Root)
$WwwFullPath = [System.IO.Path]::GetFullPath($Www)

if (-not $WwwFullPath.StartsWith($RootFullPath, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Refusing to prepare Android assets outside the project folder."
}

if (Test-Path $Www) {
  Remove-Item -LiteralPath $Www -Recurse -Force
}

New-Item -ItemType Directory -Path $Www | Out-Null

$Files = @(
  "index.html",
  "app.js",
  "styles.css",
  "manifest.webmanifest",
  "service-worker.js",
  "ozminda-logo.svg",
  "ozminda-icon.svg"
)

foreach ($File in $Files) {
  Copy-Item -LiteralPath (Join-Path $Root $File) -Destination (Join-Path $Www $File) -Force
}

Write-Host "Android web assets prepared in $Www"
