// Have a list of images
var animalImageList = ["animal1.jpg", "animal2.jpg", "animal3.jpg", "animal4.jpg", "animal5.jpg", "animal6.jpg", "animal7.jpg"];


// Know what image we are on
var imageNumber = 1; 

// Function to set image
function setImage(imageNumberSelected){

	// Get the image in imageNumberSelecter position of the array
	var newSrc = "images/" + animalImageList[
		imageNumberSelected];

	// Set the src of the image in the html to the image name
	jQuery("#image-to-vote-on").attr("src",newSrc);

}

// Function for next image
function nextImage(){
	imageNumber++;

	if(imageNumber >= animalImageList.length){
		setImage(imageNumber);
	}

	setImage(imageNumber);

}

// Function for previous image
function previousImage(){
	imageNumber--;

	if(imageNumber <0){
		imageNumber = animalImageList.length-1;
	}

	setImage(imageNumber);

}


// Bind previous and next buttons to functions

jQuery(document).on("ready",function(){
	jQuery("#btnNext").on("click", nextImage);
	jQuery("#btnPrevious").on("click", previousImage);

});