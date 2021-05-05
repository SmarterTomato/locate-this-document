// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import LocateThisDocumentService from "./services/LocateThisDocumentService";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log("Locate This Document is now active");

  const service = LocateThisDocumentService.getInstance();

  const locateThisDocumentDisposable = vscode.commands.registerCommand(
    "locateThisDocument.locateThisDocument",
    (args: vscode.Uri | undefined) => {
      console.log("Locate document command started");

      service.locateThisDocument(args);
    }
  );
  context.subscriptions.push(locateThisDocumentDisposable);

  const openInFileExplorerDisposable = vscode.commands.registerCommand(
    "locateThisDocument.openInFileExplorer",
    async (args: vscode.Uri | undefined) => {
      console.log("Open in file explorer command started");

      service.openInFileExplorer(args);
    }
  );
  context.subscriptions.push(openInFileExplorerDisposable);

  const openWorkspaceRootFolderInFileExplorerDisposable = vscode.commands.registerCommand(
    "locateThisDocument.openWorkspaceRootFolderInFileExplorer",
    (args: vscode.Uri | undefined) => {
      console.log("Open workspace root folder in file explorer in file explorer command started");

      service.openWorkspaceRootFolderInFileExplorer();
    }
  );
  context.subscriptions.push(openWorkspaceRootFolderInFileExplorerDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
