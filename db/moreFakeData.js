const faker = require('faker');

module.exports.makeFakeEntry = () => {
  const entry = {
    photoUrl: faker.image.image(),
    description: faker.lorem.sentence(),
    isVerified: faker.random.boolean(),
    listingId: Math.ceil(Math.random() * 50),
  };
  return entry;
};
