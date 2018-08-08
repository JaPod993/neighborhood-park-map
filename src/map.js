import React, { Component } from 'react'
import { compose, withProps, withState, withStateHandlers, withHandlers } from 'recompose'
import { withScriptjs,withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import MapStyles from './data/MapStyles.json';
import Markers from './Markers.js';

export const Map = compose(
    withStateHandlers(() => ({
    isOpen: false,
    }), {
        onToggleOpen: ({isOpen}) => () => ({
            isOpen: !isOpen,
        })
    }),
    withScriptjs,
    withGoogleMap,
    withState('places', 'updatePlaces', ''),
    withState('selectedPlace', 'updateSelectedPlace', null),
) (props  => {
    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: 50.07598, lng: 20.0030946 }}
            defaultOptions={{styles: MapStyles}}
            mapTypeControl={false}
            >{ props.isMarkerShown && props.markers.map((marker, i) => {
                let icon = {
                    url: './icons/park1.png'
                }
                return (
                    <Marker
                        {...marker}
                        key={i}
                        position={marker.location}
                        title={marker.title}
                        icon={'./icons/park1.png'}
                        onClick={() => {
                            props.toggleLocationsActive(i);
                        }}
                    >
                        {i === props.activeKey && (<InfoWindow onCloseClick={props.onToggleOpen}>
                            <div>{marker.title}</div>
                        </InfoWindow>)}
                    </Marker>
                );})}
        </GoogleMap>
    );})

export default Map
