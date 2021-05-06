# Delete existing packages
# Remove-Item "./" -Filter *.vsix

# Create vscode packages
Invoke-Expression "vsce package"
