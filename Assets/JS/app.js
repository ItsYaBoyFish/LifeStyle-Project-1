//For testing to see if the file is attached properly.
console.log("[ ***** LIFESTYLE PROJECT1 :: app.js attached! *****]");

/*
console.log('Hello');
$('body').on('click', '.modal', function () {
  // console.log($('form').get(0));
  $('form')[0].reset()
})
*/

/*
// Global Variables =====================================
var cityDestination = $('#cityDestination');
var stateDestination = $('#state');

*/

// ZOMATO API ===================================================

var restaurantNamesPulled = [];
var restaurantAddressPulled = [];
var restaurantPhotosPulled = [];

//curl -X GET --header "Accept: application/json" --header "user-key: 5a9a2d6c7e0e0c88649b433e13494734" "https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=Nashville&count=10&radius=100"

//API Key
var zomato_API_KEY = "5a9a2d6c7e0e0c88649b433e13494734";
//My Search query. Use the Zomato Website and City Code search section under documentation --> API
var city_URL = "entity_id=";
var city_code = "1138";
var search_type = "&entity_type=";
var search_criteria = "city";
var results_amount = "&count=";
var results_limit = "3";
var remainder = "&lat=36.1627&lon=86.7816&radius=100&sort=cost&order=asc";

//The API base address.
var zomato_BASE_URL = "https://developers.zomato.com/api/v2.1/search?";

var zomato_FULL_URL = zomato_BASE_URL + city_URL + city_code + search_type + search_criteria + results_amount + results_limit + remainder;

//(https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=10&lat=36.1627&lon=86.7816&radius=100&sort=cost&order=asc)



//***** SEARCH FUNCTION *****
function pullFoodStuffs(zomato_FULL_URL) {

  console.log("[DEBUG] :: pullFoodStuffs entered")
  var options = {
    url: zomato_FULL_URL,
    method: 'GET',
    headers: {
      "user-key": "5a9a2d6c7e0e0c88649b433e13494734",
      Accept: "application/json"
    }
  }


  console.log("[DEBUG] :: AJAX incoming")
  $.ajax(options).then(function (response) {

    console.log("[DEBUG] :: pullFoodStuffs entered")
    console.log("AJAX RESPONSE: ", response);
    console.log("NAME: ", response.restaurants[0].restaurant.name);
    console.log("LOCATION: ", response.restaurants[0].restaurant.location);
    console.log("PHOTO_URL: ", response.restaurants[0].restaurant.photos[0].photo.thumb_url);

    for (i = 0; i < results_limit; i++) {



      var testObject = {
        name: response.restaurants[i].restaurant.name,
        location: response.restaurants[i].restaurant.location,
        photo: response.restaurants[i].restaurant.photos[0].photo.thumb_url
      }

      if (i === 0) {
        testFoodStuffs1(testObject);
      }

      if (i === 1) {
        testFoodStuffs2(testObject);
      }

      if (i === 2) {
        testFoodStuffs3(testObject);
      }
    }

    console.log(" [testObject] :: ", testObject);

    /*
    console.log("[DEBUG] :: storeFoodStuffs incoming")
    storeFoodStuffs(response);

    console.log("[DEBUG] :: displayFoodStuffs incoming")
    */

    //testFoodStuffs(testObject);
    //generateOneCard(testObject);
  });



};



function testFoodStuffs1(testObject) {

  console.log(" [testObject] *Inside testFoodStuffs :: ", testObject);

  $("#test0IMG").attr("src", testObject.photo);
  $("#test0Title").append(testObject.name);
  $("#test0Location").text(testObject.location.address);
};

function testFoodStuffs2(testObject) {

  console.log(" [testObject] *Inside testFoodStuffs :: ", testObject);

  $("#test1IMG").attr("src", testObject.photo);
  $("#test1Title").append(testObject.name);
  $("#test1Location").text(testObject.location.address);
};

function testFoodStuffs3(testObject) {

  console.log(" [testObject] *Inside testFoodStuffs :: ", testObject);

  $("#test2IMG").attr("src", testObject.photo);
  $("#test2Title").append(testObject.name);
  $("#test2Location").text(testObject.location.address);
};



function generateOneCard(testObject) {
  console.log("[DEBUG] :: displayFoodStuffs entered")

  for (y = 0; y < results_limit; y++) {
    console.log("[DEBUG] :: displayFoodStuffs 'for' loop. ITERATION: ", y)
    //create the card
    var card = $("<div>");
    //turn it into a card
    card.addClass("card mb-3");
    //add the width property
    card.attr("style", "max-width: 540px;");

    console.log("[DEBUG] :: displayFoodStuffs [CARD] created")



    //create the div inside the card holding our image on the left AND our text on the right
    var row = $("<div>");
    //add necessary class
    row.addClass("row no-gutters");

    console.log("[DEBUG] :: displayFoodStuffs [ROW] created")


    // >>> APPEND the row to the card <<<
    card.append(row);

    console.log("[DEBUG] :: displayFoodStuffs [ROW>APPEND>CARD]")


    //create the column that holds the image (to the left)
    var columnIMG = $("<div>");
    //add necessary class
    columnIMG.addClass("col-md-4");

    console.log("[DEBUG] :: displayFoodStuffs [LEFT IMG COLUMN] created")


    //add the image to the left column     **** May need to check formatting, "" needing to be removed, updating properly etc.
    var restaurantIMG = $("<img>");
    //add the necessary id and attributes
    restaurantIMG.attr("id", "card" + y + "image");
    restaurantIMG.attr("src", testObject.photo);
    //https://b.zmtcdn.com/data/reviews_photos/91e/f8c2767a3eb7a846e46b43b03a12c91e_1490324315.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A
    restaurantIMG.addClass("card-image");

    console.log("[DEBUG] :: displayFoodStuffs [RESTAURANT IMG] created and updated")


    // >>> APPEND the image to the column <<<
    columnIMG.append(restaurantIMG);

    console.log("[DEBUG] :: displayFoodStuffs [RESTAURANT IMG>APPEND>LEFT IMG COLUMN]")


    // >>> APPEND the left column to the row <<<
    row.append(columnIMG);

    console.log("[DEBUG] :: displayFoodStuffs [LEFT IMG COLUMN>APPEND>ROW]")


    //create the column that holds the text (to the right)
    var columnTEXT = $("<div>");
    //add the necessary class
    columnTEXT.addClass("col-md-8");

    console.log("[DEBUG] :: displayFoodStuffs [RIGHT TEXT COLUMN] created")


    //create the container for the <p> tags and title
    var bodyText = $("<div>");
    //add the necessary class for the card body
    bodyText.addClass("card-body");

    console.log("[DEBUG] :: displayFoodStuffs [BODY TEXT DIV] created")

    //create the title div
    var bodyTitle = $("<h5>");
    //add the class
    bodyTitle.addClass("card-title");
    //add the id for targetting
    bodyTitle.attr("id", "card0title");

    console.log("[DEBUG] :: displayFoodStuffs [BODY TITLE h5] created")

    //create the text div
    var bodyLocation = $("<div>");
    //add the class
    bodyLocation.addClass("card-text");
    //add the id for targetting
    bodyLocation.attr("id", "card0location");

    console.log("[DEBUG] :: displayFoodStuffs [BODY LOCATION DIV] created")


    // >>> APPEND all of the content to the bodyText container <<<
    bodyText.append(bodyTitle);
    bodyText.append(bodyLocation);

    console.log("[DEBUG] :: displayFoodStuffs [bodyTitle, bodyLocation > APPEND > bodyText]")

    // >>> APPEND the bodyText container to the right column <<<
    columnTEXT.append(bodyText);

    console.log("[DEBUG] :: displayFoodStuffs [bodyText>APPEND>RIGHT TEXT COLUMN]")

    // >>> APPEND the right column to the row <<<
    row.append(columnTEXT);

    console.log("[DEBUG] :: displayFoodStuffs [RIGHT TEXT COLUMN>APPEND>ROW]")



    // ===== ===== ===== Update all of the content from the arrays ===== ===== =====


    $("#card0title").text(testObject.name);
    $("#card0location").text(testObject.location.address);

    // ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
    //Don't forget to target the container zomatoArea to append the whole shabang!
    $("#zomatoArea").append(card);

  }
}



/*
//***** DATA STORAGE FUNCTION *****
function storeFoodStuffs(response) {
  console.log("[DEBUG] :: storeFoodStuffs entered");
  console.log(" [DEBUG] :: RESPONSE: ", response)
  console.log("[DEBUG] :: storeFoodStuffs 'for' loop incoming");
  for (z = 0; z < results_limit; z++) {
 
    console.log("[DEBUG] :: storeFoodStuffs 'for' loop entered");
    console.log("[DEBUG] :: storeFoodStuffs 'for' iterator: ", z);
 
 
 
    //Dumping the necessary information into the respective arrays.
    restaurantNamesPulled.push(response.restaurants[z].restaurant.name);
    console.log("[DEBUG] :: storeFoodStuffs restaurant name stored")
    restaurantAddressPulled.push(response.restaurants[z].restaurant.location);
    console.log("[DEBUG] :: storeFoodStuffs restaurant address stored")
    restaurantPhotosPulled.push(response.restaurants[z].restaurant.photos[0].photo.thumb_url);
    console.log("[DEBUG] :: storeFoodStuffs restaurant photos_url stored")
 
    //checking for array updates.
    console.log("NAMES PULLED: ", restaurantNamesPulled);
    console.log("ADDRESS PULLED: ", restaurantAddressPulled);
    console.log("PHOTOS PULLED: ", restaurantPhotosPulled);
 
    console.log("[DEBUG] :: EXITING storeFoodStuffs")
  }
 
  displayFoodStuffs();
}
 
 
 
//***** DISPLAY *****
function displayFoodStuffs() {
  console.log("[DEBUG] :: displayFoodStuffs entered")
 
  for (y = 0; y < restaurantNamesPulled.length; y++) {
    console.log("[DEBUG] :: displayFoodStuffs 'for' loop. ITERATION: ", y)
    //create the card
    var card = $("<div>");
    //turn it into a card
    card.addClass("card mb-3");
    //add the width property
    card.attr("style", "max-width: 540px;");
 
    console.log("[DEBUG] :: displayFoodStuffs [CARD] created")
 
 
 
    //create the div inside the card holding our image on the left AND our text on the right
    var row = $("<div>");
    //add necessary class
    row.addClass("row no-gutters");
 
    console.log("[DEBUG] :: displayFoodStuffs [ROW] created")
 
 
    // >>> APPEND the row to the card <<<
    card.append(row);
 
    console.log("[DEBUG] :: displayFoodStuffs [ROW>APPEND>CARD]")
 
 
    //create the column that holds the image (to the left)
    var columnIMG = $("<div>");
    //add necessary class
    columnIMG.addClass("col-md-4");
 
    console.log("[DEBUG] :: displayFoodStuffs [LEFT IMG COLUMN] created")
 
 
    //add the image to the left column     **** May need to check formatting, "" needing to be removed, updating properly etc.
    var restaurantIMG = $("<img>");
    //add the necessary id and attributes
    restaurantIMG.attr("id", "card" + y + "image");
    restaurantIMG.attr("src", restaurantPhotosPulled[y]);
    //https://b.zmtcdn.com/data/reviews_photos/91e/f8c2767a3eb7a846e46b43b03a12c91e_1490324315.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A
    restaurantIMG.addClass("card-image");
 
    console.log("[DEBUG] :: displayFoodStuffs [RESTAURANT IMG] created and updated")
 
 
    // >>> APPEND the image to the column <<<
    columnIMG.append(restaurantIMG);
 
    console.log("[DEBUG] :: displayFoodStuffs [RESTAURANT IMG>APPEND>LEFT IMG COLUMN]")
 
 
    // >>> APPEND the left column to the row <<<
    row.append(columnIMG);
 
    console.log("[DEBUG] :: displayFoodStuffs [LEFT IMG COLUMN>APPEND>ROW]")
 
 
    //create the column that holds the text (to the right)
    var columnTEXT = $("<div>");
    //add the necessary class
    columnTEXT.addClass("col-md-8");
 
    console.log("[DEBUG] :: displayFoodStuffs [RIGHT TEXT COLUMN] created")
 
 
    //create the container for the <p> tags and title
    var bodyText = $("<div>");
    //add the necessary class for the card body
    bodyText.addClass("card-body");
 
    console.log("[DEBUG] :: displayFoodStuffs [BODY TEXT DIV] created")
 
    //create the title div
    var bodyTitle = $("<h5>");
    //add the class
    bodyTitle.addClass("card-title");
    //add the id for targetting
    bodyTitle.attr("id", "card" + y + "title");
 
    console.log("[DEBUG] :: displayFoodStuffs [BODY TITLE h5] created")
 
    //create the text div
    var bodyLocation = $("<div>");
    //add the class
    bodyLocation.addClass("card-text");
    //add the id for targetting
    bodyLocation.attr("id", "card" + y + "location");
 
    console.log("[DEBUG] :: displayFoodStuffs [BODY LOCATION DIV] created")
 
 
    // >>> APPEND all of the content to the bodyText container <<<
    bodyText.append(bodyTitle);
    bodyText.append(bodyLocation);
 
    console.log("[DEBUG] :: displayFoodStuffs [bodyTitle, bodyLocation > APPEND > bodyText]")
 
    // >>> APPEND the bodyText container to the right column <<<
    columnTEXT.append(bodyText);
 
    console.log("[DEBUG] :: displayFoodStuffs [bodyText>APPEND>RIGHT TEXT COLUMN]")
 
    // >>> APPEND the right column to the row <<<
    row.append(columnTEXT);
 
    console.log("[DEBUG] :: displayFoodStuffs [RIGHT TEXT COLUMN>APPEND>ROW]")
 
 
 
    // ===== ===== ===== Update all of the content from the arrays ===== ===== =====
 
 
    console.log("[DEBUG] :: NAMESPULLEDARRAY: ", restaurantNamesPulled[y]);
    console.log("[DEBUG] :: NAMESPULLEDARRAY: ", restaurantAddressPulled[y]);
 
    $("card" + y + "title").text(restaurantNamesPulled[y]);
    $("card" + y + "location").text(restaurantAddressPulled[y]);
 
    // ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
 
    updateText(y);
 
 
    //Don't forget to target the container zomatoArea to append the whole shabang!
    $("#zomatoArea").append(card);
 
  }
 
 
}
*/









//For loop for storing how many restaurants we want based on our "results_limit" variable from above.
//Put those movies into an array (appending).
//For each item in the array, add dynamic classes, ids, and attributes so the cards can be targeted.
//Update the cards with the necessary info.



/*
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
 
  $.ajax(options).then(function (response) {
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
 
  $.ajax(options).then(function (response) {
    console.log(response);
  });
}
 
// Event Listeners (Button Clicks) ========================================
var submitBtn = $('#submitBtn');
var closeBtn = $('#closeBtn');
 
submitBtn.on('click', function (e) {
  // Prevent Default Form Submit
  e.preventDefault();
 
  console.log(cityDestination.val());
  console.log(stateDestination.val());
})
 
 
 
 
// API Calls ===============================================================
 
 
// pullCurrentWeather(weatherAPI_KEY, weatherAPI_URL);
// pullTicketMasterData();
 
*/

console.log("[DEBUG] :: pullFoodStuffs incoming")
pullFoodStuffs(zomato_FULL_URL);


