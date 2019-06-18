const faker = require('faker');
const fs = require('fs');

const startTime = Date.now();

// FILE FOR WRITING LISTINS CSV -> PostgreSQL DB
// const writeListings = fs.createWriteStream('./data_gen/fakeDataListings.csv');

// FILE FOR WRITING PHOTOS CSV -> PostgreSQL
// const writePhotos = fs.createWriteStream('./data_gen/fakeDataPhotos.csv');

// data generation files for partial batch seeding
// const writePhotos1 = fs.createWriteStream('./data_gen/fakeDataPhotos1.csv');
// const writePhotos2 = fs.createWriteStream('./data_gen/fakeDataPhotos2.csv');
// const writePhotos3 = fs.createWriteStream('./data_gen/fakeDataPhotos3.csv');
// const writePhotos4 = fs.createWriteStream('./data_gen/fakeDataPhotos4.csv');

// FILE FOR WRITING JOINED TABLE DATA FOR noSQL DB -> Cassandra DB
// const writePhotosListings = fs.createWriteStream('./data_gen/fakeDataPhotosListings.csv');

// small version Cassandra photosListings
// const smallWritePhotosListings = fs.createWriteStream('./data_gen/smallFakeDataPhotosListings.csv');

// small version PostgreSQL photos
const smallWritePhotos = fs.createWriteStream('./data_gen/smallFakeDataPhotos.csv');

const listingsCount = 10000000; // listings count
// const photosCount = 80000000; // photos count
const photosCountPart = 20000000; // photos count

// const photosListingsCount = 80000000; // photos listings data count

// small photosListingCount version
// const smallPhotosListingsCount = 8000; // small photos listings data count
const smallPhotosCount = 8000; // small photos data count

const logTime = (currentTime) => {
  console.log(`Total generation time: ${(currentTime - startTime) / 1000} seconds`);
};

const dataGenListings = (writer, count, callback) => {
  let i = count;
  writer.write('listing\n');

  function write() {
    let ok = true;
    do {
      i -= 1;
      const row = [
        faker.lorem.words(),
      ];
      const data = `${row}\n`;
      if (i === 0) {
        writer.write(data);
        callback(Date.now());
      } else {
        ok = writer.write(data);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
};

const dataGenPhotos = (writer, count, callback) => {
  let i = count;
  writer.write('photo_url,description,is_verified,listing_id\n');

  function write() {
    let ok = true;
    do {
      i -= 1;
      const photoNumber = Math.floor(Math.random() * 1000) + 1;
      const row = [
        `https://sdc-photos-rdbms.s3-us-west-1.amazonaws.com/${photoNumber}.jpeg,${faker.lorem.sentence()},${faker.random.boolean()},${Math.floor(Math.random() * listingsCount) + 1}`,
      ];
      const data = `${row}\n`;
      if (i === 0) { // last time
        writer.write(data);
        callback(Date.now());
      } else {
        ok = writer.write(data);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
};

const dataGenPhotosListings = (writer, count, callback) => {
  let i = 0;
  writer.write('listing,photo_url,description,is_verified,listing_id\n');

  function write() {
    let ok = true;
    do {
      i += 1;
      const photoNumber = Math.floor(Math.random() * 1000) + 1;
      const row = [
        `${i},https://sdc-photos-rdbms.s3-us-west-1.amazonaws.com/${photoNumber}.jpeg,${faker.lorem.sentence()},${faker.random.boolean()},${Math.floor(Math.random() * listingsCount) + 1}`,
      ];
      const data = `${row}\n`;
      if (i === count) { // last time
        writer.write(data);
        callback(Date.now());
      } else {
        ok = writer.write(data);
      }
    } while (i < count && ok);
    if (i < count) {
      writer.once('drain', write);
    }
  }
  write();
};

// SCRIPT TO GENERATE LISTINGS CSV
// dataGenListings(writeListings, listingsCount, logTime);

// SCRIPT TO GENERATE PHOTOS CSV
// dataGenPhotos(writePhotos, photosCount, logTime);

// SCRIPTS TO GENERATE BATCH SEEDING DATA
// dataGenPhotos(writePhotos1, photosCountPart, logTime);
// dataGenPhotos(writePhotos2, photosCountPart, logTime);
// dataGenPhotos(writePhotos3, photosCountPart, logTime);
// dataGenPhotos(writePhotos4, photosCountPart, logTime);

// SCRIPT TO GENERATE COMBINED DATA FOR NOSQL, DOCUMENT DATABASE
// dataGenPhotosListings(writePhotosListings, photosListingsCount, logTime);
// dataGenPhotosListings(smallWritePhotosListings, smallPhotosListingsCount, logTime); // small version

// SCRIPT TO GENERATE SMALL VERSION OF PHOTOS DATA FOR POSTGRESQL PHOTOS TABLE
dataGenPhotos(smallWritePhotos, smallPhotosCount, logTime);
