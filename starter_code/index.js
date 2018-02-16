
jQuery(document).ready(function (){

// Function to add extra body text

    jQuery('.readmore').click(function () {
        event.preventDefault();
        jQuery('#show-this-on-click').slideDown();
        jQuery('.readmore').hide();
        jQuery('.readless').show();
    });

// Function to hide extra body text

    jQuery('.readless').click(function () {
        event.preventDefault();
        jQuery('#show-this-on-click').slideUp();
        jQuery('.readless').hide();
        jQuery('.readmore').show();
    });

// Function to add extra sidebar content

    jQuery('.learnmore').click(function () {
        event.preventDefault();
        jQuery('#learnmoretext').slideDown();
        jQuery('.learnmore').hide();
    });

// Bind functions to anchor text


})

