import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './InputField.module.scss';


class InputField extends Component {

  render() {
    return (
      <div styleName="form__input">
        <label styleName="form__input__label" htmlFor={this.props.name}>{this.props.label}</label>
        <input
          styleName="form__input__field"
          name={this.props.name}
          type={this.props.type}
          value={this.props.value}
          onChange={this.props.onChange}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
}

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

InputField.defaultProps = {
  type: 'text'
}

export default CSSModules(InputField, styles);