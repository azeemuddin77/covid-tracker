import React from "react";
import { connect } from 'react-redux';
import { fetchCountries } from '../actions';
import "../css/Table.css";
import numeral from "numeral";
import { sortData } from "../util/util";

// here class based component is used.
class Table extends React.Component{
  componentDidMount() {
    this.props.fetchCountries();
  }
  render(){
    return (
      <div className="table">
        {this.props.countries.map((country) => (
          <tr key={country.country}>
            <td>{country.country}</td>
            <td>
              <strong>{numeral(country.cases).format("0,0")}</strong>
            </td>
          </tr>
        ))}
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  let sortedData = sortData(state.countries);
  return { countries: sortedData };
};

export default connect(
  mapStateToProps,
  { fetchCountries }
)(Table);
