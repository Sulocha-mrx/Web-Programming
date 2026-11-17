WEEK 02 - JAVASCRIPT INTRODUCTION

CONTENTS
index.html       Main page with links to all three tasks.
task1/           Bill splitter (bill amount, tip rate, people, validation).
task2/           Menu item bill splitter (add/remove items, calculate total).
task3/           ToDo list (add, complete and delete tasks).

HOW TO OPEN
1. Extract WEEK-02-JAVASCRIPT.zip.
2. Open the extracted WEEK-02-JAVASCRIPT folder in VS Code.
3. Open index.html in a browser, or use the VS Code Live Server extension.
4. Select Task 1, Task 2 or Task 3.

IMPORTANT
- Each task uses an external style.css and script.js file.
- JavaScript is loaded from an external file using a script src attribute.
- No Bootstrap or other CSS framework is used.
- Task 3 does not save data; refreshing the page clears the list.

TASK 1 DEBUGGER EVIDENCE
You need to capture your own screenshots in your browser:
1. Open Task 1 in Chrome or Edge.
2. Press F12 and select the Sources tab.
3. Open task1/script.js and click the line number beside:
       const tip = bill * (tipRate / 100);
   This creates a breakpoint.
4. Return to the page, enter valid values and click Calculate split.
5. The debugger should pause at the breakpoint.
6. Click Step over to move through the code.
7. Inspect bill, tipRate, people, tip and total in the Scope panel.
8. Capture screenshots showing (a) the breakpoint, (b) stepping through, and
   (c) the variable values. Add these screenshots to your coursework evidence.

You must perform the debugging steps yourself; the project includes comments
to help you find the relevant code.
