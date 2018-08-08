import React, {Component} from 'react'
import { geocodeByPlaceId } from 'react-places-autocomplete'

class Markers extends Component {
    render() {
        return(
            <ol id='list-of-places'>
                {this.props.markers.map((marker,i) => (
                    <li key={i} onClick={() => {
                        this.props.toggleLocationsActive(i);
                        this.props.closeMenu();
                        this.props.hideError();
                        geocodeByPlaceId(marker.place_id)
                            .then(results => {
                                const address = results[0].formatted_address;
                            })
                            .catch(error => console.error(error))
                    }}>
                        { marker.title }
                    </li>
                ))}
            </ol>
        )
    }
}

export default Markers