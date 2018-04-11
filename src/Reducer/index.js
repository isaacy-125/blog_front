import { combineReducers } from 'redux';
import { Map } from 'immutable';
import homeReducer from './homeReducer';

const indexState = Map({
  isAuth: false,
})

export function indexReducer(state = indexState, action) {
  switch (action.type) {
    case "y":
      return state.set('isAuth', true);
    case "n":
      return state.set('isAuth', false);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  indexReducer,
  homeReducer,
})

export default rootReducer;