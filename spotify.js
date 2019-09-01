require("dotenv").config();

const keys = require("./api.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

function MySpotify() {
    this.search = function (song) {
        spotify.search({ type: 'track', query: song }).then(function (reply) {
            const name = reply.tracks.items[0].name;
            const preview = reply.tracks.items[0].preview_url;
            const full = reply.tracks.items[0].external_urls.spotify;
            const artist = reply.tracks.items[0].artists[0].name;
            console.log(`Artist: ${artist}\nSong: ${name}\nPreview: ${preview}\nFull: ${full}`);
            // reply.tracks.items.forEach(function(content){
            //     content.artists.forEach(function(artist){
            //         console.log(artist.name);
            //     });
            //     console.log("Preview: ",content.preview_url);
            //     console.log("Full: ",content.external_urls.spotify);
            // });
        }).catch(function (err) {
            console.log(err);
        });
    }
}




module.exports = MySpotify;