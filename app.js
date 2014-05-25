// Javascript start***************************

//Create an object for the app 

var foodApp = {}

foodApp.currentPairing = '',

//Make a property to hold API key

// foodApp.apiKey = "wgjnrqfprz74ue73gh7ksnhb";
// foodApp.UID = "Eat+This-Drink+that"

// method to make AJAX request inside init function

foodApp.init= function(){
	foodApp.currentPairing = pairs[0];
	

	// var userChoice = $(".interestedButton").data; 

	
 };

 $(".interestedButton").click(function(){
       console.log("click");
		foodApp.getlisting(foodApp.currentPairing.querystring);
	});

  
  $(".notInterestedButton").click(function(){
    	var randomPair = Math.floor(Math.random()*3);
	console.log(randomPair);
	foodApp.currentPairing = pairs[randomPair];
	var foodImage =$('.food').attr("src", foodApp.currentPairing.foodImg);
	var drinkImage=$('.drink').attr("src", foodApp.currentPairing.drinkImg);
	$('.food').append(foodImage);
	$('.drink').append(drinkImage)
      
  });

   // foodApp.currentPairing = pairs[2];
  	//  // console.log(foodApp.currentPairing)
  	//  var foodImage =$('.food').attr("src", foodApp.currentPairing.foodImg);
  	//  var drinkImage=$('.drink').attr("src", foodApp.currentPairing.drinkImg);
   //   $('.food').append(foodImage);
   //   $('.drink').append(drinkImage)

//Ajax request 

foodApp.getlisting = function(pairing){
	$.ajax({
  	url: 'http://api.sandbox.yellowapi.com/FindBusiness/?where=Downtown+Toronto&pgLen=400&pg=1&dist=1&fmt=JSON&lang=en&UID=Eat+This-Drink+that&apikey=wgjnrqfprz74ue73gh7ksnhb',
  	type: 'GET',
	data: {
	  what: pairing,
	  format:'jsonp',
	},
	  success: function(result) {
	  	console.log('success');
	  	 foodApp.displaylisting(result.listings);
	  	 // foodApp.displaylisting1(result.listings.address)
	  	 
	  }
	});
};	



//Create a new displayPieces method that will handle parsing 

foodApp.displaylisting = function(data){
//     //put restaurant listings on the page
  $.each(data, function(i, chunk){
//   	//Inside the $.each function generate the HTML required
    var title = $('<h2>').text(chunk.name);
    var address =$('<p>').text(chunk.address.street);
    var address1 =$('<p>').text(chunk.address.city);
    var address2 =$('<p>').text(chunk.address.prov);
    var address3 =$('<p>').text(chunk.address.pcode);
    var distance =$('<p>').text(chunk.distance + " km from Downtown Core");
    var listings = $('<div>').addClass('restaurant').append(title, distance, address, address1,address2,address3);
    // var location = $('<div>').addClass('address').append(address)
// foodApp.

// 	//Finally, we append the completed listings divs into the DOM.
	$('#restaurants').append(listings);
   });
};

//define pairs function 
	// function testmatch() {
 //      var foodOne = pairs[0] + pairs[1];
 //      var foodTwo = pairs[2] + pairs[3];
 //      // var combine = foodOne + foodTwo;
 //      // console.log(combine)
	// }




// 		function changeImg(){ 
// 	var imag = document.getElementsByTagName('img'); 
// 	for(var i=0;i<imag.length;i++){ 
// 	if(imag[i].getAttribute('src')=='images/BEER.jpg'){ 
// 	imag[i].removeAttribute('height'); 
// 	imag[i].setAttribute('src','images/bourbon.png'); 
// } 
// } 
// } 

	 // document.getElementById("beer").innerHTML ='<img src="images/bourbon.png">';

	// $('#restaurants').empty()
	// $('#burger').empty(),
	// $('#beer').empty();






//Start of JQuery to get the JS to actually run ****************************************

// $(function(){
//   foodApp.init();

// }); 