const { Pool } = require('pg');
// const config = require('./user-config');

// const {
//   user, host, database, password, port,
// } = config;

const pool = new Pool(/* hidden from git */);

const getPhotos = (listingId, callback) => {
  pool.query('SELECT * FROM photos where listing_id = $1', [listingId], (err, result) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, result);
  });
};

const addPhoto = (entry, callback) => {
  const {
    photoUrl, description, isVerified, listingId,
  } = entry;
  pool.query('INSERT INTO public.photos (photo_url, description, is_verified, listing_id) VALUES ($1, $2, $3, $4)', [photoUrl, description, isVerified, listingId], (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

const deleteListingPhotos = (listingId, callback) => {
  pool.query('DELETE FROM photos WHERE listing_id = $1', [listingId], (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

const deleteOnePhoto = (photoInfo, callback) => {
  const { listingId, photoId } = photoInfo;
  pool.query('DELETE FROM photos WHERE listing_id = $1 AND id = $2', [listingId, photoId], (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

const updatePhoto = (entry, callback) => {
  const {
    photoId, photoUrl, description, isVerified, listingId,
  } = entry;
  pool.query('UPDATE photos SET photo_url = $1, description = $2, is_verified = $3, listing_id = $4 WHERE id = $5', [photoUrl, description, isVerified, listingId, photoId], (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

module.exports = {
  getPhotos,
  addPhoto,
  deleteListingPhotos,
  deleteOnePhoto,
  updatePhoto,
};
