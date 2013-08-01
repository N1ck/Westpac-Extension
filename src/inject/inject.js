/*
 *  Project: Westpac Input Helper
 *  Description: Helps with form input on Westpac online banking
 *  Author: Nick Lockhart
 *  License: To Kill
 */

// "Amount" field only accepts numbers and decimal
var amountField = document.querySelector('input[name="amount"]');
document.querySelector('input[name="amount"]').addEventListener('input',function(e){
 	amountField.innerText = parseFloat(Math.round(amountField.value * 100) / 100).toFixed(2);
}, false);