# liri-node-app
### Description
---
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI is a command line application that takes user commands and queries from the command line and returns data from API's. The following commands have been hard coded into the program to give the user the capability to look up songs, concerts and movie information:

Commands | Function
---------|---------
concert-this | uses the **bandsintown** API to take a band name from the user and returns that bands next concert
spotify-this | uses the **spotify** API to take a song name from the user and returns the artist, song name, spotify-link and album 
movie-this | uses the **OMDB** API to take a movie name and returns the name, author(s), release year, IMDB and Rotten Tomatoes rating, country of origin, language and plot 
do-this | uses the built in **readFile()** method to access data from a prepopulated .txt file and return its information as a command/search query.

### Functionality
--- 
1. concert-this 

node liri.js concert-this *<artist/band name here>*

Function takes the userInput (command) and the userQuery(artist), and returns the next four concert venues, locations(city and country) and dates.

![concert-this](https://github.com/Skajogbola/liri-node-app/blob/master/Images/concert-this.PNG)

2. spotify-this-song

node liri.js spotify-this-song *<song name here>*

Function takes the userInput (command) and the userQuery(song), and returns the artist, full track name, a preview link and the album.
![spotify-this](https://github.com/Skajogbola/liri-node-app/blob/master/Images/spotify-this-song-default.PNG)

![spotify-this](https://github.com/Skajogbola/liri-node-app/blob/master/Images/spotify-this-song.PNG)

3. movie-this

node liri.js movie-this *<movie name here>*

Function takes the userInput (command) and the userQuery(song), and returns title, author(s), release date, ratings, country of origin, language and plot.
![movie-this](https://github.com/Skajogbola/liri-node-app/blob/master/Images/movie-this-default.PNG)

![movie-this](https://github.com/Skajogbola/liri-node-app/blob/master/Images/movie-this.PNG)

4. do-what-it-says

node liri.js *<do-what-it-says>*

This function is a wildcard that will randomly select one of the functions and produce a search. The only way to find out what it does is to try!
![do-what-it-says](https://github.com/Skajogbola/liri-node-app/blob/master/Images/do-what-it-says.PNG)
