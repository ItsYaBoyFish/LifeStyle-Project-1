
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
pullTicketMasterData();



// DOM Manipulation =======================================================
$('#card-img').attr('src', 'https://via.placeholder.com/50');
$('#card-title').text('Testing DOM Manipulation');
$('#card-text').text('Hello There! Testing to make sure cards can be manipulated through the dom.');
$('#card-submit').attr('href', 'https://google.com')