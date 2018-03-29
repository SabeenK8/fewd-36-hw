var lights = "on";

function switchLights() {

 // if lights are on
if(lights == "on"){
	 // turn off
	 jQuery("body").addClass("dark");
	 lights = "off";
}else{
	 // else
 	// turn on
 	 jQuery("body").removeClass("dark");
 	 lights = "on";
	}
}

jQuery('#light_switch').click(switchLights);
