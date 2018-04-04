
// Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"

var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
$(document).ready(function() {

// use the array to add values to the ```<select>``` menu by using a ```for``` loop in JavaScript

  for(i=0;i<cities.length;i++) {

// Use $.append() in your iteration on the drop-down menu 

    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }

// When the user changes the input of the drop-down, update the background image based on what they selected

// Use the ```$.change``` event handler to capture user actions

  $('form').on('change', '#city-type',function(){

// Get the value of user input using ```$.val()```

    var city = $('#city-type').val();
    if(city == 'NYC') {

// Use the ```$.attr()``` function to update html classes 

      $('body').attr('class','nyc');
    }

// Use ```if/else if/else ``` conditionals to control the flow of your application

    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});
