const mysql = require('mysql');


const connection = mysql.createConnection({
  // host: '172.17.0.3', // depricated
  host: 'localhost',
  user: 'root',
  // password: 'supersecret', // depricated
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

const getPhotos = (listingId, callback) => {
  connection.query(`SELECT id, photo_url, description, is_verified FROM photo_information WHERE listing_id = ${listingId};`, (err, photoUrls) => {
    if (err) {
      callback(err);
    } else {
      callback(null, photoUrls);
    }
  });
};

const addPhoto = (entry, callback) => {
  // console.log(entry);
  const {
    photoUrl, description, isVerified, listingId,
  } = entry;
  connection.query('INSERT INTO photo_information (photo_url, description, is_verified, listing_id) values ("$1", "$2", $3, $4)', [photoUrl, description, isVerified, listingId], (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

const deletePhoto = (id, callback) => {
  console.log('delete');
  connection.query(`DELETE FROM photo_information WHERE id=${id};`, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

const updatePhoto = (entry, callback) => {
  const {
    id, photoUrl, description, isVerified, listingId,
  } = entry;
  connection.query(
    `UPDATE photo_information SET photo_url="${photoUrl}",
    description="${description}", is_verified=${isVerified},
    listing_id=${listingId} WHERE id=${id};`, (err) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    }
  );
};

module.exports = {
  getPhotos, addPhoto, deletePhoto, updatePhoto,
};
