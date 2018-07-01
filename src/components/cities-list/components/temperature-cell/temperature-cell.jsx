import React from 'react';
import PropTypes from 'prop-types';

import {
  TextListCell,
} from 'components/common';

export const TemperatureCell = ({rowData}) => (
  <TextListCell value={rowData.main.temp} />
);

TemperatureCell.propTypes = {
  rowData: PropTypes.shape({
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
