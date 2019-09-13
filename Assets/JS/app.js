console.log('Hello');

// Global Variables =====================================
var cityDestination = $('#cityDestination');
var stateDestination = $('#stateDestination');




// Weather API ==================================================

//My custome key for the API provided by the developer account that I signed up for.
var weatherAPI_KEY = "e692f2a04d92b2b65f00c937f4db00cb";
//My SEARCH query.
var query = "Nashville";
//The API base address. All queries begin with a "?" ???
var weatherAPI_URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${weatherAPI_KEY}`;

function pullCurrentWeather(apiKey, apiURL) {
  var options = {
    url: weatherAPI_URL,
    method: 'GET'
  }

  $.ajax(options).then(function(response) {
    console.log(response);
  })
};

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
pullCurrentWeather(weatherAPI_KEY, weatherAPI_URL);