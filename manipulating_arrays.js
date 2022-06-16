alert ('planet')

// (function(){
//     "use strict";
//
//     var planets = [
//         'Mercury',
//         'Venus',
//         'Earth',
//         'Mars',
//         'Jupiter',
//         'Saturn',
//         'Uranus',
//         'Neptune'
//     ];
//
//     /**
//      * TODO:
//      * Read each console log below, and write some javascript code to perform
//      * the step that it describes
//      */
//
//     console.log('Adding "The Sun" to the beginning of the planets array.');
//     console.log(planets);
//
//     console.log('Adding "Pluto" to the end of the planets array.');
//     console.log(planets);
//
//     console.log('Removing "The Sun" from the beginning of the planets array.');
//     console.log(planets);
//
//     console.log('Removing "Pluto" from the end of the planets array.');
//     console.log(planets);
//
//     console.log('Finding and logging the index of "Earth" in the planets array.');
//
//     console.log("Reversing the order of the planets array.");
//     console.log(planets);
//
//     console.log("Sorting the planets array.");
//     console.log(planets);
// })();
    "use strict";


     var planets = [
         'Mercury',
         'Venus',
         'Earth',
         'Mars',
         'Jupiter',
         'Saturn',
         'Uranus',
         'Neptune'
     ]


       // console.log('Adding "The Sun" to the beginning of the planets array.');
         //   console.log(planets);

function sun () {
     planets.unshift ('sun'); for (var i = 0; i <planets.length; i++);
     console.log(planets);
}

//console.log('Adding "Pluto" to the end of the planets array.');
//     console.log(planets);

function pluto() {
    planets.push ("pluto"); for (var i = 10; i <planets.length; i++);
        console.log(planets);
}

//console.log('Removing "The Sun" from the beginning of the planets array.');
//     console.log(planets);

function sun() {
    planets.shift ('sun'); for (var i = 0; i <planets.length; i++);
        console.log(planets);
}

//     console.log('Removing "Pluto" from the end of the planets array.');
//     console.log(planets);

function pluto() {
    planets.pop('pluto'); for (var i = 0; i <planets.length; i++);
        console.log(planets)
}

//     console.log('Finding and logging the index of "Earth" in the planets array.');

    planets.indexOf ('earth')

