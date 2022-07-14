'use strict'
//  this is a setting token
mapboxgl.accessToken = MAPBOX_API_KEY;

// creat the map using a Div with map ID
            const map = new MAPBOX_API_KEY({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', //style URL
            center: [29.4188727,-98.6455662],
            zoom: 10, // starting zoom


          
        })