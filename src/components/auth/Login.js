import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../common/form/InputField';
import CSSModules from 'react-css-modules';
import styles from './Login.module.scss';
import axios from 'axios';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(e) {
    e.preventDefault();
    const url = `http://localhost:8080/token?password=${this.state.password}&username=${this.state.username}`;
    const user = 'crmClient1';
    const pass = 'crmSuperSecret';
    const basicAuth = `Basic ${user}:${pass}`;
    const auth = "Basic Y3JtQ2xpZW50MTpjcm1TdXBlclNlY3JldA=="

    axios.defaults.withCredentials = true;
    const headers = {
      headers: {

      }
    }
    axios.get(url, {
      headers: {
        "Authorization": basicAuth,
      }
    }).then((response) => {
      console.log('Authenticated');
    }).catch(function (error) {
      console.log(error);
      // console.log('Error on Authentication');
    });
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
        <form styleName="login__form" onSubmit={this.onSubmit}>
          <InputField
            name="username"
            type="name"
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
          <button styleName="login__form__submit" type='submit'>Zaloguj się</button>
        </form>

      </div>
    )
  }

}


export default CSSModules(Login, styles);