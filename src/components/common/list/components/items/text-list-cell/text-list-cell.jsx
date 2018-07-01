import React from 'react';
import PropTypes from 'prop-types';

export const TextListCell = ({className, value}) => (
  <div className={className}>
    {value}
  </div>
);

TextListCell.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
