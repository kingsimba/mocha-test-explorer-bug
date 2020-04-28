There are two possible bugs in Mocha Test Explorer of VSCode.
https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter

Problem 1
---------

After compiling from TypeScript compile to JavaScript, the test explorer cannot 
show the error message along side with the code.

Reproduce Steps:

1. Open this project with VSCode.
2. Ctrl + Shift + B, select 'tsc watch'.

   Source files in src/*.ts will be compiled into test/*.js along with the map file.

#. Open Test Explorer UI. Run all tests. There will be a failed test.
#. The test failed as expected. But these is NO error message along the code.
   See image below:
   
   .. image:: bug-image.png

A workaround
^^^^^^^^^^^^

1. Edit "tsconfig.json", remove "outDir". So JS files will be in the same folder as TS files.
2. Edit ".vscode/settings.json"::
   
      "mochaExplorer.files" : "src/**/*.spec.js"

The problem can be fixed. But it's messy to mix source files with build output files.

Problem 2
---------

If I exclude "test" folder in .vscode/settings.json, there will be no tests in test explorer.
But "test/*.js" are build output files and I want to hide them.
