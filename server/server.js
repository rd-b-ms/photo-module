const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./../db/index.js');
const dbp = require('./../postgreSQL/index.js');

const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());

app.get('/photos/get/:listingId', (req, res) => {
  const { listingId } = req.params;
  dbp.getPhotos(listingId, (err, photos) => {
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

  dbp.addPhoto(entry, (err) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send();
  });
});

app.delete('/photos/deleteListing/:listingId', (req, res) => {
  const { listingId } = req.params;
  dbp.deleteListingPhotos(listingId, (err) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send();
  });
});

app.delete('/photos/deleteOne/:listingId', (req, res) => {
  const { listingId } = req.params;
  const { photoId } = req.body;
  const photoInfo = {
    listingId,
    photoId,
  };
  dbp.deleteOnePhoto(photoInfo, (err) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send();
  });
});

app.put('/photos/update_entry/', (req, res) => {
  const {
    photoId, photoUrl, description, isVerified, listingId,
  } = req.body;

  const entry = {
    photoId, photoUrl, description, isVerified, listingId,
  };

  dbp.updatePhoto(entry, (err) => {
    if (err) {
      res.status(500).send();
    }
    res.status(200).send();
  });
});

app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}`);
});
