
console.log('Hello');
$('body').on('click', '.modal', function() {
    // console.log($('form').get(0));
    $('form')[0].reset()
})

console.log("[ ***** LIFESTYLE PROJECT1 :: app.js attached! *****]");

// Global Variables =====================================
var cityDestination = $('#cityDestination');
var stateDestination = $('#state');



// ZOMATO API ===================================================

//curl -X GET --header "Accept: application/json" --header "user-key: 5a9a2d6c7e0e0c88649b433e13494734" "https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=Nashville&count=10&radius=100"

//API Key
var zomato_API_KEY = "5a9a2d6c7e0e0c88649b433e13494734";
//My Search query. Use the Zomato Website and City Code search section under documentation --> API
var city_URL = "entity_id=";
var city_code = "1138";
var search_type = "&entity_type=";
var search_criteria = "city";
var results_amount = "&count=";
var results_limit = "10";
var remainder = "&lat=36.1627&lon=86.7816&radius=100&sort=cost&order=asc";

//The API base address.
var zomato_BASE_URL = "https://developers.zomato.com/api/v2.1/search?";

var zomato_FULL_URL = zomato_BASE_URL + city_URL + city_code + search_type + search_criteria + results_amount + results_limit + remainder;

//(https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=10&lat=36.1627&lon=86.7816&radius=100&sort=cost&order=asc)

//***** SEARCH FUNCTION *****
function pullFoodStuffs(zomato_FULL_URL) {
var options = {
  url: zomato_FULL_URL,
  method: 'GET',
  headers: { "user-key": "5a9a2d6c7e0e0c88649b433e13494734"}
}

$.ajax(options).then(function(response) {
  console.log(response);
  console.log("NAME: ", response.restaurants[0].restaurant.name);
  console.log("LOCATION: ", response.restaurants[0].restaurant.location);
  console.log("PHOTO_URL: ", response.restaurants[0].restaurant.photos_url);
})
};



// Weather API ==================================================

//My customer key for the API provided by the developer account that I signed up for.
var weatherAPI_KEY = "e692f2a04d92b2b65f00c937f4db00cb";
//My SEARCH query.
var query = "Nashville";
//The API base address. All queries begin with a "?" ???
var weatherAPI_URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${weatherAPI_KEY}&units=imperial`;

function pullCurrentWeather(apiKey, apiURL) {
  var options = {
    url: weatherAPI_URL,
    method: 'GET'
  }

  $.ajax(options).then(function(response) {
    console.log(response);


    console.log(response.main.temp);
  })
};

// TicketMaster API ===================================================

function pullTicketMasterData() {
  var city = 'Nashville';
  var apiKey = 'fb7yHnQINE0PIFf8ayDXeoSw6PDugZhe';
  var apiURL = `https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&apikey=${apiKey}`;

  var options = {
    url: apiURL,
    method: 'GET'
  };

  $.ajax(options).then(function(response) {
    // console.log(response);
    var data = response._embedded;
    var cardImgSrc = data.events[0].images[0].url;
    var cardTitle = data.events[0].name;

  


    console.log(response);
    console.log(cardTitle);
    
  });
}

// Event Listeners (Button Clicks) ========================================

var submitBtn = $('#submitBtn');
var closeBtn = $('#closeBtn');

submitBtn.on('click', function(e) {
  // Prevent Default Form Submit
  e.preventDefault();

  console.log(cityDestination.val());
  console.log(stateDestination.val());
})




// API Calls ===============================================================

//  pullFoodStuffs(zomato_FULL_URL);
// pullCurrentWeather(weatherAPI_KEY, weatherAPI_URL);
// pullTicketMasterData();



// DOM Manipulation =======================================================
// $('#card-img').attr('src', 'https://via.placeholder.com/50');
// $('#card-title').text('Testing DOM Manipulation');
// $('#card-text').text('Hello There! Testing to make sure cards can be manipulated through the dom.');
// $('#card-submit').attr('href', 'https://google.com')


// END OF ORIGINAL JS FILE ==============================================
// ====================================================================================
// ====================================================================================
// ====================================================================================
// ====================================================================================


console.log('Hello World');

// EMAIL JS Initialization
emailjs.init('user_IXhtnrmaOcstiR7H7xgSR');

// EmailJS Global Variables Needed
var savedEmail;
var currentPosition;


function loadARestCard() {
  // Variable used to append it to the HTML
  var holderDiv = $('.bottom-holder')
  // Variables for the new card. 
  // var cardColumnAdjustment = $('<div>');
  var cardDiv = $('<div>').attr('class', 'card rest-card');
  var cardHeader = $('<h5>').attr('class', 'card-title card-element');
  var cardBodyDiv = $('<div>').attr('class', 'card-body card-element');
  var cardBodyText = $('<p>').attr('class', 'card-body card-element');
  // var cardFooter = $('<div>').attr('class', 'card-footer card-element');


  // Loading the content of the card here:
  cardHeader.text('Testing the DOM Manipulation on a Card.');
  cardBodyText.text('This is a test to see how well they respond.');



  // Loads the inner text of the card body. 
  cardBodyDiv.append(cardBodyText);
  // Loads the Header information into the card Div. 
  cardDiv.append(cardHeader);
  // loads the card body div inside the card itself.  
  cardDiv.append(cardBodyDiv);
  // Then load the Footer for the card.
  // cardDiv.append(cardFooter);



  // This puts the card itself in the container div which holds the grid restrictions for it.
  // cardColumnAdjustment.append(cardDiv);
  

  // This places the div inside the holding place in the html.
  holderDiv.append(cardDiv);
};

loadARestCard()
loadARestCard()
loadARestCard()
loadARestCard()
loadARestCard()
loadARestCard()
loadARestCard()
loadARestCard()
loadARestCard()
loadARestCard()
loadARestCard()
loadARestCard()
loadARestCard()


function loadAEventCard(response) {

  var eventList = response._embedded.events;
  var data = response._embedded;

  for (var i = 0; i < eventList.length; i++) {
      // Variable used to append it to the HTML
  var holderDiv = $('.top-holder');

  // variables for creating internal divs.
  var theCardItself = $('<div>').attr('class', 'card');
  var cardBodyDiv = $('<div>').attr('class', 'card-body');
 
  // Variables for Rows and Grid Patterns
  var overallGridPatternForCards = $('<div>').attr('class', 'col-md-6');
  var overallInternalRow = $('<div>').attr('class', 'row no-gutters');
  var internalRowForCardImg = $('<div>').attr('class', 'col-md-4');
  var internalRowForCardBody = $('<div>').attr('class', 'col-md-8');

  // Variables for Content
  var imgHolderForCard = $('<img>').attr('class', 'card-img').attr('alt', 'Card Image');
  var cardTitle = $('<h5>').attr('class', 'card-title card-element');
  var cardText = $('<p>').attr('class', 'card-text card-element');
  var cardButton = $('<a>').attr('class', 'btn btn-link btn-sm card-element').text('More Info');
  var emailButton = $('<a>').attr('class', 'btn btn-link btn-sm email-button card-element').text('Enter Email Info');

  cardTitle.text(data.events[i].name);
  cardText.text(`Location: ${data.events[i]._embedded.venues[0].name}`);
  imgHolderForCard.attr('src', `${data.events[i].images[0].url}`).attr('style', 'width: 36px;').attr('style', 'height: 64px');
  cardButton.attr('href', data.events[i].url);
  emailButton.attr('href', '#');
  emailButton.attr('data-toggle','modal').attr('data-target','#emailCaptureModal');
  emailButton.attr('data-position', i);

  cardBodyDiv.append(cardTitle);
  cardBodyDiv.append(cardText);
  cardBodyDiv.append(cardButton);
  cardBodyDiv.append(emailButton);
  
  internalRowForCardImg.append(imgHolderForCard);
  internalRowForCardBody.append(cardBodyDiv);

  overallInternalRow.append(internalRowForCardImg);
  overallInternalRow.append(internalRowForCardBody)

  theCardItself.append(overallInternalRow);

  overallGridPatternForCards.append(theCardItself);
  
  holderDiv.append(overallGridPatternForCards);
  };

}

// AJAX call for Ticketmaster API
let options = {
  url: 'https://app.ticketmaster.com/discovery/v2/events.json?city=Nashville&apikey=fb7yHnQINE0PIFf8ayDXeoSw6PDugZhe',
  method: 'GET'
};

$.ajax(options).then(function(response) {
  console.log(response);
  loadAEventCard(response);
});

$(document).on('click', '.email-button', function() {
  currentPosition = $(this).attr('data-position');
  console.log(currentPosition);

});

$('#saveEmailBtn').on('click', function(e) {
  savedEmail = $('#email').val();
  console.log(savedEmail);
    $.ajax(options).then(function(response) {
    var data = response._embedded;
    let dataObject = {
      Email: savedEmail,
      Title: data.events[currentPosition].name,
      Location: data.events[currentPosition]._embedded.venues[0].name,
      Image: data.events[currentPosition].images[0].url,
      WesbiteLink: data.events[currentPosition].url
    }
    console.log(dataObject);

    //Email JS Send
    var data = {
      service_id: 'lifestyle_connect',
      template_id: 'lifesytle_template',
      user_id: 'user_IXhtnrmaOcstiR7H7xgSR',
      template_params: {
        'User_Email': dataObject.Email,
        'Title': dataObject.Title,
        'Location': dataObject.Location,
        'Image': dataObject.Image,
        'Link': dataObject.WesbiteLink
      }
    };
    console.log(dataObject.Email);

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).done(function() {
      alert('Your mail is sent!');
    }).fail(function(error) {
      alert('Oops... ' + JSON.stringify(error));
    });
  });
})

