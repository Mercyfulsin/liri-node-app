require("dotenv").config();

const Bands = require('./bands.js');
const Spotify = require('./spotify.js');
const Omdb = require('./omdb.js');
const fs = require('fs');

let bands = new Bands();
let spotify = new Spotify();
let omdb = new Omdb();

//Grab type of search
let type = process.argv[2];
//Grab query and join with spaces.
let query = process.argv.slice(3).join(' ');

function Start(t,q) {
    switch (t.toLocaleLowerCase()) {
        case 'concert-this':
            bands.getEvents(q);
            break;
        case 'spotify-this-song':
            q === '' ? q = "The Sign" : '';
            spotify.search(q);
            break;
        case 'movie-this':
            q === '' ? q = "Mr. Nobody" : '';
            omdb.getMovie(q);
            break;
        case 'do-what-it-says':
            fs.readFile("random.txt", 'utf-8', (err, data) => {
                if (err) throw err;
                let newCmd = data.split(",");
                Start(newCmd[0],newCmd[1]);
            });
            break;
        default:
            console.log("Sorry, I didn't catch that.");
    }
}

Start(type,query);