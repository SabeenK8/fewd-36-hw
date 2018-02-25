
// Load .js functions after document is ready loading content
jQuery(document).ready(function() {


  // Prevent submit button from refreshing the page
  jQuery('#submit-btn').click(function(){
    event.preventDefault();

  // Get the value of the #city-type input and correct for capitalization
    var city = jQuery('#city-type').val();
    jQuery('#city-type').val('');
    city = city.toLowerCase().trim();



  // If user inputs New York City / NYC / or New York standardize CSS to 'nyc'
    if(city == 'new york city' || city == 'nyc' || city == 'new york') {
      $('body').attr('class','nyc');
    }

  // If user inputs SF / San Francisco / or Bay Area standardize CSS to 'sf'
    else if (city == 'sf' || city == 'san francisco' || city == 'bay area') {
      $('body').attr('class','sf');
    }

  // If user inputs Austin / ATX standardize CSS to 'austin'
    else if (city == 'austin' || city == 'atx') {
      $('body').attr('class','austin');
    }

  // If user inputs Los Angeles / LA / LAX standardize CSS to 'la'
    else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').attr('class','la');
    }

  // If user inputs Sydney / SYD standardize CSS to 'sydney'
    else if (city == 'sydney' || city == 'syd') {
      $('body').attr('class','sydney');
    }
  });
});