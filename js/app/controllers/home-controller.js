define(['views/home-view', 'services/home-service'], function(
    homeView,
    homeService
) {
    var externals = {};
    var internals = {};

    externals.start = function() {
        internals.bindEventHandlers();
        homeView.render.renderUI();
    };

    internals.bindEventHandlers = function() {
        homeView.bind('film', internals.buttonFilmHandler);
        homeView.bind('quote', internals.buttonQuoteHandler);
    };

    internals.buttonFilmHandler = function() {
        var filmIndex = Math.floor(Math.random() * 6);
        homeService.getFilm(filmIndex).then(homeView.render.renderFilm);
    };

    internals.buttonQuoteHandler = function(){
        homeService.getQuotes().then(homeView.render.renderQuote);
    }

    return externals;
});
