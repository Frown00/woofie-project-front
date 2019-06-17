import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './TextareaField.module.scss';
import CSSModules from 'react-css-modules';

/**
 * Textarea component
 */


class TextareaField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minRows: 1,
      maxRows: 20,
      rows: 1
    }
  }

  componentDidMount() {
    this.setState({
      minRows: this.props.minRows,
      maxRows: this.props.maxRows,
      rows: this.props.rows
    })
  }

  autoResize = (e) => {
    const textareaLineHeight = 16;
    const previousRows = e.target.rows;
    e.target.rows = this.state.minRows;

    // ~~ - is Math.floor substitute
    const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= this.state.maxRows) {
      e.target.rows = this.state.maxRows;
      e.target.scrollTop = e.target.scrollHeight;
    }

    this.props.onChange(e);
    this.setState((prevState) => ({
      rows: currentRows < prevState.maxRows ? currentRows : prevState.maxRows
    }
    ));
  }

  render() {
    return (
      <div styleName={this.props.noRadius ? "form__container--no-radius" : "form__container"}>
        <textarea
          rows={this.state.rows}
          styleName={"form__container__textarea"}
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={this.props.value}
          onChange={this.autoResize}
          required={this.props.required}
        />
        {this.props.info && <small>{this.props.info}</small>}
        {this.props.error && <div>{this.props.error}</div>}
      </div>
    )
  }
}


TextareaField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  minRows: PropTypes.number,
  maxRows: PropTypes.number
}

export default CSSModules(TextareaField, styles);