import React from 'react';
import PropTypes from 'prop-types';

import {
  TextListCell,
} from 'components/common';

export const CityNameCell = ({rowData}) => (
  <TextListCell value={rowData.name} />
);

CityNameCell.propTypes = {
  rowData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
