import React, { useEffect } from "react";
import "../css/App.css";
import { connect } from 'react-redux';
import { updateCountryInfo, countryInfo } from '../actions';
import { MenuItem, FormControl,Select} from "@material-ui/core";

// here class based component is being used
class CountryDropdown extends React.Component{
  state = {
    country:'worldwide'
  }
  onCountryChange = async (e) => {
    const countryCode = e.target.value;
    this.setState({ country:countryCode })
    if(countryCode == 'worldwide'){
      this.props.countryInfo()
    }
    else{
      this.props.updateCountryInfo(countryCode)
    }
  };

  render(){
    return (
      <FormControl className="app__dropdown">
        <Select variant="outlined" value={this.state.country} onChange={this.onCountryChange}>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {this.props.countries.map((country) => (
            <MenuItem key={country.name} value={country.value}>{country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
  
}

const mapStateToProps = state => {
  let data=state.countries 
  const countries = data.map((country) => ({
    name: country.country,
    value: country.countryInfo.iso2,
  }));
  return { countries };
};

export default connect(
  mapStateToProps,
  {updateCountryInfo, countryInfo}
)(CountryDropdown);
