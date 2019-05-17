const mysql = require('mysql');

const connection = mysql.connection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'photo_display',
});

connection.connect();

const getPhotos = (listingID, callback) => {
  connection.query(`SELECT photo_url from photo_information where listing_id = ${listingID}`, (err, photoUrls) => {
    if (err) {
      callback(err);
    } else {
      callback(null, photoUrls);
    }
  });
};

module.exports = getPhotos;
