"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function getRelativePath(uri) {
    var path = vscode.workspace.asRelativePath(uri);
    path = path.replace(/\\/g, '/');
    return path;
}
exports.getRelativePath = getRelativePath;
//# sourceMappingURL=taskCommands.js.map