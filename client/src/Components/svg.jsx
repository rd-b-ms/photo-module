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

function MiniSlideshowVisibilityArrow(props) {
  const { height, width, fill } = props;
  return (
    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height, width, fill }}>
      <path d="m23.85 6.86-11.5 11a .5.5 0 0 1 -.69 0l-11.5-11a .5.5 0 0 1 .34-.86h23a .5.5 0 0 1 .35.86z" fillRule="evenodd" />
    </svg>
  );
}

function ClosePhotoSlideshowButton(props) {
  const {
    display,
    height,
    width,
    fill,
  } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Close"
      focusable="false"
      style={{
        display,
        height,
        width,
        fill,
      }}
    >
      <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" />
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

MiniSlideshowVisibilityArrow.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};

ClosePhotoSlideshowButton.propTypes = {
  display: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};

export {
  PreviousArrow,
  NextArrow,
  MiniSlideshowVisibilityArrow,
  ClosePhotoSlideshowButton,
};
