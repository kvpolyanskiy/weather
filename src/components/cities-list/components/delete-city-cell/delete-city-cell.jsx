import React from 'react';
import PropTypes from 'prop-types';
import MdDelete from 'react-icons/lib/md/delete';

import {idType} from 'core/prop-types';

import {
  IconButtonCell,
} from 'components/common';

export const DeleteCityCell = ({rowData, deleteCity}) => (
  <IconButtonCell
    id={rowData.id}
    icon={MdDelete}
    onClick={deleteCity}
  />
);

DeleteCityCell.propTypes = {
  rowData: PropTypes.shape({
    id: idType.isRequired,
  }).isRequired,
};
