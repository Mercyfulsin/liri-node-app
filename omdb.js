const keys = require('./api.js');
const axios = require('axios');

function Omdb() {
    this.getMovie = function (title) {
        let link = `http://www.omdbapi.com/?t=${title}&plot=short&apikey=${keys.omdb}`;
        axios.get(link).then(function (reply) {
            const title = reply.data.Title;
            const year = reply.data.Year;
            const imdb = reply.data.imdbRating;
            const rotten = reply.data.Ratings[1].Value;
            const country = reply.data.Country;
            const language = reply.data.Language;
            const plot = reply.data.Plot;
            const actors = reply.data.Actors;
            console.log(`Title: ${title}\nYear: ${year}\nIMDB Rating: ${imdb}\nRotten Score: ${rotten}\nCountry: ${country}\nLanguage: ${language}\nPlot: ${plot}\nActors: ${actors}`);
        }).catch(function (err) {
            if (err) throw err;
        });
    }
}

module.exports = Omdb;