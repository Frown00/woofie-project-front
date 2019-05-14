import React, { Component } from 'react'
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './SelectField.module.scss';


class SelectField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOptionsOn: false,
      selectValue: ''
    };

    this.showOptions = this.showOptions.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  componentDidMount() {
    this.setState({
      selectValue: this.props.select
    })
  }

  showOptions() {
    this.setState((prevState) => ({
      isOptionsOn: !prevState.isOptionsOn
    }));
  }

  selectOption(e) {
    const optionVal = e.target.innerHTML;
    this.setState({
      isOptionsOn: false,
      selectValue: optionVal
    });
    this.props.onChange(optionVal);
  }

  render() {
    const optionsList =
      <ul styleName="form__container__options__list">
        {
          this.props.options.map((option, key) =>
            <li styleName="form__container__options__list__item" key={key} onClick={this.selectOption}>
              {option}
            </li>
          )
        }
      </ul>
    return (
      <div styleName="form__container">
        <p styleName={`form__container__select ${this.state.isOptionsOn ? "active" : ""}`} onClick={this.showOptions}>{this.state.selectValue}</p>
        <div styleName={`form__container__options ${this.state.isOptionsOn ? "active" : ""}`}>
          {optionsList}
        </div>
      </div>
    )
  }
}

SelectField.propTypes = {
  select: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func
};

SelectField.defaultProps = {
  select: "Wybierz",
  options: []
};

export default CSSModules(SelectField, styles, { allowMultiple: true });