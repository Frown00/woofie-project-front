import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../common/form/InputField';
import CSSModules from 'react-css-modules';
import styles from './Login.module.scss';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
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
      <div styleName="login">
        <h2>Logowanie</h2>
        <form styleName="login__form">
          <InputField
            name="login"
            type="email"
            label="Login"
            onChange={this.onChangeValue}
          />
          <InputField
            name="password"
            type="password"
            label="Password"
            onChange={this.onChangeValue}
          />
          <div styleName="register">Nie masz konta? <span styleName="register-link"><Link to="/register">Zarejestruj się</Link></span></div>
          <input styleName="login__form__submit" type="submit" value="Zaloguj się" />
        </form>

      </div>
    )
  }

}

export default CSSModules(Login, styles);