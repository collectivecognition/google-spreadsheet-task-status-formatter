Google-Spreadsheet-Task-Status-Formatter
========================================

Adds a dropdown menu to a Google Spreadsheet which allows the user to set the visual style of one or more rows to indicate Active, Complete or Waiting status.

## Installation ##

1. Open your spreadsheet and select *Tools -> Script Editor*
2. Create a new script and paste the contents of *taskFormatter.js*
3. Save the script and you're ready to go!

## Usage ##

You should now see a *Task Status* menu in the menu bar at the top of your spreadsheet.

Select one or more rows and select the status (Active, Complete or Waiting) drop the dropdown menu.

The visual style of the row/s will be updated as follows and the value of the first cell in each selected row will be changed to the name of the status you selected.

|       | Active | Complete       | Waiting |
| ----- | ------ | -------------- | ------- |
| Color | Black  | Grey           | Grey    |
| Style | Normal | Strike-through | Normal  |