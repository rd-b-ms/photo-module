DROP KEYSPACE IF EXISTS test_module;

CREATE KEYSPACE test_module WITH replication = {'class':'SimpleStrategy', 'replication_factor': 1};

USE test_module;

CREATE TABLE test_photos(
  photo_id INT,
  photo_url VARCHAR,
  description VARCHAR,
  is_verified BOOLEAN,
  listing_id INT,
  PRIMARY KEY(listing_id, photo_id)
);

COPY test_module.test_photos (photo_id,photo_url,description,is_verified,listing_id) FROM '/Users/nautilus/hackReactor/hrsf117-sdc/photodisplay-module/data_gen/smallFakeDataPhotosListings.csv' WITH HEADER= true AND REPORTFREQUENCY= '5';
