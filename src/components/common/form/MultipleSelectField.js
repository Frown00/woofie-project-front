import React, { Component } from 'react'
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './MultipleSelectField.module.scss';
import SelectField from './SelectField';

class MultipleSelectField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '',
      addedItems: [],
      options: []
    }

    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList = this.removeFromList.bind(this);
    this.changeSelectedValue = this.changeSelectedValue.bind(this);
  }

  componentDidMount() {
    console.log(this.props.options);
    this.setState({
      options: this.props.options
    })
  }

  addToList() {
    if (this.state.selectedValue !== '') {
      const items = this.state.addedItems;
      items.push(this.state.selectedValue);
      this.props.onAddItem(this.state.selectedValue);
      let options = this.state.options;
      options = options.filter((name) => name !== this.state.selectedValue);
      this.setState({
        addedItems: items,
        options: options,
      });
    }
    else {
      // console.log("Error");
    }
  }

  removeFromList(e) {
    e.preventDefault();
    const optionToRemove = e.currentTarget.parentNode.children[0].innerHTML;
    let items = this.state.addedItems;
    items = items.filter(el => el !== optionToRemove);
    this.props.onRemoveItem(optionToRemove);

    let options = this.state.options;

    options.push(optionToRemove);

    this.setState({
      addedItems: items,
      options: options
    });
  }

  changeSelectedValue(newVal) {
    this.setState({
      selectedValue: newVal
    },
      this.addToList
    );

  }

  render() {
    let addedItems = '';
    if (this.state.addedItems.length > 0) {
      addedItems =
        <ul styleName="form__container__list-container__list">
          {this.state.addedItems.map((item, key) =>
            <li styleName="form__container__list-container__list__item" key={key}>
              <p>{item}</p>
              <button styleName="form__container__list-container__list__item__button" onClick={this.removeFromList}>X</button>
            </li>
          )}

        </ul>
    }

    const listTitle = this.state.addedItems.length === 0 ? this.props.emptyMsg : this.props.listTitle;

    return (
      <div styleName="form__container">
        <div styleName="form__container__select-container">
          <div styleName="form__container__select-container__select">
            <SelectField
              select={this.props.select}
              noOptions={this.props.noOptions}
              options={this.state.options}
              onChange={this.changeSelectedValue}
              addToList={this.addToList}
              isMultiple={true}
            />
          </div>
          {/* <button styleName="form__container__select-container__button" onClick={this.addToList}>+</button> */}
        </div>
        <div styleName="form__container__list-container">
          {listTitle}
          {addedItems}
        </div>
      </div>
    )
  }
}

export default CSSModules(MultipleSelectField, styles);