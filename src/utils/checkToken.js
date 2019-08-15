import setAuthToken from './setAuthToken';
import axios from 'axios';
import store from '../store';
import { setCurrentUser, logoutUser } from '../actions/authAction';

const checkToken = () => {
  if (localStorage.oauthToken) {
    // Set auth token header auth
    setAuthToken(localStorage.oauthToken);
    // Decode token and get user info
    axios.get('http://localhost:8080/api/users/me')
      .then((res) => {
        // Set user and isAuthenticated
        store.dispatch(setCurrentUser(res.data));
        // Check for expired token
        const currentTime = Date.now() / 1000;

        if (res.data.exp < currentTime) {
          // Logout user
          store.dispatch(logoutUser());

          // // Clear profile
          // store.dispatch(clearCurrentProfile());
          // Redirect to login
          window.location.href = '/login';
        }
      });
    // const decoded = jwt_decode(localStorage.oauthToken);


  }
}

export default checkToken