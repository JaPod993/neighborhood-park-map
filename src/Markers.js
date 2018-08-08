import React, {Component} from 'react'

class Markers extends Component {
    render() {
        <ol id='list-of-places'>
            {this.props.markers.map((marker,i) => (
                <li key={i}>
                    <a href="javascript:google.maps.event.trigger(markers[{marker.id}],'click', {});">{ marker.title }</a>
                </li>
            ))}
        </ol>
    }
}

export default Markers