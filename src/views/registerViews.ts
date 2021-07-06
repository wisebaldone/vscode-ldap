import * as vscode from 'vscode';
import { LdapExplorerProvider } from './ldapExplorer';

export function registerViews(): void {
    
    vscode.window.registerTreeDataProvider(
        'ldapExplorer',
        new LdapExplorerProvider("hello")
    );


}