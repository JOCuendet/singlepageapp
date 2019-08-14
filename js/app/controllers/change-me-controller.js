define(['views/change-me-view', 'services/change-me-service'], function(
    changeMeView,
    changeMeService
) {
    var externals = {};
    var internals = {};

    externals.start = function() {
        internals.bindEventHandlers();
        changeMeView.render();
    };

    internals.bindEventHandlers = function() {
        changeMeView.bind('changeMe', internals.changeMeHandler);
    };

    internals.changeMeHandler = function() {
        var filmIndex = Math.floor(Math.random() * 6);
        changeMeService.getFilm(filmIndex).then(changeMeView.render);
    };

    return externals;
});
