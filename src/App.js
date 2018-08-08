import React, { Component } from 'react'
import Map from './map.js'
import './App.css'
import Markers from './Markers.js'
import superagent from 'superagent'
import Parks from './data/parks.json'


let markers = [];
let markers_parks = [];

class App extends Component {
    state = {
        markers: [],
        markers_parks: []
    }

  componentWillMount(){
      let parks = Parks;

      //creating array of markers from parks json
      for (let i = 0; i < parks.length; i++) {
          let location = parks[i].location;
          let title = parks[i].title;
          let place_id = parks[i].place_id;
          let marker = parks[i];
          // Push the marker to our array of markers.
          markers_parks.push(marker);
          markers.push(marker);
      }
  }

  render() {
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
                    googleMapURL="http://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCQOBc4Ov8uW2hnucJsZTeKmHqo-dZdNmQ"
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
