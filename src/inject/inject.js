/*
 *  Project: Westpac Input Helper
 *  Description: Helps with form input on Westpac online banking
 *  Author: Nick Lockhart
 *  License: To Kill
 */

// "Amount" field only accepts numbers and decimal
document.querySelector('input[name="amount"]').addEventListener('input',function(e){
 	this.value = (this.value.replace(/[^0-9.]/g, ""));
}, false);