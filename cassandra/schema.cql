DROP KEYSPACE IF EXISTS photo_module

CREATE KEYSPACE photo_module

USE photo_module

CREATE TABLE (
  id INT PRIMARY KEY,
  listing VARCHAR,
  photo_url VARCHAR,
  description VARCHAR,
  is_verified BOOLEAN,
  listing_id INT,
);


