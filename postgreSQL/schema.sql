
CREATE TABLE listings(
  id INT PRIMARY KEY NOT NULL,
  listing VARCHAR(100)
  );

CREATE TABLE photos(
  id INT PRIMARY KEY NOT NULL,
  photo_url VARCHAR(255),
  description VARCHAR(1000),
  is_verified BOOLEAN,
  listing_id INTEGER references listings(id)
  );
