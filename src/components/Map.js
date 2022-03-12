import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { connect } from 'react-redux';
import "../css/Map.css";
import { showDataOnMap } from "../util/util";
// ({ countries, casesType, center, zoom }) 
class Map extends React.Component{
 
  render(){
    return (
      <div className="map">
        <LeafletMap center={this.props.center} zoom={this.props.zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {showDataOnMap(this.props.countries, this.props.casesType)}
        </LeafletMap>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return { countries: state.countries };
};

export default connect(
  mapStateToProps,
)(Map);

