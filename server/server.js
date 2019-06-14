// eslint-disable-next-line import/no-extraneous-dependencies
// require('newrelic'); // uncomment to enable New Relic data gathering
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// const db = require('./../db/index.js'); // old database from inherited code
const dbp = require('./../postgreSQL/index.js');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());

app.get('/listings/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

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

app.post('/photos/post', (req, res) => {
  const {
    photoUrl, description, isVerified, listingId,
  } = req.body;
  const entry = {
    photoUrl, description, isVerified, listingId,
  };

  dbp.addPhoto(entry, (err) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  });
});

app.delete('/photos/deleteListing/:listingId', (req, res) => {
  const { listingId } = req.params;
  dbp.deleteListingPhotos(listingId, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send();
    }
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
    } else {
      res.status(200).send();
    }
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
    } else {
      res.status(200).send();
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}`);
});
