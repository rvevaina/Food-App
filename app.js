//Create an empty object for the app
var foodApp = {};

// Create empty object to hold food+drink pairings
foodApp.currentPairing = '';

foodApp.location = '';

 $("#go").click(function(){

	 // Send city location to AJAX request
	 foodApp.location = $("#citySearch").val();

	 console.log(foodApp.location);

	 // Randomize food and drink pairings
	 var randomPair = Math.floor(Math.random()*8);

	 //Add food + drink images to current pairing after randomizing pairs array
	 foodApp.currentPairing = pairs[randomPair];

	 // Access the food + drink images values and give it a src attribute
	 var foodImage = $('.food').attr("src", foodApp.currentPairing.foodImg);
	 var drinkImage= $('.drink').attr("src", foodApp.currentPairing.drinkImg);

	 //Append images to the appropriate divs
	 $('.food').append(foodImage);
	 $('.drink').append(drinkImage);

	 // Animate div opacity on submit click
	 $('.location').animate({ "opacity": "0" }, 1200 );
	 $('.images').animate({ "opacity": "1" }, 1200 );
 });

$('#citySearch').keypress(function(e){
	if(e.which == 13){ //Enter key pressed
		$('#go').click();//Trigger search button click event
		foodApp.location = $("#citySearch").val();
	}
});


 $(".interestedButton").click(function(){
	 console.log("click");

	 // call getListing function calling AJAX request
	 foodApp.getlisting(foodApp.currentPairing.querystring);

	 //scroll down to listings

	 $('html, body').animate({
		 scrollTop: $("#restaurants").offset().top
	 }, 2000);
 });


$(".notInterestedButton").click(function(){

	// Randomize food and drink pairings and append new images
	var randomPair = Math.floor(Math.random()*8);
	foodApp.currentPairing = pairs[randomPair];
	var foodImage =$('.food').attr("src", foodApp.currentPairing.foodImg);
	var drinkImage=$('.drink').attr("src", foodApp.currentPairing.drinkImg);
	$('.food').append(foodImage);
	$('.drink').append(drinkImage);

	//Empty current restaurant listings
	$('#restaurants').empty();
});


//Ajax request to get restaurant listings



foodApp.getlisting = function(pairing){
	$.ajax({
  	url: 'http://api.sandbox.yellowapi.com/FindBusiness/?pgLen=40&pg=1&dist=1&fmt=JSON&lang=en&UID=Eat+This-Drink+that&apikey=wgjnrqfprz74ue73gh7ksnhb',
  	type: 'GET',
	data: {
	  what: pairing,
	  where: foodApp.location,
	  format:'jsonp'
	},
	  success: function(result) {
	  	console.log('success');
	  	 foodApp.displaylisting(result.listings);
	  }
	});
};


//displaylisting function to handle parsing the API data

foodApp.displaylisting = function(data){

//put restaurant listings on the page
  $.each(data, function(i, chunk){
//Inside the $.each function generate the HTML required
    var title = $('<h2>').text(chunk.name);
    var address =$('<p>').text(chunk.address.street);
    var address1 =$('<p>').text(chunk.address.city);
    var address2 =$('<p>').text(chunk.address.prov);
    var address3 =$('<p>').text(chunk.address.pcode);
    var distance =$('<p>').text(chunk.distance + " km from Downtown Core");
    var listings = $('<div>').addClass('restaurant').append(title, distance, address, address1,address2,address3);

//Finally, append the completed listings divs into the DOM.
	$('#restaurants').append(listings);
   });
};

