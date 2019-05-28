import React, { Component } from 'react'
import InputField from '../common/form/InputField';
import CSSModules from 'react-css-modules';
import styles from './Register.module.scss';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      confirmedPassword: ''
    }
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  render() {
    return (
      <div styleName="register">
        <h2>Rejestracja</h2>
        <div styleName="register__form">
          <InputField
            name="login"
            type="email"
            label="Login"
            onChange={this.onChangeValue}
          />
          <InputField
            name="password"
            type="password"
            label="Hasło"
            onChange={this.onChangeValue}
          />
          <InputField
            name="confirmedPassword"
            type="password"
            label="Potwierdź hasło"
            onChange={this.onChangeValue}
          />
          <input styleName="register__form__submit" type="submit" value="Zarejestruj się" />
        </div>

      </div>
    )
  }

}

export default CSSModules(Login, styles);