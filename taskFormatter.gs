// Set complete status
function markComplete() {
  var range = stretchRange(SpreadsheetApp.getActiveRange());
  range.setFontLine("line-through")
  range.setFontColor("#777777");
  setStatusText(range, "Complete");
};


// Set active status
function markActive() {
  var range = stretchRange(SpreadsheetApp.getActiveRange());
  range.setFontLine("blank");
  range.setFontColor("#000000");
  setStatusText(range, "Active");
}

// Set waiting status
function markWaiting() {
  var range = stretchRange(SpreadsheetApp.getActiveRange());
  range.setFontLine("blank");
  range.setFontColor("#777777");
  setStatusText(range, "Waiting");
}

// "Stretch" the given range to encompass all rows
function stretchRange(range){
  var sheet = SpreadsheetApp.getActiveSheet();
  var stretched = sheet.getRange(range.getRow(), 1, range.getNumRows(), sheet.getLastColumn());
  return sheet.setActiveRange(stretched);
}

// Set the value of the first cell in a range
function setStatusText(range, text){
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = range.getRow();
  var startColumn = range.getColumn();
  var numRows = range.getNumRows();
  for(var row = startRow; row < startRow + numRows; row++){
    var firstCell = sheet.getRange(row, startColumn, 1, 1);
    firstCell.setValue(text);
  }
}

// Add status menu when spreadsheet is opened
function onOpen() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [{
    name : "Complete",
    functionName : "markComplete"
  },
  {
    name : "Active",
    functionName : "markActive"
  },
  {
    name : "Waiting",
    functionName : "markWaiting"
  }];
  spreadsheet.addMenu("Task Status", entries);
};