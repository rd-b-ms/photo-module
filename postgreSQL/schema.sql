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
