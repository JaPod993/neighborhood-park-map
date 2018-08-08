import React, { Component } from 'react'
import { compose, withProps, withStateHandlers } from 'recompose'
import { withScriptjs,withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import MapStyles from './data/MapStyles.json';
import Markers from './Markers.js';
import Icon from './icons/park1.png'

let icon = Icon;

export const Map = compose(
    withStateHandlers(() => ({
    isOpen: false,
    }), {
        onToggleOpen: ({isOpen}) => () => ({
            isOpen: !isOpen,
        })
    }),
    withScriptjs,
    withGoogleMap
) (props  => {
    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: 50.07598, lng: 20.0030946 }}
            defaultOptions={{styles: MapStyles}}
            mapTypeControl={false}
            >{ props.isMarkerShown && props.markers.map( marker => {
                return (
                    <Marker
                        {...marker}
                        key={marker.place_id}
                        position={marker.location}
                        title={marker.title}
                        onClick={props.onToggleOpen}
                        icon={icon}
                    >
                    {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
                        <div>{marker.title}</div>
                    </InfoWindow>}
                    </Marker>
                );})}
        </GoogleMap>
    );})

export default Map
