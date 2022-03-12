import React, { useState, useEffect } from "react";
import "../css/App.css";
import {
  Card,
  CardContent,
} from "@material-ui/core";

// all the components are imported here
import LineGraph from "./LineGraph";
import Table from "./Table";
import Map from "./Map";
import "leaflet/dist/leaflet.css";
import CountryDropdown from "./CountryDropdown";
import InfoBoxWrapper from "./InfoBoxWrapper";

const App = () => {
  const [countryInfo, setCountryInfo] = useState({});
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(1);

  useEffect(() => {
    
  }, []);

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 Tracker</h1>
          <CountryDropdown />
        </div>
        <div className="app__stats">
          <InfoBoxWrapper></InfoBoxWrapper>
        </div>
        <Map
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
      <Card className="app__right">
        <CardContent>
          <div className="app__information">
            <h3>Live Cases by Country</h3>
            <Table />
            <h3>Worldwide new {casesType}</h3>
            <LineGraph casesType={casesType} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
