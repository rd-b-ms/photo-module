const mysql = require('mysql');

const connection = mysql.createConnection({
  // host: '172.17.0.3',
  host: 'localhost',
  user: 'root',
  // password: 'supersecret',
  password: '',
  // database: 'photo_display',
});

connection.connect((err) => {
  if (err) {
    console.log('Could not connect to MySQL', err);
  } else {
    console.log('Connected to MySQL!');
  }
});

const getPhotos = (listingID, callback) => {
  connection.query(`SELECT id,photo_url,description,is_verified from photo_information where listing_id = ${listingID}`, (err, photoUrls) => {
    if (err) {
      callback(err);
    } else {
      callback(null, photoUrls);
    }
  });
};

module.exports = { getPhotos };
