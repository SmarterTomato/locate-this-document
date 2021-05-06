import * as child_process from "child_process";
import * as os from "os";
import * as path from "path";
import * as fs from "fs";

export default class FileUtils {
  static openInExplorer(filePath: string) {
    const os = require("os");
    let osType = os.type();

    if (osType === "Windows_NT") {
      this.openExplorerInWindows(filePath);
    } else if (osType === "Darwin") {
      this.openExplorerInMac(filePath);
    } else {
      this.openExplorerInLinux(filePath);
    }
  }

  static openExplorerInWindows(filePath: string) {
    const isFile = fs.lstatSync(filePath).isFile();
    if (isFile) {
      child_process.exec(`explorer /select, "${filePath}"`);
    } else {
      child_process.exec(`explorer "${filePath}"`);
    }
  }

  static openExplorerInMac(filePath: string) {
    const isFile = fs.lstatSync(filePath).isFile();
    const pathToOpen = isFile ? path.dirname(filePath) : filePath;

    child_process.exec(`open "${pathToOpen}"`);
  }

  static openExplorerInLinux(filePath: string) {
    const isFile = fs.lstatSync(filePath).isFile();
    const pathToOpen = isFile ? path.dirname(filePath) : filePath;

    child_process.exec(`xdg-open "${pathToOpen}"`);
  }
}
