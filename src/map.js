import React from 'react'
import { compose, withState, withStateHandlers, } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import MapStyles from './data/MapStyles.json';
import { geocodeByPlaceId } from 'react-places-autocomplete'
import {getInfo} from './wikipediaApi.js'
import { resetInfoBox } from './resetInfoBox.js'

export const Map = compose(
    withStateHandlers(() => ({
    isOpen: false,
    }), {
        onToggleOpen: ({isOpen}) => () => ({
            isOpen: !isOpen,
        }),
    }),
    withScriptjs,
    withGoogleMap,
    withState('places', 'updatePlaces', ''),
    withState('selectedPlace', 'updateSelectedPlace', null),
) (props  => {
    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: 50.064650, lng: 19.944980 }}
            defaultOptions={{styles: MapStyles}}
            mapTypeControl={false}
        >{ props.isMarkerShown && props.markers.map((marker, i) => {
            let markerImage='/icons/';
            if (i === props.activeKey) markerImage='/icons/clicked/';
                return (
                    <Marker
                        {...marker}
                        key={i}
                        position={marker.location}
                        title={marker.title}
                        icon={markerImage + marker.type + '.png'}
                        animation={window.google.maps.Animation.DROP}
                        onClick={() => {
                            props.markerLocationsActive(i);
                            resetInfoBox();
                            getInfo(marker.title);
                            geocodeByPlaceId(marker.place_id)
                                .then(results => {
                                    const address = results[0].formatted_address;
                                    document.getElementById('address').innerHTML = 'Address: ' + address;
                                })
                                .catch(error => console.error(error))
                        }}
                    >
                        {i === props.activeKey && (
                            <InfoWindow onCloseClick={props.onToggleOpen}>
                                    <p tabIndex="0" id="title">{ marker.title }</p>
                        </InfoWindow>)}
                    </Marker>
                );})}
        </GoogleMap>
    );});

export default Map
