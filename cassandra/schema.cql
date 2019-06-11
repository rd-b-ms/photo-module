DROP KEYSPACE IF EXISTS photo_module;

CREATE KEYSPACE photo_module WITH replication = {'class':'SimpleStrategy', 'replication_factor': 1};

USE photo_module;

CREATE TABLE photos(
  photo_id INT,
  photo_url VARCHAR,
  description VARCHAR,
  is_verified BOOLEAN,
  listing_id INT,
  PRIMARY KEY(listing_id, photo_id)
);

COPY photo_module.photos (photo_id,photo_url,description,is_verified,listing_id) FROM '/Users/nautilus/hackReactor/hrsf117-sdc/photodisplay-module/data_gen/fakeDataPhotosListings.csv' WITH HEADER= true AND REPORTFREQUENCY= '5';
