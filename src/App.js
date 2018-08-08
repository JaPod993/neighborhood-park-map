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

    }

    showParks = (markers) => {
        this.setState({markers: markers_parks});
        document.getElementById('panel').style.display='none';
        document.getElementById('open-menu').style.display='block';
    };

    openMenu(){
        document.getElementById('panel').style.display = "block";
        document.getElementById('open-menu').style.display = "none";
    }

    closeMenu(){
        document.getElementById('panel').style.display = "none";
        document.getElementById('open-menu').style.display = "block";
    }


    render() {

    return (
        <div className="container">
            <button id='open-menu' onClick={() => this.openMenu()}>Open menu</button>
            <div id="panel">
                <button id="close-menu" onClick={() => this.closeMenu()}>x</button>
                <h1>{this.state.pageTitle}</h1>
                <div className="options-box">
                    <button onClick={() => this.showParks()} id="show-parks">Show All Parks</button>
                </div>
                <div id="list-of-localisations">
                    <h2>{this.state.listTitle}</h2>
                    <Markers
                        onShowParks={this.showParks}
                        markers={this.state.markers}
                        closeMenu={this.closeMenu}
                        toggleLocationsActive={this.toggleLocationsActive}
                    />
                </div>
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
