const faker = require('faker');
const fs = require('fs');

const createFakeData = () => {
  const fakeDataArray = [];

  for (let i = 1; i < 697; i += 1) {
    fakeDataArray.push([
      `photos/photo-${i}.jpg`,
      faker.lorem.sentence(),
      faker.random.boolean(),
      Math.ceil((i % 101) + 1),
    ]);
  }
  return fakeDataArray;
};

const writeDataToFile = (array) => {
  fs.writeFileSync('fakeData.txt', array[0].toString(), (err) => {
    if (err) {
      throw err;
    }
  });

  for (let i = 1; i <= array.length - 1; i += 1) {
    const fakeStr = array[i].toString();
    fs.appendFile('fakeData.txt', `\n${fakeStr}`, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

const dataToWrite = createFakeData();
writeDataToFile(dataToWrite);
