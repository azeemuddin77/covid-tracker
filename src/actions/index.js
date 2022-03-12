import _ from 'lodash';
import io from 'socket.io-client';
import { CardActions } from '@material-ui/core';

// socketio client side connection is established here
const socket = io('http://localhost:4000', {
  transports: ['websocket', 'polling']
});

// this action creator is to fetch statistics of all countries and displayed in right side 
// of the table and on the map
export const fetchCountries = () => async dispatch => {
  socket.on('countriesData', data => {
    dispatch({ type: 'FETCH_COUNTRIES', payload: data });
  });
  
};

// this action creator is to fetch statistics and display on infographic cards.
export const countryInfo = () => async dispatch => {
  socket.on('countriesInfoData', data => {
    dispatch({ type: 'COUNTRY_INFO', payload: data });
  });
};

// this action creator is to fetch data and display infographic cards when the countries dropdown is changed.
export const updateCountryInfo = (payload) => async dispatch => {
  const url =`https://disease.sh/v3/covid-19/countries/${payload}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'COUNTRY_INFO', payload: data });
      });
  
};
