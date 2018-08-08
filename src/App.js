import React, { Component } from 'react'
import Map from './map.js'
import './App.css'
import Parks from './parks.js'
import superagent from 'superagent'

class App extends Component {
  constructor(){
      super()
      this.state = {
          venues:[]
      }
  }

  componentWillMount(){
      console.log('componentwillmount');
  }

  const url ='data/parks.json'

  superagent
  .get(url)
  .query(null)
  .set('Accept', 'text/json')
  .end((error, response) => {

      console.log(JSON.stringify(venues))
})



  render() {
    return (
        const markers = [
                {
                    location: {
                        lat: 50.07598,
                        lng: 20.0030946
                    }
                }

            ]


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
                <Map
                    zoom={13}
                    center={{lat: 50.07598, lng: 20.0030946}}
                    containerElement={<div style={{height:100+'%'}} />}
                    mapElement={<div style={{height:100+'%'}} />}
                />
            </div>
        </div>
    );
  }
}

export default App;
