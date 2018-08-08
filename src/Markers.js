import React, {Component} from 'react'

class Markers extends Component {
    render() {
        return(
            <ol id='list-of-places'>
                {this.props.markers.map((marker,i) => (
                    <li key={i}>
                        <a href="javascript:google.maps.event.trigger(markers[${i}],'click', {});">{ marker.title }</a>
                    </li>
                ))}
            </ol>
        )
    }
}

export default Markers