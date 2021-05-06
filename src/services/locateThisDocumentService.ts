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

  locateDocument(uri: vscode.Uri | undefined) {
    if (!uri) {
      return;
    }

    // - Run the build in comment to locate this document in explorer tab
    vscode.commands.executeCommand("revealInExplorer", uri);
  }

  openInFileExplorer(uri: vscode.Uri | undefined) {
    if (!uri) {
      return;
    }

    FileUtils.openInExplorer(uri.fsPath);
  }
}
