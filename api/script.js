// MAKE SURE TO DISABLE THE "REFRESH APP ON CHANGES"
// GLITCH SETTING FOR THIS PROJECT TO AVOID API LIMIT

$(function() {
  // Your JavaScript goes inside this special function wrapper.
  
  var apiKey = '13642968f0a99e3bf5980965ebe7d0ad'; // replace with your personal api key from openweathermap.org
  
  $.get('https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=' + apiKey, function(data) {
    // The get request fires a callback function when the API request finishes
    console.log('response data:', data);
    
    // The data object contains all the information returned in the API
    var weather = data.weather[0];
    var windSpeed = data.wind.speed;
    var temp = data.main.temp;
    var tempFeel = data.wind.speed;
    var cloudValue = data.clouds.all;

    
    // In this case, the most interesting bit of data is in the weather key
    // Now do something interesting with the data!
    $('.weather').append('es muy caliente pero tiene ' + weather.description);
    $('.wind').append('The wind speed is ' + windSpeed);
    $('.feelslike').append('The current weather feels like' + tempFeel + 'F');

    if ( windSpeed > 5 ) {
      $('.wind').append("... ayyy dale, es windy outside bcareful!");
    } else {
      $('.wind').append("... can't fly a kite, it's not windy at all.")
    }
  }).fail(function() {
    // You can also handle fail states in case the request to the API didn't work
    $('body').append('The weather failed to load, check your API Key, or you may be making too many requests. You have a limit of 60 requests per limit to openweathermap.org.');
  });



});
