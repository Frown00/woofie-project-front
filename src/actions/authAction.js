import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginUser = (userData) => dispatch => {
  const url = `http://localhost:8080/token?password=${userData.password}&username=${userData.username}`
  axios.get(url, {
    headers: {
      "Authorization": userData.auth
    }
  })
    .then(res => {
      // Save to localStorage
      console.log(res.data);
      const { access_token, refresh_token, expires_in } = res.data;
      // Set token to localStorage
      localStorage.setItem('oauthToken', 'bearer ' + access_token);
      // Set token to Auth header
      setAuthToken('bearer ' + access_token);
      axios.get('http://localhost:8080/api/users/me')
        .then((res) => {
          res.data.token = 'bearer ' + access_token;
          res.data.exp = expires_in;
          res.data.refresh_token = 'bearer ' + refresh_token;
          dispatch(setCurrentUser(res.data))
        });
      // Decode token to get user data
      // const decoded = jwt_decode(access_token);
      // Set current user
      // dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    });
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  console.log(decoded);
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// Update user data
export const updateUserData = () => dispatch => {
  const token = localStorage.getItem('oauthToken');
  setAuthToken(token);
  axios.get('http://localhost:8080/api/users/me')
    .then((res) => {
      dispatch(setCurrentUser(res.data))
    });
}

// Log user out
export const logoutUser = (history) => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('oauthToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));

}