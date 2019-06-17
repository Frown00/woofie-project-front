import { SET_CURRENT_USER, GET_ERRORS } from '../actions/types';
import isEmpty from '../validation/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function (state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      }
    case GET_ERRORS:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}