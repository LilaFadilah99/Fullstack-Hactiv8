const pool = require('../config/connection');
const fs = require('fs');

let productionHouses = JSON.parse(fs.readFileSync('productionHouses.json', 'utf-8'));
let productionHousesData = productionHouses.map(({ name_prodHouse, headquarters }) => {
  return `('${name_prodHouse}', '${headquarters}')`;
});
productionHousesData = productionHousesData.join(', ');

let queryInsertproductionHouses = `
INSERT INTO "ProductionHouses" ("name_prodHouse", "headquarters")
VALUES ${productionHousesData}
`;

let queryInsertMovies = `
INSERT INTO "Movies" ("name", "released_year", "genre", "ProductionHouseId")
VALUES 
('Cintaku Kepentok Sudoku', '2016', 'comedy', 3),
('Ratapan di Depan Mac Mini', '2014', 'drama', 1),
('Boogle 2, The Haunting Anchor', '2011', 'horor', 4),
('Heroku wa Heromu da', '2008', 'animasi', 2),
('Taubat Intruktur Karena Tugas Tak Dibuat', '2000', 'religious', 1)
`;

pool.query(queryInsertproductionHouses, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('berhasil insert data ProductionHouses');
    pool.query(queryInsertMovies, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log('berhasil insert data Movies');
      }
    });
  }
});
