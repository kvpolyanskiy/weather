import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {EmptyList} from './components';

const ListWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  line-height: 2;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  &:nth-of-type(even) {
    background-color: ${({theme}) => theme.darkColor};
  }
  &:nth-of-type(odd) {
    background-color: ${({theme}) => theme.lightColor};
  }
`;

const RowHeaderWrapper = RowWrapper.extend`
  font-weight: 700;
`;

const RowItemWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
  flex-basis: 0;
  align-items: center;
`;

export class List extends Component {
  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
      headingItem: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        ]).isRequired,
      item: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
      ]).isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
    })).isRequired,
    listItems: PropTypes.array,
    emptyListMessage: PropTypes.string,
  }

  render() {
    const {
      listItems,
      emptyListMessage,
    } = this.props;

    if (!listItems.length) {
      return <EmptyList message={emptyListMessage} />;
    }

    return (
      <ListWrapper>
        {this._renderListHeading()}
        {this._renderListItems()}
      </ListWrapper>
    );
  }

  _renderListHeading() {
    const {columns} = this.props;

    return (
      <RowHeaderWrapper>
        {columns.map(({
          headingItem: HeadingCell,
          name,
          label,
        }) => (
          <RowItemWrapper key={name}>
            <HeadingCell name={label ? label : name} />
          </RowItemWrapper>

        ))}
      </RowHeaderWrapper>
    );
  }

  _renderListItems() {
    const {
      listItems,
      columns,
    } = this.props;

    return listItems.map(rowData => (
      <RowWrapper key={rowData.id}>
        {columns.map(({item: Item, name}) => (
          <RowItemWrapper key={name}>
            <Item rowData={rowData} />
          </RowItemWrapper>
        ))}
      </RowWrapper>
    ));
  }
}
