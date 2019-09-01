require("dotenv").config();

const keys = require("./api.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

function MySpotify() {
    this.search = function (song) {
        spotify.search({ type: 'track', query: song }).then(function (reply) {
            reply.tracks.items.forEach(function(content));
            console.log(reply.tracks.items);
        }).catch(function (err) {
            console.log(err);
        });
    }
    console.log("HERE");
}




module.exports = MySpotify;