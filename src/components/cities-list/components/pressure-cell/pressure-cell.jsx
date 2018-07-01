import React from 'react';
import PropTypes from 'prop-types';

import {
  TextListCell,
} from 'components/common';

export const PressureCell = ({rowData}) => (
  <TextListCell value={rowData.main.pressure} />
);

PressureCell.propTypes = {
  rowData: PropTypes.shape({
    main: PropTypes.shape({
      pressure: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
