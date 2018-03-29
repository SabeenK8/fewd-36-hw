

// This function will get the values of the two word forms, pass them to the compare function the update the display output

function conjunctionFormChecking(){

    // Create output variables
    var contractionFound = "";
    var logEntry = "";

    // Get words from search forms
    var firstWord = $("#firstWord").val().trim();
    var secondWord = $("#secondWord").val().trim();

    // Create phrase to test by combining wordOne and wordTwo with a space
    var phrase = firstWord + " " + secondWord;

        // Test phrase
        var result = checkForConjunction(phrase);
        console.log(phrase);

        // if Test Phrase returns false search phrase with words in reverse order
        if (result == false){
            var phrase = secondWord + " " + firstWord;
            var result = checkForConjunction(phrase);
        };

        // Set the output variable to "None Found"
        if (result == false){

        // Set the log variable to wordOne wordTwo and no contraction wrapped in paragraph tags
            logEntry = "<p>"+firstWord + " " + secondWord+" not found</p>";
            contractionFound = "No conjunction found";
        
        // Set the output variable to the result - put output in the correct div
            }else{
                logEntry = "<p>"+firstWord + " " + secondWord+": "+result+"</p>";
                contractionFound = result;
            }

        // Update contractionResult
        jQuery("#contractionResult").text(contractionFound);
        jQuery('.playAreaResultsLog').append(logEntry);


        // Empty wordOne
        $("#firstWord").empty();

        // Empty wordTwo
        $("#secondWord").empty();

 // end conjunctionFormChecking
};


// resetAllForms
function resetAllForms(e){
    e.preventDefault();
    var clear = "";

    // Empty Result
    $("#contractionResult").text("");
    
    // Empty wordOne
    $("#firstWord").empty();

    // Empty wordTwo
    $("#secondWord").empty();

    // Empty the log
    $("playAreaResultsLog").empty();
    $(".playAreaResultsElement").empty();

}; 


jQuery(document).ready(function(){

        // Bind conjunctionFormChecking to button
        $("#btnCheckConjunction").click(conjunctionFormChecking);

        // Bind reset to button
        $("#btnReset").click(resetAllForms);


});
