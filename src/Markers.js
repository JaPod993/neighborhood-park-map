import React, {Component} from 'react'
import { getInfo } from './wikipediaApi.js'

/* Displaing info about clicked marker */
class Markers extends Component {
    render() {
        return(
            <ol tabIndex="0" id='list-of-markers'>
                {this.props.markers.map((marker,i) => (
                    <li tabIndex='0' key={i} details="spec" role="link" onClick={() => {
                        this.props.markerLocationsActive(i);
                        this.props.closeMenu();
                        getInfo(marker.title);
                    }}>
                        { marker.title }
                    </li>
                ))}
            </ol>
        )
    }
}

export default Markers