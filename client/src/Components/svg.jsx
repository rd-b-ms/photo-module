import React from 'react';
import PropTypes from 'prop-types';

function PreviousArrow(props) {
  const { height, width, fill } = props;
  return (
    <svg viewBox="0 0 18 18" style={{ height, width, fill }}>
      <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" />
    </svg>
  );
}

function NextArrow(props) {
  const { height, width, fill } = props;
  return (
    <svg viewBox="0 0 18 18" style={{ height, width, fill }}>
      <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
    </svg>
  );
}

PreviousArrow.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};

NextArrow.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};

export {
  PreviousArrow,
  NextArrow,
};
