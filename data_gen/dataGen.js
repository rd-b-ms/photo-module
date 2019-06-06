const faker = require('faker');
const fs = require('fs');

const startTime = Date.now();

const writeListings = fs.createWriteStream('./data_gen/fakeDataListings.csv');
const writePhotos = fs.createWriteStream('./data_gen/fakeDataPhotos.csv');

const listingsCount = 10000;
const photosCount = 800;

let endTime1;
let endTime2;

const dataGenListings = (writer, count) => {
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
      } else {
        ok = writer.write(data);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
  endTime1 = Date.now();
};

const dataGenPhotos = (writer, count) => {
  let i = count;
  writer.write('photo_url,description,is_verified,listing_id\n');

  function write() {
    let ok = true;
    do {
      i -= 1;
      const photoNumber = Math.floor(Math.random() * 1000) + 1;
      const row = [
        `https://sdc-photos-rdbms.s3-us-west-1.amazonaws.com/${photoNumber}.jpeg,${faker.lorem.sentence()},${faker.random.boolean()},${Math.floor(Math.random() * count) + 1}`,
      ];
      const data = `${row}\n`;
      if (i === 0) { // last time
        writer.write(data);
      } else {
        ok = writer.write(data);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
  endTime2 = Date.now();
};

dataGenListings(writeListings, listingsCount);
dataGenPhotos(writePhotos, photosCount);

console.log(`dataGen1 took ${(endTime1 - startTime) / 1000} seconds`);
console.log(`dataGen2 took ${(endTime2 - endTime1) / 1000} seconds`);
console.log(`Total generation time: ${Math.floor((Date.now() - startTime) / 1000)} seconds`);
