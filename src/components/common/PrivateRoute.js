import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 *  Route available only for authenticated users 
 */
export const PrivateRoute = ({ component: Component, oauth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      oauth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
          <Redirect to="/login" />
        )
    }
  />
);

PrivateRoute.propTypes = {
  oauth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  oauth: state.oauth
});

export default connect(mapStateToProps)(PrivateRoute)