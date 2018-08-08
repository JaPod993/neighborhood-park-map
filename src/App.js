import React, { Component } from 'react'
import Map from './map.js'
import './App.css'
import Markers from './Markers.js'
import superagent from 'superagent'
import Parks from './data/parks.json'


let markers = [];
let markers_parks = [];

let parks= Parks;

class App extends Component {
    state = {
        markers: [],
        markers_parks: [],
        Parks
    }

  componentWillMount(){
  }

  render() {

      //creating array of markers from parks json
      for (let i = 0; i < parks.length; i++) {
          let marker = parks[i];
          // Push the marker to our array of markers.
          markers_parks.push(marker);
          markers.push(marker);
      }

    return (
        <div className="container">
            <h1>Parks in my neighborhood</h1>
            <div className="show-box">
                <button id="show-all">Show All Places</button>
            </div>
            <div id="list-of-localisations">
                <h2>List of places</h2>
                <Markers markers={markers}/>
            </div>
            <div id="map">
                <Map
                    markers={markers}
                    isMarkerShown
                    googleMapURL="http://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=AIzaSyCQOBc4Ov8uW2hnucJsZTeKmHqo-dZdNmQ"
                    loadingElement={<div style={{height: '100%'}}/>}
                    containerElement={<div style={{height:'100%'}} />}
                    mapElement={<div style={{height:'100%'}} />}
                />
            </div>
        </div>
    );
  }
}

export default App;
