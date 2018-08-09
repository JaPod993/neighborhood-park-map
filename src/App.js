import React, { Component } from 'react'
import Map from './map.js'
import './App.css'
import Menu from './Menu.js'
import InformationBox from './informationBox.js'
import Markers from './Markers.js'
import Parks from './data/parks.json'
import { resetInfoBox } from './resetInfoBox.js'

let parks= Parks;
let markers_all = [];
let markers_parks = [];


class App extends Component {
    state = {
        markers: markers_all,
        pageTitle: "Parks in my neighborhood",
        listTitle: "List of parks in my neighborhood",
        activeMarker: "",
        error: "There was an error making a request from Wikipedia"
    };

    markerLocationsActive = locationKey => {
      this.setState({
          activeKey: locationKey
      })
    };

    showParks = (markers) => {
        this.setState({markers: markers_parks});
        document.getElementById('panel').style.display='none';
        document.getElementById('open-menu').style.display='block';
        resetInfoBox();
    };

    openMenu = () => {
        document.getElementById('panel').style.display = "block";
        document.getElementById('open-menu').style.display = "none";
    };

    closeMenu = () => {
        document.getElementById('panel').style.display = "none";
        document.getElementById('open-menu').style.display = "block";
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

    render() {

    return (
        <main className="container">
            <button id='open-menu' onClick={() => this.openMenu()}>Open menu</button>
            <section id="panel">
                <button aria-label="Close" id="close-menu" onClick={() => this.closeMenu()}>x</button>
                <h1 tabIndex="0">{this.state.pageTitle}</h1>
                <Menu
                    showParks={this.showParks}
                />
                <section id="list-of-localisations">
                    <h2 tabIndex="0">{this.state.listTitle}</h2>
                    <Markers
                        onShowParks={this.showParks}
                        markers={this.state.markers}
                        closeMenu={this.closeMenu}
                        markerLocationsActive={this.markerLocationsActive}
                        hideError={this.hideError}
                    />
                </section>
            </section>
            <mark id="info-box">
                <p tabIndex="0" id="next">{ this.state.error }</p>
            </mark>
            <div id="map">
                {(navigator.onLine)&&(
                    <Map
                        activeKey={this.state.activeKey}
                        markerLocationsActive = {this.markerLocationsActive}
                        resetInfoBox={this.resetInfoBox}
                        isMarkerShown
                        markers={this.state.markers}
                        googleMapURL="http://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCQOBc4Ov8uW2hnucJsZTeKmHqo-dZdNmQ"
                        loadingElement={<div style={{height: '100%'}}/>}
                        containerElement={<div style={{height:'80%'}} />}
                        mapElement={<div style={{height:'100%'}} />}
                    />)}
                {(!navigator.onLine)&&(
                    <section id="container-offline">
                        <div id="info-offline">
                            <h3 tabIndex='0'>You are offline ...</h3>
                            <p>You can see list for cultural places in Warsaw.<br/>
                                For this click button 'Open map menu'.</p>
                        </div>
                    </section>
                )}
            </div>
            <InformationBox />
        </main>
    )
  }
}

export default App;
