const faker = require('faker');
const fs = require('fs');

const startTime = Date.now();

// FILE FOR WRITING LISTINS CSV -> PostgreSQL DB
const writeListings = fs.createWriteStream('./data_gen/fakeDataListings.csv');

// FILE FOR WRITING PHOTOS CSV -> PostgreSQL
const writePhotos = fs.createWriteStream('./data_gen/fakeDataPhotos.csv');

// FILE FOR WRITING JOINED TABLE DATA FOR noSQL DB -> Cassandra DB
const writeJoin = fs.createWriteStream('./data_gen/fakeDataJoin.csv');

const listingsCount = 10000000; // listings count
const photosCount = 80000000; // photos count
const joinCount = 80000000; // join data count

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

const dataGenJoin = (writer, count, callback) => {
  let i = count;
  writer.write('listing,photo_url,description,is_verified,listing_id\n');

  function write() {
    let ok = true;
    do {
      i -= 1;
      const photoNumber = Math.floor(Math.random() * 1000) + 1;
      const row = [
        `${faker.lorem.words()},https://sdc-photos-rdbms.s3-us-west-1.amazonaws.com/${photoNumber}.jpeg,${faker.lorem.sentence()},${faker.random.boolean()},${Math.floor(Math.random() * listingsCount) + 1}`,
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

// SCRIPT TO GENERATE LISTINS CSV
dataGenListings(writeListings, listingsCount, logTime);

// SCRIPT TO GENERATE PHOTOS CSV
dataGenPhotos(writePhotos, photosCount, logTime);

// SCRIPT TO GENERATE COMBINED DATA FOR NOSQL, DOCUMENT DATABASE
dataGenJoin(writeJoin, joinCount, logTime);
