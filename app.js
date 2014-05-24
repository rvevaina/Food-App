// Javascript start***************************

//Create an object for the app 

var foodApp = {}

//Make a property to hold API key

// foodApp.apiKey = "wgjnrqfprz74ue73gh7ksnhb";
// foodApp.UID = "Eat+This-Drink+that"

// method to make AJAX request inside init function

foodApp.init= function(){
foodApp.getlisting ();
};

//Ajax request 

foodApp.getlisting=function(query){
	var userChoice = "burger + beer"
	$.ajax({
  	url: 'http://api.sandbox.yellowapi.com/FindBusiness/?what=nachos+tequila&where=Downtown+Toronto&pgLen=400&pg=1&dist=1&fmt=JSON&lang=en&UID=Eat+This-Drink+that&apikey=wgjnrqfprz74ue73gh7ksnhb',
  	type: 'GET',
	  data: {
	  format:'jsonp',
	  },
	  success: function(result) {
	  	 // console.log(result);
	  	 foodApp.displaylisting(result.listings);
	  	 // foodApp.displaylisting1(result.listings.address)
	  	 
	  }
	});
};	

var userChoice = $(".button").data; 

$( ".button" ).click(function(){
	foodApp.init();
});

//Create a new displayPieces method that will handle parsing 

foodApp.displaylisting = function(data){
//     //put restaurant listings on the page
  $.each(data, function(i, chunk){
//   	//Inside the $.each function generate the HTML required
    var title = $('<h2>').text(chunk.name);
    var address =$('<p>').text(chunk.address.street);
    var distance =$('<p>').text(chunk.distance);
    var listings = $('<div>').addClass('restaurant').append(title, distance, address);
    // var location = $('<div>').addClass('address').append(address)
// foodApp.
// 	var artist = $('<p>').addClass('artist').text(piece.principalOrFirstMaker);
// 	var image = $('<img>').attr('src', piece.webImage.url);
// 	var artPiece = $('<div>').addClass('piece').append(image, title, artist);
// 	//Finally, we append the completed artPiece divs into the DOM.
	$('#restaurants').append(listings);
	

   });
};

// foodApp.displaylisting1 = function(data){
// //     //put restaurant listings on the page
//   $.each(data, function(i, chunk){
//  // var title = $('<h2>').text(chunk.name);
//     var street =$('<p>').text(chunk.street);
//     // var distance =$('<p>').text(chunk.distance);
//     // var listings = $('<div>').addClass('restaurant').append(title, distance);
//     var location = $('<div>').addClass('address').append(street)
// // foodApp.
// // 	var artist = $('<p>').addClass('artist').text(piece.principalOrFirstMaker);
// // 	var image = $('<img>').attr('src', piece.webImage.url);
// // 	var artPiece = $('<div>').addClass('piece').append(image, title, artist);
// // 	//Finally, we append the completed artPiece divs into the DOM.
// 	$('#restaurantAdd').append(location);

//    });
// };

//Start of JQuery to get the JS to actually run ****************************************

// $(function(){
//   foodApp.init();
// }); 