const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./../db/index.js');
// const moreFake = require('../db/moreFakeData');

const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());

app.get('/photos/get/:listingId', (req, res) => {
  const { listingId } = req.params;
  db.getPhotos(listingId, (err, photos) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(photos);
    }
  });
});

app.post('/photos/post/', (req, res) => {
  const {
    photoUrl, description, isVerified, listingId,
  } = req.body;

  const entry = {
    photoUrl, description, isVerified, listingId,
  };

  db.addPhoto(entry, (err) => {
    if (err) {
      res.status(500).send();
    }
    res.status(200).send();
  });
});

app.delete('/photos/delete/', (req, res) => {
  const { id } = req.body;
  db.deletePhoto(id, (err) => {
    if (err) {
      res.status(500).send();
    }
    res.status(200).send();
  });
});

app.put('/photos/update_entry/', (req, res) => {
  const {
    id, photoUrl, description, isVerified, listingId,
  } = req.body;

  const entry = {
    id, photoUrl, description, isVerified, listingId,
  };

  db.updatePhoto(entry, (err) => {
    if (err) {
      res.status(500).send();
    }
    res.status(200).send();
  });
});

app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}`);
});
