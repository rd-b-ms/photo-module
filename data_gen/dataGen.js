const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer1 = csvWriter();
const writer2 = csvWriter();
const startTime = Date.now();

const dataGen1 = () => {
  writer1.pipe(fs.createWriteStream('dataGen1.csv'));

  for (let i = 0; i < 100; i += 1) {
    // writer1.write({
    //   id: i,
    //   listing: faker.lorem.words(),
    // });

    // all the information that I need for a noSQL database
    writer1.write({
      listing: faker.lorem.words(),
      photo_url: 'url' /* need to implement numerical url lookup script */,
      description: faker.lorem.sentence(),
      is_verified: faker.random.boolean(),
      lisiting_id: Math.floor(Math.random() * 100),
    });
    if (i % 10000 === 0) {
      console.log(i);
    }
  }

  writer1.end();
  console.log(Math.floor((Date.now() - startTime) / 1000));
  console.log('Data Gen successful');
};

dataGen1();

const dataGen2 = () => {
  writer2.pipe(fs.createWriteStream('dataGen2.csv'));

  for (let i = 0; i < 100; i += 1) {
    // writer2.write({
    //   id: i,
    //   listing: faker.lorem.words(),
    // });

    // all the information that I need for a noSQL database
    writer2.write({
      listing: `${faker.lorem.words()}`,
    });
    if (i % 10000 === 0) {
      console.log(i);
    }
  }

  writer2.end();
  console.log(Math.floor((Date.now() - startTime) / 1000));
  console.log('Data Gen successful');
};

dataGen2();

// writer.write({
//   listing: faker.lorem.words(),
//   photo_url: 'url' /* need to implement numerical url lookup script */,
//   description: faker.lorem.sentence(),
//   is_verified: faker.random.boolean(),
//   lisiting_id: Math.floor(Math.random * 50),
// });
