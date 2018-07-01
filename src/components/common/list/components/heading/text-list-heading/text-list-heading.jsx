import React from 'react';
import PropTypes from 'prop-types';

export const TextListHeading = ({name}) => (
  <div>
    {name}
  </div>
);

TextListHeading.propTypes = {
  name: PropTypes.string.isRequired,
};
