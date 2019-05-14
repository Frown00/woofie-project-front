import React, { Component } from 'react'
import InputField from '../common/form/InputField';
import ImageEdit from '../common/form/ImageEdit';

import CSSModules from 'react-css-modules';
import styles from './EditProfile.module.scss';


class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      name: '',
      surname: '',
      birthDate: '10-10-2019',
      city: '',
      street: '',
      buildingNumber: '',
      phoneNumber: '',
    }

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
  }

  componentDidMount() {
    const { avatar, name, surname, birthDate, city, street, buildingNumber, phoneNumber } = this.props.profile;
    this.setState({
      avatar,
      name,
      surname,
      birthDate,
      city,
      street,
      buildingNumber,
      phoneNumber
    })

  }

  onChangeValue(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);

  }

  onChangeImage(src) {
    this.setState({
      avatar: src
    })
  }

  render() {
    return (
      <div>
        <h2>Edycja profilu</h2>
        <form>
          <ImageEdit
            imageSrc={this.state.avatar}
            imageAlt="Avatar"
            onChange={this.onChangeImage}
          />
          <InputField
            label="Nazwa"
            name="name"
            type="text"
            value={this.state.name}
            placeholder="Jan Kowalski"
            onChange={this.onChangeValue}
          />
          <InputField
            label="Data urodzenia"
            name="birthDate"
            type="date"
            placeholder=""
            value={this.state.birthDate}
            onChange={this.onChangeValue}
          />
          <InputField
            label="Miejscowość"
            name="city"
            type="text"
            placeholder=""
            value={this.state.city}
            onChange={this.onChangeValue}
          />
          <InputField
            label="Nazwa ulicy"
            name="street"
            type="text"
            placeholder=""
            value={this.state.street}
            onChange={this.onChangeValue}
          />
          <InputField
            label="Numer budynku"
            name="streetNumber"
            type="text"
            placeholder=""
            value={this.state.buildingNumber}
            onChange={this.onChangeValue}
          />
          <InputField
            label="Numer telefonu"
            name="phoneNumber"
            type="tel"
            placeholder=""
            value={this.state.phoneNumber}
            onChange={this.onChangeValue}
          />
          <input className="button button-primary" styleName="form__submit" type="submit" value="Edytuj" />
        </form>

      </div>
    )
  }
}

export default CSSModules(EditProfile, styles);