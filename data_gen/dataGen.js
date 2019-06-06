const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const startTime = Date.now();

const writer1 = csvWriter();
const writer2 = csvWriter();

const count1 = 10000000;
const count2 = 80000000;

let endTime1;
let endTime2;

const dataGen1 = (count) => {
  writer1.pipe(fs.createWriteStream('dataGen1.csv'));

  for (let i = 0; i < count; i += 1) {
    writer1.write({
      listing: `${faker.lorem.words()}`,
    });
    if (i % 10000 === 0) {
      console.log(i);
    }
  }

  writer1.end();
  endTime1 = Date.now();
  console.log('Data Gen1 successful');
};

// dataGen1(count1);

const dataGen2 = (count) => {
  writer2.pipe(fs.createWriteStream('dataGen2.csv'));

  for (let i = 0; i < count; i += 1) {
    const photoNumber = Math.floor(Math.random() * 1000);
    writer2.write({
      photo_url: `https://sdc-photos-rdbms.s3-us-west-1.amazonaws.com/${photoNumber}.jpeg`,
      description: faker.lorem.sentence(),
      is_verified: faker.random.boolean(),
      lisiting_id: Math.floor(Math.random() * count) + 1,
    });
    if (i % 10000 === 0) {
      console.log(i);
    }
  }

  writer2.end();
  endTime2 = Date.now();
  console.log('Data Gen2 successful');
};

dataGen2(count2);

// console.log(`dataGen1 took ${(endTime1 - startTime) / 1000} seconds`);
// console.log(`dataGen2 took ${(endTime2 - endTime1) / 1000} seconds`);
console.log(`Total generation time: ${Math.floor((Date.now() - startTime) / 1000)} seconds`);
