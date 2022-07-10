const { ProductionHouse, Movie } = require('./class');
const pool = require('../config/connection');

class Model {
  static showProductionHouses(cb) {
    let queryGetProductionHouses = `
    SELECT * FROM public."ProductionHouses"
    ORDER BY "name_prodHouse" ASC 
    `;
    pool.query(queryGetProductionHouses, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        let productionHouses = res.rows;
        productionHouses = productionHouses.map(({ id, name_prodHouse, headquarters }) => {
          return new ProductionHouse(id, name_prodHouse, headquarters);
        });
        cb(null, productionHouses);
      }
    });
  }

  static showMovies(cb) {
    let queryGetMovies = `
    SELECT m."id", m."name", m."released_year", m."genre", p."name_prodHouse" AS "ProductionHouse"
    FROM public."Movies" m
    INNER JOIN "ProductionHouses" p
    ON p."id" = m."ProductionHouseId"
    ORDER BY m."released_year" DESC 
    `;
    pool.query(queryGetMovies, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        let movies = res.rows;
        movies = movies.map(({ id, name, released_year, genre, ProductionHouse }) => {
          return new Movie(id, name, released_year, genre, ProductionHouse);
        });
        cb(null, movies);
      }
    });
  }

  static addMoviesSubmit(newMovies, cb) {
    let { name, released_year, genre, ProductionHouse } = newMovies;
    let queryInsertNewMovie = `
    INSERT INTO "Movies"("name", "released_year", "genre", "ProductionHouseId")
    VALUES ('${name}', ${released_year}, '${genre}', ${ProductionHouse}) RETURNING*;
    `;
    pool.query(queryInsertNewMovie, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, res.rows);
      }
    });
  }

  static deleteMovies(id, cb) {
    let queryDeleteMovies = `
    DELETE FROM "Movies"
    WHERE "id" = ${id} RETURNING *;
    `;
    console.log(id);
    pool.query(queryDeleteMovies, (err, res) => {
      if (err) {
        cb(err, null);
        console.log(err);
      } else {
        cb(null, res.rows);
      }
    });
  }

  static getMoviesId(id, cb) {
    let queryGetMoviesId = `
    SELECT * FROM "Movies"
    WHERE "id" = ${id};
    `;
    pool.query(queryGetMoviesId, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        let movie = res.rows;
        movie = movie.map(({ id, name, released_year, genre, ProductionHouseId }) => {
          return new Movie(id, name, released_year, genre, ProductionHouseId);
        })[0];
        cb(null, movie);
        console.log(movie);
      }
    });
  }
  static saveEditMovie(newData, id, cb) {
    let { name, released_year, genre, ProductionHouseId } = newData;
    let querySaveEdit = `
    UPDATE "Movies"
    SET 
    "name" = '${name}',
    "released_year" = ${released_year},
    "genre" = '${genre}',
    "ProductionHouseId" = '${ProductionHouseId}'
    WHERE "id" = ${id}
    `;

    pool.query(querySaveEdit, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, res.rows);
      }
    });
  }
}

module.exports = Model;
