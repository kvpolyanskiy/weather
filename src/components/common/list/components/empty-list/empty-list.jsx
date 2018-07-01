import React from 'react';
import PropTypes from 'prop-types';

export const EmptyList = ({message}) => (
  <h4>{message ? message : 'The list has no any items'}</h4>
);

EmptyList.propTypes = {
  message: PropTypes.string,
};
