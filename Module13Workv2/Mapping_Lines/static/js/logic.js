// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);
let map = L.map('mapid').setView([30.1974757,-97.6685416], 5);


// Coordinates for each point to be used in the line.
// // Coordinates for each point to be used in the polyline.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

// Coordinates for each point to be used in the polyline.
let line = [
    [37.6213129,-122.3811441],
    [30.1974757,-97.6685416],
    [43.6777215,-79.6270084],
    [40.6413151,-73.7803278],
    
  ];

// Create a polyline using the line coordinates and make the line black.
// L.polyline(line, {
//     color: "yellow"
//  }).addTo(map);
L.polyline(line, {
    color: "blue",
    weight: 4,
    lineCap: "round",
    opacity: 0.5,
    dashArray: '10, 10',
    dashOffset: '0'
 }).addTo(map);


// Get data from cities.js
let cityData = cities;

// Added bindPopup
// Loop through the cities array and create one marker for each city.
// relpace the marker with circleMarker
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        color: "#F4B400",
        fillColor: '#F4B400',
        fillOpacity: 0.5,
        radius: city.population/200000
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

// // Default style
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// light style
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);