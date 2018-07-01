import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {idType} from 'core/prop-types';

const IconButtonCellWrapper = styled.div`
  width: 100%;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export class IconButtonCell extends React.Component {
  static propTypes = {
    id: idType,
    icon: PropTypes.func,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const {
      icon: Icon,
    } = this.props;

    return (
      <IconButtonCellWrapper>
        <Icon onClick={this._onClick} />
      </IconButtonCellWrapper>
    );
  }

  _onClick = () => {
    const {
      id,
      onClick,
    } = this.props;

    onClick(id);
  }
}
