define(function() {
    var internals = {
        handlers: {},
        elements: {}
    };

    var externals = {};

    internals.createButtonFilm = function() {
        return '<button class="random-film">Click Me for a Random Film</button>';
    };

    internals.createButtonQuote = function() {
        return '<button class="random-film">Click Me for a Random Quote</button>';
    };

    internals.createQuote = function(quote){
        return (
            '<div id="quoteCard">' +
            '<p><strong>' +
            quote.setup+
            ' </strong></p>' +
            '<p>' +
            quote.delivery +
            '</p>' +
            '</div>'
        );
    };

    internals.createFilmCard = function(film) {
    
        return (
            '<div id="filmCard">' +
            '<p><strong>Title: </strong>' +
            film.title +
            '</p>' +
            '<p><strong>Year: </strong>' +
            film.year +
            '</p>' +
            '<p><strong>Director: </strong>' +
            film.director +
            '</p>' +
            '<p><strong>IMDB rating: </strong>' +
            film.imdbRating +
            '</p>' +
            '</div>'
        );
    };
internals.clearCards = function(){
    $('#app').find('#filmCard').remove();
    $('#app').find('#quoteCard').remove();
}
    internals.renderQuote = function(quote){
       
        internals.clearCards();
        
        if (internals.elements.quote) {
            internals.elements.quote.empty();
        }
        internals.elements.quote = $(internals.createQuote(quote));
        internals.elements.app.append(internals.elements.quote);
    }

    internals.renderFilm = function(film) {
       
        internals.clearCards();
       
        if (internals.elements.filmCard) {
            internals.elements.filmCard.empty();
        }
        internals.elements.filmCard = $(internals.createFilmCard(film));

        internals.elements.app.append(internals.elements.filmCard);
    };

    internals.renderButton = function() {
        if (internals.elements.button) {
            return;
        }

        internals.elements.button = $(internals.createButtonFilm());
        internals.elements.button.click(internals.handlers['film']);
        internals.elements.app.append(internals.elements.button);
    };
    
    internals.renderQuoteButton = function() {
        if (internals.elements.buttonQuote) {
            return;
        }

        internals.elements.buttonQuote = $(internals.createButtonQuote());
        internals.elements.buttonQuote.click(internals.handlers['quote']);
        internals.elements.app.append(internals.elements.buttonQuote);
    };

    externals.bind = function(event, handler) {
        internals.handlers[event] = handler;
    };

    externals.render = {
        renderUI : function(){
            internals.elements.app = $('#app');
            internals.renderQuoteButton();
            internals.renderButton();
        },
       renderQuote : function(quote){
           console.log("error quote: "+quote);
            if (quote) {
                internals.renderQuote(quote);
            }
        },
        renderFilm : function(film) {
            
            if (film) {
                internals.renderFilm(film);
            }
        }
    }
   

    return externals;
});
