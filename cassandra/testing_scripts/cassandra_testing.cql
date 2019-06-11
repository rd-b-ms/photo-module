SELECT * FROM photo_module.photos WHERE listing_id=1633909;
SELECT * FROM photo_module.photos WHERE listing_id=4782834;
SELECT * FROM photo_module.photos WHERE listing_id=7638492;
SELECT * FROM photo_module.photos WHERE listing_id=6837261;
SELECT * FROM photo_module.photos WHERE listing_id=8194826;

INSERT INTO photo_module.photos (photo_id,photo_url,description,is_verified,listing_id)
  VALUES (80000002,'www.thisphotoofsomethingcrazy.com/crazy.jpeg','as stated before, this photo is boring. Boring as dirt...',true,7283942);
INSERT INTO photo_module.photos (photo_id,photo_url,description,is_verified,listing_id)
  VALUES (80000003,'www.blablablalblobtext.org/bannerjpeg','Whatever I do, I am always hungry...',false,8873944);
INSERT INTO photo_module.photos (photo_id,photo_url,description,is_verified,listing_id)
  VALUES (80000005,'www.chickenbirddogfish.com/creatuer.jpeg','You will really, really never guess what this thing is...',true,9722942);

UPDATE photo_module.photos
  SET photo_url='https://buttonbuttonsweaterknits.org/yarn.jpeg'
    WHERE listing_id=7392763 AND photo_id=42423806;
UPDATE photo_module.photos
  SET photo_url='https://klkgnlkqnglkeegwegwegwgwegwevscvewgv.netscape/surfboard.jpeg',
  description='there is no way to describe what you are seeing right now',
  is_verified=true
    WHERE listing_id=7392763 AND photo_id=42423806;
UPDATE photo_module.photos
  SET photo_url='https://buttonbuttonsweaterknits.org/yarn.jpeg',
  description='Here we are again deciding on something that we need to show',
  is_verified=false
    WHERE listing_id=8194826 AND photo_id=41915058;



DELETE FROM photo_module.photos WHERE listing_id=9836726;
DELETE FROM photo_module.photos WHERE listing_id=7836726 AND photo_id=51636158;
DELETE FROM photo_module.photos WHERE listing_id=7836726 AND photo_id=70131330;
DELETE FROM photo_module.photos WHERE listing_id=7836726 AND photo_id=70131330;
DELETE FROM photo_module.photos WHERE listing_id=4392763 AND photo_id=50731088;