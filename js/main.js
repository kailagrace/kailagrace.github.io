 // JavaScript Document
  
  
  //insert sponser photos and replace on hover with alternates
  $(document).ready(function(){
	  $('img').mouseover(function(){
	var newSrc = $(this).attr("src").replace("cycling-team/img/sponsers/gulogoBW.jpg", "cycling-team/img/sponsers/gulogo.jpg");
	$(this).attr("src", newSrc); 
  
	var newSrc2 = $(this).attr("src").replace("cycling-team/img/sponsers/storrs-center2.jpg", "cycling-team/img/sponsers/storrs-center.jpg");
	$(this).attr("src", newSrc2); 
	
	
	var newSrc3 = $(this).attr("src").replace("cycling-team/img/sponsers/xfusionBW.jpg", "cycling-team/img/sponsers/xfusion.jpg");
	$(this).attr("src", newSrc3); 
	
   
	var newSrc4 = $(this).attr("src").replace("cycling-team/img/sponsers/osmoBW.jpg",
	 "cycling-team/img/sponsers/osmo.jpg");
	$(this).attr("src", newSrc4); 
	
	 var newSrc5 = $(this).attr("src").replace("cycling-team/img/sponsers/sixsixonelogoBW.jpg",
	 "cycling-team/img/sponsers/sixsixonelogo.jpg");
	$(this).attr("src", newSrc5); 
	
	  var newSrc6 = $(this).attr("src").replace("cycling-team/img/sponsers/kineticBW.jpg",
	 "cycling-team/img/sponsers/kinetic.jpg");
	$(this).attr("src", newSrc6); 
	
	
	
  });
  $('img').mouseout(function(){
	var newSrc = $(this).attr("src").replace("cycling-team/img/sponsers/gulogo.jpg", "cycling-team/img/sponsers/gulogoBW.jpg");
	$(this).attr("src", newSrc); 
	
	 var newSrc2 = $(this).attr("src").replace("cycling-team/img/sponsers/xfusion.jpg", "cycling-team/img/sponsers/xfusionBW.jpg");
	$(this).attr("src", newSrc2); 
	
	  var newSrc3 = $(this).attr("src").replace("cycling-team/img/sponsers/storrs-center.jpg", "cycling-team/img/sponsers/storrs-center2.jpg");
	$(this).attr("src", newSrc3); 
	
	  var newSrc4 = $(this).attr("src").replace("cycling-team/img/sponsers/osmo.jpg", 
	  "cycling-team/img/sponsers/osmoBW.jpg");
	$(this).attr("src", newSrc4); 
	
	  var newSrc5 = $(this).attr("src").replace("cycling-team/img/sponsers/sixsixonelogo.jpg", 
	  "cycling-team/img/sponsers/sixsixonelogoBW.jpg");
	$(this).attr("src", newSrc5); 
	
	  var newSrc6 = $(this).attr("src").replace("cycling-team/img/sponsers/kinetic.jpg", 
	  "cycling-team/img/sponsers/kineticBW.jpg");
	$(this).attr("src", newSrc6); 
	
  });
	  
	//insert a method to create the appropriate html for new sponsers//
	
  });