DROP DATABASE IF EXISTS photo_module;

CREATE DATABASE photo_module;

\c photo_module;

CREATE TABLE listings (
  id SERIAL PRIMARY KEY,
  listing VARCHAR(100)
  );

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  photo_url VARCHAR(255),
  description VARCHAR(1000),
  is_verified BOOLEAN,
  listing_id INTEGER references listings(id)
  );

\COPY listings (listing) FROM '/Users/nautilus/hackReactor/hrsf117-sdc/photodisplay-module/data_gen/dataGen1.csv' WITH (DELIMITER ',', HEADER, FORMAT CSV);
\COPY photos (photo_url, description, is_verified, listing_id) FROM '/Users/nautilus/hackReactor/hrsf117-sdc/photodisplay-module/data_gen/dataGen2.csv' WITH (DELIMITER ',', HEADER, FORMAT CSV);
