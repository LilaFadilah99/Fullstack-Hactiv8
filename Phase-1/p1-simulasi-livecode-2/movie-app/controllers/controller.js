const Model = require('../models/model');

class Controller {
  static landingPage(request, response) {
    response.render('landingPage');
  }

  static showProductionHouses(request, response) {
    Model.showProductionHouses((err, data) => {
      if (err) {
        response.send(err);
      } else {
        response.render('productionHouse', { productionHouse: data });
      }
    });
  }

  static showMovies(request, response) {
    Model.showMovies((err, data) => {
      if (err) {
        response.send(err);
      } else {
        response.render('movies', { movies: data });
      }
    });
  }

  static addMovies(request, response) {
    Model.showProductionHouses((err, data) => {
      if (err) {
        response.send(err);
      } else {
        response.render('addMovies', { productionHouse: data });
      }
    });
  }

  static addMoviesSubmit(request, response) {
    let newMovies = request.body;
    Model.addMoviesSubmit(newMovies, (err, data) => {
      if (err) {
        response.send(err);
      } else {
        console.log(data);
        response.redirect('/movies');
      }
    });
  }

  static deleteMovies(request, response) {
    let id = request.params.id;
    Model.deleteMovies(id, (err, data) => {
      if (err) {
        response.send(err);
      } else {
        response.redirect('/movies');
      }
    });
  }

  static editMovies(request, response) {
    let id = request.params.id;
    let movie = undefined;
    let productionHouse = undefined;
    Model.getMoviesId(id, (err, data) => {
      if (err) {
        response.send(err);
      } else {
        movie = data;
        Model.showProductionHouses((err, data) => {
          if (err) {
            response.send(err);
          } else {
            productionHouse = data;
            console.log(movie);
            response.render('editMovies', { movie, productionHouse });
          }
        });
      }
    });
  }

  static saveEditMovie(request, response) {
    let newData = request.body;
    let id = request.params.id;
    console.log(newData);
    Model.saveEditMovie(newData, id, (err, data) => {
      if (err) {
        response.send(err);
      } else {
        response.redirect('/movies');
      }
    });
  }
}

module.exports = Controller;
