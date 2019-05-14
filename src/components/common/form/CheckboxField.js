import React, { Component } from 'react'
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './CheckboxField.module.scss';

class CheckboxField extends Component {
  render() {
    return (
      <div styleName="checkbox">
        <label styleName="checkbox__label" htmlFor={this.props.name}>{this.props.label}</label>
        <div styleName="checkbox__box-container">
          <input styleName="checkbox__box-container__box" name={this.props.name} type={this.props.type} />
        </div>
      </div>
    )
  }
}

CheckboxField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

CheckboxField.defaultProps = {
  type: 'checkbox'
}

export default CSSModules(CheckboxField, styles);