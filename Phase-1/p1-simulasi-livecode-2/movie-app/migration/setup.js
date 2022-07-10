const pool = require('../config/connection');

let queryProductionHouse = `
CREATE TABLE IF NOT EXISTS "ProductionHouses" (
"id" SERIAL PRIMARY KEY,
"name_prodHouse" VARCHAR,
"headquarters" VARCHAR
);
`;

let queryDropProductionHouse = `
DROP TABLE IF EXISTS "ProductionHouses"
`;

let queryMovies = `
CREATE TABLE IF NOT EXISTS "Movies"(
"id" SERIAL PRIMARY KEY,
"name" VARCHAR,
"released_year" INTEGER,
"genre" VARCHAR,
"ProductionHouseId" INTEGER,
FOREIGN KEY( "ProductionHouseId")
REFERENCES "ProductionHouses"("id")
);
`;
let queryDropMovies = `
DROP TABLE IF EXISTS "Movies"
`;
pool.query(queryDropMovies, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('berhasil Drop table productionHouse');
    pool.query(queryDropProductionHouse, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log('berhasil Drop table Movies');
        pool.query(queryProductionHouse, (err, res) => {
          if (err) {
            console.log(err);
          } else {
            console.log('berhasil create table productionHouse');
            pool.query(queryMovies, (err, res) => {
              if (err) {
                console.log(err);
              } else {
                console.log('berhasil cretae table Movies');
              }
            });
          }
        });
      }
    });
  }
});
