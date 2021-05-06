$files = Get-ChildItem "./" -Filter *.vsix

if (!$files) {
	return;
}

Write-Host "Installing" $files[0]

# Vscode install vsix
$command = 'code --install-extension ' + $files[0]
Invoke-Expression $command
