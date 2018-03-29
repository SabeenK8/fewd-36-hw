
jQuery(document).ready(function(){

jQuery("#submit").click(function(){

// Get values

var a = jQuery("#a").val();
var b = jQuery("#b").val();

console.log(a);
console.log(b);


// If A > B show >

if ( parseFloat(a) > parseFloat(b) ){
	jQuery("#comparison").text(">");
}

// If A < B show <

if ( parseFloat(b) > parseFloat(a) ){
	jQuery("#comparison").text("<");
}

// If A = B show ==

if ( parseFloat(a) == parseFloat(b) ){
	jQuery("#comparison").text("==");
}

// If A or B is NaN, show NaN

if(isNaN(a) || isNaN(b)){
	jQuery("#comparison").text("NaN");
}

});

})