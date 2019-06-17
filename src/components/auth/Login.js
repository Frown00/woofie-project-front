import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authAction';
import InputField from '../common/form/InputField';
import CSSModules from 'react-css-modules';
import styles from './Login.module.scss';
import axios from 'axios';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    }
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.oauth.isAuthenticated) {
      this.props.history.push('/account');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.oauth.isAuthenticated) {
      this.props.history.push('/account');
    }


    if (nextProps.errors) {
      this.setState({
        error: nextProps.error
      });
    }
  }


  onSubmit(e) {
    e.preventDefault();
    // const url = `http://localhost:8080/token?password=${this.state.password}&username=${this.state.username}`;
    // const user = 'crmClient1';
    // const pass = 'crmSuperSecret';
    // const basicAuth = `Basic ${user}:${pass}`;
    // const auth = "Basic Y3JtQ2xpZW50MTpjcm1TdXBlclNlY3JldA=="

    const userData = {
      username: this.state.username,
      password: this.state.password,
      oauthUser: 'crmClient1',
      oauthPass: 'crmSuperSecret',
      auth: "Basic Y3JtQ2xpZW50MTpjcm1TdXBlclNlY3JldA=="
    }
    this.props.loginUser(userData);

    // axios.get(url, {
    //   headers: {
    //     "Authorization": auth,
    //   }
    // }).then((response) => {
    //   console.log(response);
    // }).catch(function (error) {
    //   console.log(error);
    //   //console.log('Error on Authentication');
    // });
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

Login.propTypes = {
  /** Action to login
   * Gets called when user click button log in
   */
  loginUser: PropTypes.func.isRequired,
  /** Required to check if user is currently log on*/
  oauth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  oauth: state.oauth,
})

export default connect(mapStateToProps, { loginUser })(
  CSSModules(Login, styles)
);