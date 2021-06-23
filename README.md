# Locate This Document README

Locate This Document add few buttons to the UI for convenience. E.g. Locate current active document in the vscode explorer panel. Open active file in file explorer

## Features

### Locate this document

Find selected document in the explorer panel.

<img src="https://raw.githubusercontent.com/SmarterTomato/locate-this-document/main/resources/readme/locate_this_document.png" alt="Locate This Document">

### Locate active document

Find the currently active document in the explorer panel.

Shortcut: `Control + '`

<img src="https://raw.githubusercontent.com/SmarterTomato/locate-this-document/main/resources/readme/locate_active_document.png" alt="Locate Active Document">

### Open active document in file explorer

Open currently active document in the file explorer (linux and mac opens corresponding file manager)

Shortcut: `Control + Shift + '`

<img src="https://raw.githubusercontent.com/SmarterTomato/locate-this-document/main/resources/readme/open_active_document_in_file_explorer.png" alt="Open Active Document in File Explorer">

### Open workspace root folder in file explorer

Open workspace root folder in the file explorer. If more than one workspace folder found, the button will be disabled.

Shortcut: `Control + Shift + Alt + '`

<img src="https://raw.githubusercontent.com/SmarterTomato/locate-this-document/main/resources/readme/open_workspace_root_folder_in_file_explorer.png" alt="Open Workspace Root Folder in File Explorer">

## Extension Settings

`locateThisDocument.explorerIcons.show`: Whether show icon on the side explorer panel. You can turn off icon individually by setting the options below

`locateThisDocument.explorerIcons.locateActiveDocument`: Whether show locate active document icon on the side explorer panel

`locateThisDocument.explorerIcons.openActiveDocumentInFileExplorer`: Whether show open active document in file explorer icon on the side explorer panel

`locateThisDocument.explorerIcons.openWorkspaceRootFolderInFileExplorer`: Whether show open workspace root folder in file explorer icon on the side explorer panel

<img src="https://raw.githubusercontent.com/SmarterTomato/locate-this-document/main/resources/readme/show_explorer_icons.jpg" alt="Show Explorer Icons">

`locateThisDocument.editorTitleIcons.show`: Whether show icon on the right-top editor title. You can turn off icon individually by setting the options below

`locateThisDocument.editorTitleIcons.locateActiveDocument`: Whether show locate active document icon on the right-top editor title

`locateThisDocument.editorTitleIcons.openActiveDocumentInFileExplorer`: Whether show open active document in file explorer icon on the right-top editor title

<img src="https://raw.githubusercontent.com/SmarterTomato/locate-this-document/main/resources/readme/show_editor_title_icons.jpg" alt="Show Editor Title Icons">

`locateThisDocument.editorTitleContext`: Whether show editor context menu options

<img src="https://raw.githubusercontent.com/SmarterTomato/locate-this-document/main/resources/readme/show_editor_title_context.jpg" alt="Show Editor Title Context">

## Known Issues

None

## Release Notes

### v1.1.0 Add some configuration - 2020-06-23

- Add option to set icons display in sidebar explorer or tab area
- Hide open in file explorer in vscode remote mode (open in file explorer not work with remote mode)

## Change Log

[CHANGELOG](https://github.com/SmarterTomato/locate-this-document/blob/main/CHANGELOG.md)
