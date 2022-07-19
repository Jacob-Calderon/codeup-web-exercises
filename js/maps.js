'use strict'
//  this is a setting token


// mapboxgl.accessToken = mapBoxToken;

// creat the map using a Div with map ID
            const map =  mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', //style URL
            center: [90.0000, 45.0000],
            zoom: 10, // starting zoom
            });
// let resturants = [];
let info = getLocationInfoFromAddress("apetitos");
push(info)

//Captures where user double clicks, still zooms..
map.on('dblclick', (e) => {
    console.log(`User clicked at ${e.lngLat}`)
})

let apetitos = {
    lngLat : [29.4188774,-98.6477549],
    name : 'Apetitos / mexican',
    description : 'mmmm tacos',
}

let allMarkers = [apetitos]

let onStartMarkers = allMarkers.forEach( (current)=>{
    let popup = new mapboxgl.Popup().setHTML('<h1>' + current.name + '</h1>' + '<p>' + current.description + '</p>')
    new mapboxgl.Marker().setLngLat(current.lngLat).addTo(map).setPopup(popup)
})



addressSubmit.addEventListener("click",
    () => {
        let promise = geocode(addressData.value, mapBoxToken)
            .then(results => {
                map.setCenter(results)
                new mapboxgl.Marker().setLngLat(results).addTo(map)


                let zoom5 = ()=> map.zoomTo(5)
                let zoom10 = () => map.zoomTo(10)
                let zoom15 = () => map.zoomTo(15)

                const zoomSelect = document.getElementById('zoom-select')


        zoomSelect.addEventListener('change', function () {
            console.log('event change')
            console.log(zoomSelect.value)
            if (zoomSelect.value === '1') {
                zoom10();
            }
            if (zoomSelect.value === '2') {
                zoom5();
            }
            if (zoomSelect.value === '3') {
                zoom15();
            }
        });

        let addressData = document.getElementById('address-input')
        let addressSubmit = document.getElementById('address-submit')
        let removeMarker = document.getElementById('clear-markers')
            })});
