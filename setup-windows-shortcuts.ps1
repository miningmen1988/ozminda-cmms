$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$StartScript = Join-Path $Root "start-cmms.ps1"
$MobileStartScript = Join-Path $Root "start-cmms-mobile.ps1"
$ShareScript = Join-Path $Root "share-cmms.ps1"
$PowerShellExe = (Get-Command powershell.exe).Source
$Shell = New-Object -ComObject WScript.Shell

function New-CmmsShortcut {
  param(
    [Parameter(Mandatory = $true)][string]$Path,
    [Parameter(Mandatory = $true)][string]$Arguments,
    [Parameter(Mandatory = $true)][string]$Description
  )

  $shortcut = $Shell.CreateShortcut($Path)
  $shortcut.TargetPath = $PowerShellExe
  $shortcut.Arguments = $Arguments
  $shortcut.WorkingDirectory = $Root
  $shortcut.Description = $Description
  $shortcut.IconLocation = "$PowerShellExe,0"
  $shortcut.Save()
}

$Desktop = [Environment]::GetFolderPath("Desktop")
$Startup = [Environment]::GetFolderPath("Startup")

$DesktopShortcut = Join-Path $Desktop "O'zMinda CMMS.lnk"
$MobileDesktopShortcut = Join-Path $Desktop "O'zMinda CMMS Mobile.lnk"
$ShareDesktopShortcut = Join-Path $Desktop "O'zMinda CMMS Share.lnk"
$StartupShortcut = Join-Path $Startup "O'zMinda CMMS Backend.lnk"

New-CmmsShortcut `
  -Path $DesktopShortcut `
  -Arguments "-NoProfile -ExecutionPolicy Bypass -File `"$StartScript`"" `
  -Description "Start O'zMinda CMMS and open it in the browser"

New-CmmsShortcut `
  -Path $MobileDesktopShortcut `
  -Arguments "-NoProfile -ExecutionPolicy Bypass -File `"$MobileStartScript`"" `
  -Description "Start O'zMinda CMMS in mobile Wi-Fi mode"

New-CmmsShortcut `
  -Path $ShareDesktopShortcut `
  -Arguments "-NoProfile -ExecutionPolicy Bypass -File `"$ShareScript`"" `
  -Description "Start O'zMinda CMMS and publish a temporary public link"

New-CmmsShortcut `
  -Path $StartupShortcut `
  -Arguments "-NoProfile -ExecutionPolicy Bypass -File `"$StartScript`" -NoBrowser" `
  -Description "Start O'zMinda CMMS backend when Windows starts"

Write-Host "Desktop shortcut: $DesktopShortcut"
Write-Host "Mobile shortcut: $MobileDesktopShortcut"
Write-Host "Share shortcut: $ShareDesktopShortcut"
Write-Host "Startup shortcut: $StartupShortcut"
