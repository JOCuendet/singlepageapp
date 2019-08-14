define(function () {
    var API_URL = 'https://sv443.net/jokeapi/category/Any?blacklistFlags=nsfw';
    var internals = {}; // internal state
    var externals = {}; // external api

    internals.films = [
        { title: 'Star Wars', year: 1977, director: 'George Lucas', imdbRating: 8.6 },
        { title: 'The Godfather', year: 1972, director: 'Francis Ford Coppola', imdbRating: 9.2 },
        { title: 'My Neighbour Totoro', year: 1988, director: 'Hayao Miyazaki', imdbRating: 8.2 },
        { title: 'Back to the Future', year: 1985, director: 'Robert Zemeckis', imdbRating: 8.5 },
        { title: 'The Room', year: 2003, director: 'Tommy Wiseau', imdbRating: 3.7 },
        {
            title: 'Das Cabinet des Dr. Caligari',
            year: 1920,
            director: 'Robert Wiene',
            imdbRating: 8.1
        }
    ];

    externals.getQuotes = function () {
        return fetch(API_URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log("getQuotes_return");
            return myJson;

        }).catch(function (error) {
            console.log(error);
        });
        
    }
    
    externals.getFilm = function (index) {
        return Promise.resolve(internals.films[index]);
    };

    return externals;
});
