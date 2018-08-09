import React, {Component} from 'react'
import { getInfo } from './wikipediaApi.js'
import {resetInfoBox} from "./resetInfoBox";
import {geocodeByPlaceId} from "react-places-autocomplete";

/* Displaing info about clicked marker */
class Markers extends Component {
    render() {
        return(
            <ol tabIndex="0" id='list-of-markers'>
                {this.props.markers.map((marker,i) => (
                    <li tabIndex='0' key={i} details="spec" role="link" onClick={() => {
                        this.props.markerLocationsActive(i);
                        this.props.closeMenu();
                        resetInfoBox();
                        getInfo(marker.title);
                        geocodeByPlaceId(marker.place_id)
                            .then(results => {
                                const address = results[0].formatted_address;
                                document.getElementById('address').innerHTML = 'Address: ' + address;
                            })
                    }}>
                        { marker.title }
                    </li>
                ))}
            </ol>
        )
    }
}

export default Markers