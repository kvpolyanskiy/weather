import React, { Component } from 'react';
import {withProps} from 'recompose';
import PropTypes from 'prop-types';

import {
  List,
  SortableListHeading,
  TextListHeading,
} from 'components';

import {
  CityNameCell,
  TemperatureCell,
  PressureCell,
  DeleteCityCell,
} from './components';

export class CitiesList extends Component {
  static propTypes = {
    listItems: PropTypes.array,
    changeCitiesOrder: PropTypes.func.isRequired,
    deleteCity: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.initializeColumns();
  }

  render() {
    const {listItems} = this.props;
    return (
      <List
        columns={this.columns}
        listItems={listItems}
        emptyListMessage="There are no available cities. Try to add a new one."
      />
    );
  }

  initializeColumns() {
    const {
      changeCitiesOrder,
      deleteCity,
    } = this.props;

    this.columns = [{
      headingItem: withProps({
        order: 'name',
        changeOrder: changeCitiesOrder,
      })(SortableListHeading),
      item: CityNameCell,
      name: 'City',
    }, {
      headingItem: TextListHeading,
      item: TemperatureCell,
      name: 'Temperature',
      label: 'Temperature, °C',
    }, {
      headingItem: TextListHeading,
      item: PressureCell,
      name: 'Pressure',
      label: 'Pressure, hpa'
    }, {
      headingItem: TextListHeading,
      item: withProps({deleteCity})(DeleteCityCell),
      name: '',
    }];
  }
}
