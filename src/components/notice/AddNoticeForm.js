import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CSSModules from 'react-css-modules';
import styles from './AddNoticeForm.module.scss';
import CheckboxField from '../common/form/CheckboxField';
import InputField from '../common/form/InputField';
import MultipleSelectField from '../common/form/MultipleSelectField';
import TextAreaField from '../common/form/TextareaField';
import isEmpty from '../../validation/isEmpty';

class AddNoticeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      dateFrom: '',
      dateTo: '',
      reward: '',
      pets: [],
      remarks: '',
      isRewardMayChanged: false
    }
    this.nextStep = this.nextStep.bind(this);
    this.reset = this.reset.bind(this);

    this.onChangeValue = this.onChangeValue.bind(this);
    this.addAnnouncement = this.addAnnouncement.bind(this);
  }

  reset() {
    this.setState({
      step: 1
    });
  }

  nextStep() {
    const currentStep = this.state.step + 1;
    this.setState({
      step: currentStep
    });
  }

  onChangeValue(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addAnnouncement(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {

    let form = <h3>Loading...</h3>
    let petOptions = this.props.oauth.user.petList.map((pet) => pet.name);
    console.log(petOptions);
    if (isEmpty(petOptions)) {
      console.log("Empty");
    }
    else {
      switch (this.state.step) {
        case 1:
          form = (
            <>
              <MultipleSelectField
                select="Wybierz zwierzę"
                options={petOptions}
                noOptions="Brak zwierząt do dodania"
                emptyMsg="Nie dodano żadnego zwierzęcia"
                listTitle="Zwierzęta do opieki" />
              <TextAreaField
                minRows={3}
                maxRows={10}
                rows={3}
                name="remarks"
                placeholder="Dodatkowe uwagi"
                onChange={this.onChangeValue} />
              <div
                styleName="form__button"
                className="button button-primary"
                onClick={this.nextStep}>
                Dalej
              </div>
            </>
          )
          break;
        case 2:
          form = (
            <>
              <div styleName="form__keeping">
                <div styleName="form__keeping__date">
                  <InputField
                    label="Data od"
                    name="datetime-from"
                    type="datetime-local"
                    placeholder="Od"
                    onChange={this.onChangeValue}
                  />
                  <InputField
                    label="Data do"
                    name="datetime-to"
                    type="datetime-local"
                    placeholder="Do"
                    onChange={this.onChangeValue}
                  />
                </div>
              </div>
              <div styleName="form__reward">
                <div styleName="form__reward__input">
                  <InputField
                    label="Nagroda"
                    name="reward"
                    type="number"
                    onChange={this.onChangeValue}
                  />
                </div>
                <div styleName="form__reward__checkbox">
                  <CheckboxField
                    name="isRewardMayChanged"
                    label="Do uzgodnienia"
                    onChange={this.onChangeValue}
                  />
                </div>
              </div>
              <input
                type="submit"
                styleName="form__button"
                className="button button-primary" value="Dodaj" />
            </>
          )
          break;
        default: form = <div>Loading...</div>
      }
    }

    return (
      <div styleName="form-container">
        <h2>Dodaj ogłoszenie {`(${this.state.step}/2)`}</h2>
        <form onSubmit={this.addAnnouncement} styleName="form">
          {form}
        </form>

      </div>
    )
  }
}


AddNoticeForm.propTypes = {
  /** Required to check if user is currently log on*/
  oauth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  oauth: state.oauth
})

export default connect(mapStateToProps)(
  CSSModules(AddNoticeForm, styles)
);