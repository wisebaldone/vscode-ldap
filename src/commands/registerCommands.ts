import * as vscode from 'vscode';
import { commands } from "vscode";

export function registerCommands(): void {

    commands.registerCommand('ldap-workspace.hello', () => {
        vscode.window.showInformationMessage('Hello World from LDAP Workspace!');
    });

}