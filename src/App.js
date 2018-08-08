import React, { Component } from 'react'
import Map from './map.js'
import './App.css'
import Markers from './Markers.js'
import superagent from 'superagent'
import Parks from './data/parks.json'


let markers_all = [];
let markers_parks = [];

let parks= Parks;

class App extends Component {
    state = {
        markers: markers_all,
        // markers_parks: [],
        // Parks,
        pageTitle: "Parks in my neighborhood",
        listTitle: "List of parks in my neighborhood",
        activeKey: ""
    };

    toggleLocationsActive = locationKey => {
      this.setState({
          activeKey: locationKey
      })
    };

    componentWillMount(){
        //creating array of markers from parks json
        for (let i = 0; i < parks.length; i++) {
            let marker = parks[i];
            // Push the marker to our array of markers.
            markers_all.push(marker);
            markers_parks.push(marker);
        }

        showParks = (markers) => {
            this.setState({markers: markers_parks});
        }
    }

  render() {

    return (
        <div className="container">
            <h1>{this.state.pageTitle}</h1>
            <div className="show-box">
                <button onClick={() => this.showParks()} id="show-parks">Show All Parks</button>
            </div>
            <div id="list-of-localisations">
                <h2>{this.state.listTitle}</h2>
                <Markers
                    onShowParks={this.showParks}
                    markers={this.state.markers}
                    toggleLocationsActive={this.toggleLocationsActive}
                />
            </div>
            <div id="map">
                <Map
                    activeKey={this.state.activeKey}
                    toggleLocationsActive = {this.toggleLocationsActive}
                    isMarkerShown
                    onShowParks={this.showParks}
                    markers={this.state.markers}
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
