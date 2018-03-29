function selectPet(petType){

    // Get the specific pet data set
    var thisPetData = petData[petType];

    // Set the title
    jQuery(".petDisplayName").text(thisPetData["displayName"]);

    // Empty the specification data
    jQuery(".petsDataSpecs").empty();

    // Add the space required, size, weight
    var myString = "<dt>Size</dt><dd>" + thisPetData["size"] + "</dd>";
    jQuery(".petsDataSpecs").append(myString);

    myString = "<dt>Weight</dt><dd>" + thisPetData["weight"] + "</dd>";
    jQuery(".petsDataSpecs").append(myString);

    myString = "<dt>Space Required</dt><dd>" + thisPetData["spaceRequired"] + "</dd>";
    jQuery(".petsDataSpecs").append(myString);

    // Add logic to add the trainability and lap size images
    
    // lap size
    var checkmark = '<img src="img/200px-Gnome-emblem-default.svg.png">';
    var negative = '<img src="img/200px-Gnome-emblem-unreadable.svg.png">';
    // display checkmark image
    if(thisPetData["fitsOnLap"]=true){
        $(".petsDataSpecs").append("<dt>Fits on Lap</dt><dd>" + checkmark + "</dd>");
    }

    else{
    // display x image
        $(".petsDataSpecs").append("<dt>Fits on Lap</dt><dd>" + negative + "</dd>");
    }

    // trainability
    if(thisPetData["trainability"]=true){
        $(".petsDataSpecs").append("<dt>Trainable</dt><dd>" + checkmark + "</dd>");
    }
    else{
        $(".petsDataSpecs").append("<dt>Fits on Lap</dt><dd>" + negative + "</dd>");
    }

    // Add the foods (may require loop)
    var petFoods = thisPetData["foods"];

    var foodString = "";

    for (i=0; i<petFoods.length; i++){
    foodString += "<li>" + petFoods[i] + "</li>"
    };

    $(".petsDataSpecs").append("<dt>Food</dt><dd><ul>" + foodString + "</ul></dd>");
   

    // Update the images


        // Set the main image


        // Empty the thumbnails

        // Add the thumbnails



        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)


    // Empty the ideal for
    $(".idealFor").empty();

    var idealOwner = "";

    // Insert the ideal for
    for (i=0; i<thisPetData["idealOwner"].length; i++){
    idealOwner += "<li>" + thisPetData["idealOwner"][i] + "</li>"
    };

    $(".idealFor").append(idealOwner);

    // Empty the Adoption Groups
    $(".adoptionGroups").empty();

    var adoptionGroups = "";

    // Add the adoption groups
    for(var i=0;i<thisPetData.adoption.length;i++){
        adoptionGroups += "<li><a href=\""+thisPetData.adoption[i].url+"\" target=\"_blank\">"+thisPetData.adoption[i].name+"</a></li>";
    }
    $(".adoptionGroups").append(adoptionGroups);

// end selectPet
};

jQuery(document).ready(function(){

    // Initial run

    // Set horse to default pet selection
   
    selectPet("horse");

    //Update whenever a new value is picked

});


