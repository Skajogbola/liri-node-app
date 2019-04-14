// require("dotenv").config();

//link for OMDB API and the Bands In Town API
var axios = require("axios");

//Link for file system
var fs = require("fs");

//Link for keys
// var keys = require("./keys.js");

// //Link for sportify
// var Spotify = require("node-spotify-api");
// var spotify = new Spotify(keys.spotify);

// // REQUIRE REQUEST
// let request = require("request");

// // REQUIRE MOMENT
// var moment = require('moment');

var userInput = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");


// APP LOGIC
function command(userInput, userQuery) {
    // make a decision based on the command
    switch (userInput) {
        case "concert-this":
            concertThis();
            break;

        case "spotify-this":
            spotifyThisSong();
            break;

        case "movie-this":
            movieThis();
            break;

        case "do-this":
            doThis(userQuery);
            break;
    }
}

command(userInput, userQuery);

function movieThis() {
    console.log("Searching for " + userQuery);
    if(!userQuery) {
        userQuery = "Mr. Nobody"
    }
axios.get("http://www.omdbapi.com/?t=" +userQuery+ "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("Title of the movie is: " + response.data.Title);
    console.log("Year the movie came out: " + response.data.Year);
    console.log("IMDB Rating of the movie is: " + response.data.imdbRating);
    console.log("Rotten Tomatoes Rating of the movie is: " + response.data.Ratings[1].Value)
    console.log("Country where the movie was produced is: " + response.data.Country);
    console.log("Language of the movie is: " + response.data.Language);
    console.log("Plot of the movie is: " + response.data.Plot);
    console.log("Actors in the movie are: " + response.data.Actors);

  }
)
}

