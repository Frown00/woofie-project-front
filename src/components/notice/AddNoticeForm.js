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
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';


class AddNoticeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      datetimeFrom: '',
      datetimeTo: '',
      reward: '',
      pets: [],
      remarks: '',
      isRewardMayChanged: false
    }
    this.nextStep = this.nextStep.bind(this);
    this.reset = this.reset.bind(this);

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChecked = this.onChecked.bind(this);
    this.addPetToAnnouncement = this.addPetToAnnouncement.bind(this);
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
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onChecked(e) {
    this.setState({
      [e.target.name]: e.target.checked
    })
  }

  addPetToAnnouncement(petName) {
    const { petList } = this.props.oauth.user;

    const petId = petList.filter((pet) => pet.name === petName)[0].id
    let currentPets = this.state.pets;
    currentPets.push(petId);
    this.setState({
      pets: currentPets
    })
  }

  removePetFromAnnouncement(petName) {
    const { petList } = this.props.oauth.user;
    const petId = petList.filter((pet) => pet.name === petName)[0].id
    let currentPets = this.state.pets;
    currentPets = currentPets.filter((pet) => pet.id !== petId);

    this.setState({
      pets: currentPets
    })
  }

  addAnnouncement(e) {
    e.preventDefault();
    const user = this.props.oauth.user;

    const announcementData =
    {
      "city": user.city,
      "dateFrom": this.state.datetimeFrom,
      "dateTo": this.state.datetimeTo,
      "issueDate": Date.now(),
      "endDate": null,
      "petsId": this.state.pets,
      "userId": user.id,
      "details": this.state.details
    };

    console.log(announcementData);

    setAuthToken(localStorage.getItem("oauthToken"))
    axios.post(
      'http://localhost:8080/api/announcements/create',
      announcementData
    )
      .then((res) => {

      })
      .catch((err) => {

      })
  }

  render() {

    let form = <h3>Loading...</h3>
    let petOptions = this.props.oauth.user.petList.map((pet) => pet.name);

    if (isEmpty(petOptions)) {
      console.log("Musisz mieć przynajmniej jedno zwierzę");
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
                listTitle="Zwierzęta do opieki"
                onAddItem={this.addPetToAnnouncement}
                onRemoveItem={this.removePetFromAnnouncement}
              />
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
                    name="datetimeFrom"
                    type="datetime-local"
                    placeholder="Od"
                    onChange={this.onChangeValue}
                  />
                  <InputField
                    label="Data do"
                    name="datetimeTo"
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
                    onChange={this.onChecked}
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