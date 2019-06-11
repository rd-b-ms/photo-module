EXPLAIN ANALYZE SELECT * from photos WHERE listing_id=4873561;
EXPLAIN ANALYZE SELECT * from photos WHERE listing_id=9873561;
EXPLAIN ANALYZE SELECT * from photos WHERE listing_id=44;

EXPLAIN ANALYZE SELECT * FROM photos
  INNER JOIN listings ON photos.listing_id = listings.id
  WHERE listing_id=123857;
EXPLAIN ANALYZE SELECT * FROM photos
  INNER JOIN listings ON photos.listing_id = listings.id
  WHERE listing_id=2942516;

EXPLAIN ANALYZE INSERT INTO public.listings (listing) VALUES ('new listing here I come!');
EXPLAIN ANALYZE INSERT INTO public.photos (photo_url, description, is_verified, listing_id)
  VALUES ('https://sdc-photos-rdbms.s3-us-west-1.amazonaws.com/test.jpeg', 'photo of some thing that looks kinda cool but is probably overpriced', false, 5738216);
EXPLAIN ANALYZE INSERT INTO public.photos (photo_url, description, is_verified, listing_id)
  VALUES ('https://sdc-photos-rdbms.s3-us-west-1.amazonaws.com/testAnother.jpeg', 'photo of some thing that looks kinda cool bit is probably overpriced', true, 9863716);

EXPLAIN ANALYZE UPDATE public.listings
  SET listing = 'some new listing'
  WHERE id = 8392888;
EXPLAIN ANALYZE UPDATE public.photos
  SET photo_url = 'https://sdc-photos-rdbms.s3-us-west-1.amazonaws.com/testAnother.jpeg',
    description = 'some boring description that is also as boring as dirt',
    is_verified = false,
    listing_id = 2384712
  WHERE id = 39456838;
EXPLAIN ANALYZE UPDATE public.photos
  SET photo_url = 'https://sdc-photos-rdbms.s3-us-west-1.amazonaws.com/test.jpeg',
    description = 'some boring description that is also as boring as dirt',
    is_verified = true,
    listing_id = 9374821
  WHERE description = 'Eveniet eum in ullam aspernatur ut reprehenderit nostrum sed quae.';
EXPLAIN ANALYZE UPDATE public.listings
  SET listing = 'new listing name of my crib'
  WHERE listing = 'voluptas corporis ut';

EXPLAIN ANALYZE DELETE FROM public.photos
  WHERE listing_id = 3872180;
EXPLAIN ANALYZE DELETE FROM public.photos
  WHERE listing_id = 9735180;

-- following tests executed after implementing btree on photos table listing_id
-- using \timing to record benchmarking

EXPLAIN ANALYZE SELECT * from photos WHERE listing_id=9837465;
EXPLAIN ANALYZE SELECT * from photos WHERE listing_id=2948573;
EXPLAIN ANALYZE SELECT * from photos WHERE listing_id=18273;

EXPLAIN ANALYZE SELECT * FROM photos
  INNER JOIN listings ON photos.listing_id = listings.id
  WHERE listing_id=2984671;
EXPLAIN ANALYZE SELECT * FROM photos
  INNER JOIN listings ON photos.listing_id = listings.id
  WHERE listing_id=1283746;

EXPLAIN ANALYZE INSERT INTO public.listings (listing) VALUES ('new listing here I come!');
EXPLAIN ANALYZE INSERT INTO public.photos (photo_url, description, is_verified, listing_id)
  VALUES ('https://sdc-photos-rdbms.s3-us-west-1.amazonaws.com/test.jpeg', 'photo of some thing that looks kinda cool bit is probably overpriced', false, 5738216);
EXPLAIN ANALYZE INSERT INTO public.photos (photo_url, description, is_verified, listing_id)
  VALUES ('https://sdc-photos-rdbms.s3-us-west-1.amazonaws.com/testAnother.jpeg', 'photo of some thing that looks kinda cool bit is probably overpriced', true, 9863716);

EXPLAIN ANALYZE UPDATE public.listings
  SET listing = 'some new listing'
  WHERE id = 8392888;
EXPLAIN ANALYZE UPDATE public.photos
  SET photo_url = 'https://sdc-photos-rdbms.s3-us-west-1.amazonaws.com/testAnother.jpeg',
    description = 'some boring description that is also as boring as dirt',
    is_verified = false,
    listing_id = 2384712
  WHERE id = 39456838;
EXPLAIN ANALYZE UPDATE public.photos
  SET photo_url = 'https://sdc-photos-rdbms.s3-us-west-1.amazonaws.com/test.jpeg',
    description = 'some boring description that is also as boring as dirt',
    is_verified = true,
    listing_id = 9374821
  WHERE description = 'Eveniet eum in ullam aspernatur ut reprehenderit nostrum sed quae.';
EXPLAIN ANALYZE UPDATE public.listings
  SET listing = 'new listing name of my crib'
  WHERE listing = 'voluptas corporis ut';

EXPLAIN ANALYZE DELETE FROM public.photos
  WHERE listing_id = 3872180;
EXPLAIN ANALYZE DELETE FROM public.photos
  WHERE listing_id = 9735180;

EXPLAIN ANALYZE DELETE FROM public.photos
  WHERE listing_id = 1827493;
EXPLAIN ANALYZE DELETE FROM public.photos
  WHERE listing_id = 4837263;
