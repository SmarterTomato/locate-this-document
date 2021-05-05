import * as vscode from "vscode";
import FileUtils from "../utils/fileUtils";

export default class LocateThisDocumentService {
  //#region Singleton

  private static instance?: LocateThisDocumentService;

  static getInstance(): LocateThisDocumentService {
    if (!this.instance) {
      this.instance = new LocateThisDocumentService();
    }

    return this.instance;
  }

  //#endregion

  locateThisDocument(uri: vscode.Uri | undefined) {
    if (!uri) {
      const activeTextEditor = vscode.window.activeTextEditor;
      if (!activeTextEditor) {
        // This should not happen right now due to the shortcut binding
        // Don't do anything if not text editor for now
        vscode.window.showInformationMessage(
          `Locate this document activated, but no active text editor found`
        );
        console.log(`Locate this document activated, but no active text editor found`);
        return;
      }

      uri = activeTextEditor.document.uri;
    }

    // - Run the build in comment to locate this document in explorer taab
    vscode.commands.executeCommand("revealInExplorer", uri);
  }

  openInFileExplorer(uri: vscode.Uri | undefined) {
    if (!uri) {
      const activeTextEditor = vscode.window.activeTextEditor;
      if (!activeTextEditor) {
        // This should not happen right now due to the shortcut binding
        // Don't do anything if not text editor for now
        vscode.window.showInformationMessage(
          `Open in file explorer activated, but no active text editor found`
        );
        console.log(`Open in file explorer activated, but no active text editor found`);
        return;
      }

      uri = activeTextEditor.document.uri;
    }

    FileUtils.openInExplorer(uri.fsPath);
  }

  openWorkspaceRootFolderInFileExplorer() {
    const folders = vscode.workspace.workspaceFolders;
    if (!folders) {
      // This should not happen right now due to the shortcut binding
      // Don't do anything if not text editor for now
      vscode.window.showInformationMessage(
        `Open workspace root folder in file explorer is activated, but no workspace found`
      );
      console.log(
        `Open workspace root folder in file explorer is activated, but no workspace found`
      );
      return;
    }

    // We assume to get the first folder for now
    FileUtils.openInExplorer(folders[0].uri.fsPath);
  }
}
