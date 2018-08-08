import React, {Component} from 'react'

class Markers extends Component {
    render() {
        return(
            <ol id='list-of-places'>
                {this.props.markers.map((marker,i) => (
                    <li key={i} onClick={() => {
                        this.props.toggleLocationsActive(i);
                    }}>
                       { marker.title }
                    </li>
                ))}
            </ol>
        )
    }
}

export default Markers