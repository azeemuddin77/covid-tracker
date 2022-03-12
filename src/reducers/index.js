import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import countryInfo from './countryInfo';

export default combineReducers({
  countries: countriesReducer,
  countryInfo: countryInfo
});
