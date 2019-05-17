const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'photo_display',
});

connection.connect((err) => {
  if (err) {
    console.log('Could not connect to MySQL', err);
  } else {
    console.log('Connected to MySQL!');
  }
});

const getPhotos = (listingID, callback) => {
  connection.query(`SELECT photo_url from photo_information where listing_id = ${listingID}`, (err, photoUrls) => {
    if (err) {
      callback(err);
    } else {
      callback(null, photoUrls);
    }
  });
};

module.exports = { getPhotos };
