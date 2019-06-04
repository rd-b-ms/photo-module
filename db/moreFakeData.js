const faker = require('faker');

module.exports.makeFakeEntry = () => {
  const entry = {
    url: faker.image.image(),
    description: faker.lorem.sentence(),
    is_verified: faker.random.boolean(),
    id: Math.ceil(Math.random() * 50),
  };
  return entry;
};
