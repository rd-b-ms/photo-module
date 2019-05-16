DROP DATABASE IF EXISTS photo_display;

CREATE DATABASE photo_display;

USE photo_display;

CREATE TABLE photo_information (
  id INT NOT NULL AUTO_INCREMENT,
  photo_url VARCHAR(255) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  is_verified BOOLEAN NOT NULL,
  listing_id INT,
)

