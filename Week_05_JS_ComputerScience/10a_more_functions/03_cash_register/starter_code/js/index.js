/*

 Some useful javascript functions and methods that can be used to build this.

 event.preventDefault();
 parseFloat()
 toFixed()
 jQuery().append();
 jQuery().val();
 jQuery().submit();


 */

// total will store the running total, starting at 0
var total = 0;

// `enter()` reads the user's input, and updates the receipt
function enter(event){

    // Set up variables to use
    var expenseCharge = "";
    var runningTotal = "";
    var expenseChargeString = "";

    // Prevent form submission
    event.preventDefault();

    // Read the user input
    var expenseCharge = $("#newEntry").val();

    // Convert to decimal
    expenseCharge = parseFloat(expenseCharge);
    expenseCharge = expenseCharge.toFixed(2);

    // Convert to currency
    expenseChargeString = "$" + expenseCharge;

    // Add line item to table
    $("#entries").append("<tr><td></td><td>" + expenseChargeString + "</td></tr>");

    // Update the running total
    total += parseFloat(expenseCharge);

    // Print the updated total with proper currency formatting
    runningTotal = "$" + total.toFixed(2);
    $("#total").text(runningTotal);

    // Clear out the input field, ready for next value
    $("#expenseCharge").val("")

};

// Use this to convert a number to U.S. currency format

    // Convert the number to decimal

    // Round to 2 decimal places

    // Add the $ before the number

    // Send back the result


// When the user submits the form, run the `enter` function
jQuery(document).ready(function(){

 $("#newEntry").submit(enter);

});



