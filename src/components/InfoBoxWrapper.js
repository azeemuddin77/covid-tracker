import React,{useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Card, CardContent, Typography } from "@material-ui/core";
import InfoBox from "./InfoBox";
import numeral from "numeral";
import { countryInfo } from '../actions';
import { sortData, prettyPrintStat } from "../util/util";
import "../css/InfoBox.css";

//here functional component is being used.
function InfoBoxWrapper({ title, cases, total, active, isRed, ...props }) {
  const [casesType, setCasesType] = useState("cases");
  useEffect(() => {
    props.countryInfo();
  }, []);
  return (
    <>
          <InfoBox
                  onClick={(e) => setCasesType("cases")}
                  title="Coronavirus Cases"
                  isRed
                  active={casesType === "cases"}
                  cases={prettyPrintStat(props.countryInfoData.todayCases)}
                  total={numeral(props.countryInfoData.cases).format("0.0a")}
                />
          <InfoBox
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            active={casesType === "recovered"}
            cases={prettyPrintStat(props.countryInfoData.todayRecovered)}
            total={numeral(props.countryInfoData.recovered).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            isRed
            active={casesType === "deaths"}
            cases={prettyPrintStat(props.countryInfoData.todayDeaths)}
            total={numeral(props.countryInfoData.deaths).format("0.0a")}
          />
    </>
  );
}

const mapStateToProps = state => {
  return { countryInfoData: state.countryInfo };
};

export default connect(
  mapStateToProps,
  { countryInfo }
)(InfoBoxWrapper);
