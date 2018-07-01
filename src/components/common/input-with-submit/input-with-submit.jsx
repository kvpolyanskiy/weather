import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class InputWithSubmit extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    buttonName: PropTypes.string,
    submit: PropTypes.func,
  }

  state = {
    value: '',
  };

  render() {
    const {
      placeholder,
      buttonName,
    } = this.props;

    return (
      <div>
        <input
          placeholder={placeholder}
          onChange={this._changeValue}
          value={this.state.value}
        />
        <button onClick={this._submit}>
          {buttonName}
        </button>
      </div>
    );
  }

  _changeValue = event => {
    const {
      target: {
        value,
      },
    } = event;

    this.setState({value});
  }

  _submit = () => {
    this.props.submit(this.state.value);
    this.setState({value: ''})
  }
}
