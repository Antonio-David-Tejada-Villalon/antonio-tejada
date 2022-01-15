"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const taskCommands = require("./taskCommands");
function getActiveDocumentUri() {
    let uri;
    if (vscode.window.activeTextEditor) {
        uri = vscode.window.activeTextEditor.document.uri;
    }
    if (!uri) {
        vscode.window.showErrorMessage('Cannot get path (no file is opened?)');
        return;
    }
    return uri;
}
function registerTaskCommand(context, commandFunction) {
    context.subscriptions.push(vscode.commands.registerCommand('wsl-path.' + commandFunction.name, function (uri) {
        uri = getActiveDocumentUri();
        if (!uri) {
            return;
        }
        return commandFunction(uri);
    }));
}
function activate(context) {
    registerTaskCommand(context, taskCommands.getRelativePath);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map