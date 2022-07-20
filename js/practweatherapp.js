// API Key methods
var apiKey = '12345';
Weather.setApiKey( apiKey );
var tempApiKey = Weather.getApiKey();

// Language methods
var language = "de"; // set the language to German - libraries default language is "en" (English)
Weather.setLanguage( language );
var tempLanguage = Weather.getLanguage();

var cityId = '4393217';

// Get current weather for a given city
Weather.getCurrent( 'Kansas City', function( current ) {
    console.log(
        [ 'Currently:', current.temperature(), 'and', current.conditions() ].join( ' ' ),
);
} );

// Get the current weather for a given city using the city id
Weather.getCurrentByCityId( cityId, function( current ) {
    console.log(
        [ 'Currently:', current.temperature(), 'and', current.conditions() ].join( ' ' ),
);
} );

// Get the current weather for a given city using the latitude and longitude
var lat = 39.100,
    long = -94.579;
Weather.getCurrentByLatLong( lat, long, function( current ) {
    console.log(
        [ 'Currently:', current.temperature(), 'and', current.conditions() ].join( ' ' ),
);
} );

// Get the forecast for a given city
Weather.getForecast( 'Kansas City', function( forecast ) {
    console.log( 'Forecast High in Kelvin: ' + forecast.high() );
    console.log( 'Forecast High in Fahrenheit' + Weather.kelvinToFahrenheit( forecast.high() ) );
    console.log( 'Forecast High in Celsius' + Weather.kelvinToCelsius( forecast.high() ) );
} );

// Get the forecast for a given city using the city id
Weather.getForecastByCityId( cityId, function( forecast ) {
    console.log( 'Forecast High in Kelvin: ' + forecast.high() );
    console.log( 'Forecast High in Fahrenheit' + Weather.kelvinToFahrenheit( forecast.high() ) );
    console.log( 'Forecast High in Celsius' + Weather.kelvinToCelsius( forecast.high() ) );
} );

// Get the forecast for a given city using the latitude and longitude
var lat = 39.100,
    long = -94.579;
Weather.getForecastByLatLong( lat, long, function( forecast ) {
    console.log( 'Forecast High in Kelvin: ' + forecast.high() );
    console.log( 'Forecast High in Fahrenheit' + Weather.kelvinToFahrenheit( forecast.high() ) );
    console.log( 'Forecast High in Celsius' + Weather.kelvinToCelsius( forecast.high() ) );
} );