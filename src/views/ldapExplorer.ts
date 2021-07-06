import * as vscode from 'vscode';

export class LdapExplorerProvider implements vscode.TreeDataProvider<DirectoryNode> {
    
    constructor(private workspaceRoot: string) {}

    getTreeItem(node: DirectoryNode): vscode.TreeItem {
        return node;
    }

    getChildren(node?: DirectoryNode): Thenable<DirectoryNode[]> {
        if (!node) {
            // return the roots
            return Promise.resolve([
                new DirectoryNode("C=AU", "C=AU", "Country", vscode.TreeItemCollapsibleState.Collapsed),
                new DirectoryNode("O=Google", "O=Google", "Organization", vscode.TreeItemCollapsibleState.Collapsed)
            ]);
        }
        
        // Return children of the current 
        return Promise.resolve([
            new DirectoryNode("OU=Evans World,O=Google", "OU=Evans World", "OrgUnit", vscode.TreeItemCollapsibleState.Collapsed)
        ]);
    }
}

class DirectoryNode extends vscode.TreeItem {

    constructor(
        public readonly dn: string,
        public readonly label: string,
        public readonly type: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState
    ) {
        super(`$(heart) ${label}`, collapsibleState);

        this.tooltip = new vscode.MarkdownString('$(heart)', true);
        this.description = "hello";
        this.iconPath = vscode.ThemeIcon.Folder;
    }

}