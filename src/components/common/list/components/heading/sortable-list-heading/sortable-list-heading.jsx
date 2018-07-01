import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import {TextListHeading} from '../text-list-heading';

const SortableListHeadingWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export class SortableListHeading extends Component {
  static propTypes = {
    order: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    changeOrder: PropTypes.func.isRequired,
  }

  render() {
    const {
      name,
    } = this.props;

    return (
      <SortableListHeadingWrapper onClick={this._onSortingOrderChange}>
        <TextListHeading name={name} />
      </SortableListHeadingWrapper>
    );
  }

  _onSortingOrderChange = () => {
    const {
      order,
      changeOrder,
    } = this.props;

    changeOrder(order);
  }
}
