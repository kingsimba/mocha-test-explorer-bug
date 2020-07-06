# Possible bugs in Mocha Test Explorer of VSCode.

## Background

I use Mocha Test Explorer for testing:
https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter

TypeScript files are compiled into JavaScript files. And Mocha Test Explorer is configured to run JS tests.

1. Open workspace with VSCode
2. Press Ctrl+Shift+B, select `tsc --watch`
3. Click refresh in Mocha Test Explorer to refresh tests.

## Problem: Tests are not refreshed automatically

After saving a TS file, I have to refresh manually to show all the tests.

## Problem: Junk js files are included

After renaming TS files, there will be some junk JS files left.
And the tests in those files are still included in the Test Explorer.

I hope, only when a TS file is present in the project, its corresponding JS file will be considered.
(Visual Studio 2019 has this expected behavior.)
