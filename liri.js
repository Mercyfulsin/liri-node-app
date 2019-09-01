require("dotenv").config();

const moment = require('moment');
let Bands = require('./bands.js');
let Spotify = require('./spotify.js');
let bands = new Bands();
let spotify = new Spotify();

//Grab type of search
let type = process.argv[2];
//Grab query and join with spaces.
let query = process.argv.slice(3).join(' ');
switch (type.toLocaleLowerCase()) {
    case 'concert-this':
        bands.getEvents(query);
        break;
    case 'spotify-this-song':
        query === '' ? query = "The Sign" : '';
        spotify.search(query);
        break;
    case 'movie-this':
        console.log("3", query);
        break;
    case 'do-what-it-says':
        console.log("4", query);
        break;
    default:
        console.log("Sorry, I didn't catch that.");
}
