import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ photo }) => (
  <img src={photo.photo_url} alt="home interior" />
);

Photo.propTypes = {
  photo: PropTypes.shape({ photo_url: '' }).isRequired,
};

export default Photo;

// const url = `https://s3-us-west-1.amazonaws.com/fec-carebnb/${photo.photo_url}`;
// The above url will replace the direct url once deployed
// This is commented for development to reduce num of get requests to AWS
