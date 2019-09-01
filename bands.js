const axios = require('axios');
const keys = require("./api.js");
const moment = require('moment');
function Bands() {
    // this.eventArr = [];
    this.getEvents = function (artist) {
        let link = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + keys.bands;
        console.log(link);
        axios.get(link).then(function (response) {
            response.data.forEach(function (content) {
                let date = content.datetime;
                let name = content.venue.name;
                let location = content.venue.city + ", " + content.venue.region + " (" + content.venue.latitude + ", " + content.venue.longitude + ")";
                console.log("Venue Name: ", name);
                console.log(location);
                console.log("Date: ", moment(date.slice(0, 10), 'YYYY-MM-DD').format('MM-DD-YYYY'));
                console.log("============================");
        });
    }).catch (function (err) {
        if (err) throw err;
    });
}
}

module.exports = Bands;