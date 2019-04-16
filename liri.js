require("dotenv").config();

//link for OMDB API and the Bands In Town API
var axios = require("axios");

//Link for file system
var fs = require("fs");

//Link for keys
var keys = require("./keys.js");

//Link for sportify
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
// var spotify = new Spotify({
//     id: 'c1c1927486ea45999cfe4f25ea20951b',
//     secret: 'a0fdeda5c3664887bd192b8ac9871b79'
// });

// REQUIRE REQUEST
let request = require("request");

// REQUIRE MOMENT
var moment = require('moment');

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

        case "do-what-it-says":
            doWhatItSays(userQuery);
            break;
    }
}

command(userInput, userQuery);

function movieThis() {
    console.log("SEARCHING FOR MOVIE: " + userQuery);
    if (!userQuery) {
        userQuery = "Mr. Nobody"
    }
    axios.get("http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            console.log("Title of the movie is: " + response.data.Title);
            console.log("Year the movie came out: " + response.data.Year);
            console.log("IMDB Rating of the movie is: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating of the movie is: " + response.data.Ratings[1].Value)
            console.log("Country where the movie was produced is: " + response.data.Country);
            console.log("Language of the movie is: " + response.data.Language);
            console.log("Plot of the movie is: " + response.data.Plot);
            console.log("Actors in the movie are: " + response.data.Actors);
        })
}

function concertThis() {
    console.log("SEARCHING FOR CONCERT: " + userQuery);
    request("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            let response = JSON.parse(body);
            // PARSE DATA AND USE FOR LOOP TO ACCESS PATHS TO DATA
            if (response.length > 0) {
                for (i = 0; i < 4; i++) {
            console.log("Name of the venue is: " + response[i].venue.name);
            console.log("Venue location: " + `${response[i].venue.city}, ${response[i].venue.country}`);
            console.log("Date of the Event(MM/DD/YYYY): " + moment(response[i].datetime).format("MM/DD/YYYY"));
            console.log("---------------------------------")
                }
            } else {
                console.log('Concert not found!');
            }
        }
    });
}

function spotifyThisSong() {
    console.log("SEARCHING FOR A SONG: " + userQuery);
    if (!userQuery) {
        userQuery = "The Sign ace of base"
    }
    spotify.search({
        type: 'track',
        query: userQuery,
        limit: 1
    }, function (error, data) {
        if (error) {
            return console.log('Error occurred: ' + error);
        }
        
        var spotifyArray = data.tracks.items;
        for (i = 0; i < spotifyArray.length; i++) {
            console.log("The name of the Artist(s): " + spotifyArray[i].album.artists[0].name);
            console.log("The song's name: " + spotifyArray[i].name);
            console.log("A preview link of the song from Spotify: " + spotifyArray[i].external_urls.spotify);
            console.log("The album that the song is from: " + spotifyArray[i].album.name);
        };
        })
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        var dataArr = data.split(",");
        userInput = dataArr[0];
        userQuery = dataArr[1];
    
        command(userInput, userQuery);
    });
};



