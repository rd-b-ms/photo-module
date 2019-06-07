\c photo_module;

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  photo_url VARCHAR(255),
  description VARCHAR(1000),
  is_verified BOOLEAN,
  listing_id INTEGER references listings(id)
  );

  \COPY photos (photo_url, description, is_verified, listing_id) FROM '/Users/nautilus/hackReactor/hrsf117-sdc/photodisplay-module/data_gen/fakeDataPhotos.csv' WITH (DELIMITER ',', HEADER, FORMAT CSV);