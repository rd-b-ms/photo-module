const express = require('express');
const path = require('path');
const db = require('./../db/index.js');

const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/photos', (req, res) => {
  const listingId = req.query.listingid;
  db.getPhotos(listingId, (err, photos) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(photos);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}`);
});
