import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="container">
            <h1>Parks in my neighborhood</h1>
            <div className="show-box">
                <button id="show-all">Show All Places</button>
            </div>
            <div id="list-of-localisations">
                <h2>List of places</h2>
                <ul id="list-of-places"></ul>
            </div>
            <div id="map">
                <Map/>
            </div>
        </div>
    );
  }
}

export default App;
