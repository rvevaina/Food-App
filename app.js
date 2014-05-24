// Javascript start***************************

//Create an object for the app 

var foodApp = {}

//Make a property to hold API key

foodApp.apiKey = "09c4850c082c00bab47f2116a134724e";
foodApp.appId = "55ce3b8a";
// method to make AJAX request inside init function

foodApp.init= function(){
foodApp.getlisting ();
};

//Ajax request 

foodApp.getlisting=function(query){
	var userChoice = "burger + beer"
	$.ajax({
  	url: 'https://api.nutritionix.com/v1_1/search/' + userChoice,
  	type: 'GET',
	  data: {
	  appKey: foodApp.apiKey,
	  appId: foodApp.appId,
	  format:'jsonp',
	  cal_min: '0',
	  cal_max: '50000'
	  },
	  success: function(result) {
	  	 // console.log(result);
	  	 foodApp.displaylisting(result.brand_name);
	  	 console.log(brand_name)
	  }
	});
};	

var userChoice = $(".button").data; 

$( ".button" ).click(function(){
	foodApp.init();
});

// parseData = function(data){
//     //put art stuff on the page
//   $.each(data, function(i, piece){
//   	//Inside the $.each function generate the HTML required
//     var title = $('<h2>').text(piece.title);
// 	var artist = $('<p>').addClass('artist').text(piece.principalOrFirstMaker);
// 	var image = $('<img>').attr('src', piece.webImage.url);
// 	var artPiece = $('<div>').addClass('piece').append(image, title, artist);
// 	//Finally, we append the completed artPiece divs into the DOM.
// 	$('#artwork').append(artPiece);
//    });
// };



//Start of JQuery to get the JS to actually run ****************************************

$(function(){
  foodApp.init();
}); 