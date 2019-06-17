import React, { Component } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import InputField from '../common/form/InputField';
import CSSModules from 'react-css-modules';
import styles from './Register.module.scss';
import axios from 'axios';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmedPassword: '',
      email: '',
      birthDate: '',
      city: '',
      street: '',
      buildingNumber: '',
      phoneNumber: ''
    }
    this.onChangeValue = this.onChangeValue.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  onChangeValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  registerUser(e) {
    e.preventDefault();
    axios.post(
      'http://localhost:8080/users/registration',
      {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        birthDate: this.state.birthDate,
        city: this.state.city,
        street: this.state.street,
        buildingNumber: this.state.buildingNumber,
        phoneNumber: this.state.phoneNumber,
      }
    )
      .then(res => {
        console.log("User registered");
        this.props.history.push("/login");
      }


      )
      .catch(error => {
        console.log(error.response)
      })
  }

  render() {
    return (
      <div styleName="register">
        <h2>Rejestracja</h2>
        <form onSubmit={this.registerUser} styleName="register__form">
          <InputField
            name="username"
            type="name"
            label="Twoja nazwa *"
            onChange={this.onChangeValue}
          />
          <InputField
            name="password"
            type="password"
            label="Hasło *"
            onChange={this.onChangeValue}
          />
          <InputField
            name="confirmedPassword"
            type="password"
            label="Potwierdź hasło"
            onChange={this.onChangeValue}
          />
          <InputField
            name="email"
            type="email"
            label="Email *"
            onChange={this.onChangeValue}
          />
          <InputField
            name="birthDate"
            type="date"
            label="Dzień urodzenia *"
            onChange={this.onChangeValue}
          />
          <InputField
            name="city"
            type="text"
            label="Miasto *"
            onChange={this.onChangeValue}
          />
          <InputField
            name="street"
            type="text"
            label="Nazwa ulicy"
            onChange={this.onChangeValue}
          />
          <InputField
            name="buildingNumber"
            type="text"
            label="Numer budynku"
            onChange={this.onChangeValue}
          />
          <InputField
            name="phoneNumber"
            type="tel"
            label="Numer telefonu"
            onChange={this.onChangeValue}
          />
          <input styleName="register__form__submit" type="submit" value="Zarejestruj się" />
        </form>

      </div>
    )
  }
}

export default withRouter(CSSModules(Register, styles));