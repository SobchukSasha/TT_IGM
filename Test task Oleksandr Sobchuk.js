function myFunction() {
  var sh = SpreadsheetApp.getActiveSpreadsheet();
  var ui = SpreadsheetApp.getUi();
  var rate = 0;
  sh.getRange('A1').setValue(0);
  
  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand).toFixed(0);
  }

  for (let i = 0; i < 5; i++) {
    var operand1 = +randomInteger(0, 100);
    var operand2 = +randomInteger(0, 100) 

    var response = ui.prompt('How much is ' + operand1 + ' + ' + operand2 + '?');

    if (response.getSelectedButton() == ui.Button.OK) {
      if (+response.getResponseText() && +response.getResponseText() === operand1 + operand2) {
        rate++
        ui.alert('Correct!');
      } else {
        ui.alert('Wrong!');
      }
    } else {
      ui.alert('Finished by user.'); 
      break;
    }
  }
  
  ui.alert('Total number of correct answers is ' + rate);
  sh.getRange('A1').setValue(rate);
}
