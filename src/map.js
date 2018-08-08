import React, { Component } from 'react'
import { compose, withProps, withState, withStateHandlers, withHandlers } from 'recompose'
import { withScriptjs,withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import MapStyles from './data/MapStyles.json';
import Markers from './Markers.js';
import { geocodeByPlaceId } from 'react-places-autocomplete'
import {getInfo} from './wikipediaApi.js'

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
                        {i === props.activeKey && (
                            getInfo(marker.title),
                            geocodeByPlaceId(marker.place_id)
                                .then(recults => {
                                const address = recults[0].formatted_address;
                                document.getElementById('address').innerHTML += address;
                                console.log(recults);
                                })
                                .catch(error => console.error(error)),
                            <InfoWindow onCloseClick={props.onToggleOpen}>
                                <div>
                                    <span id="title">{marker.title}</span>
                                    <br/>
                                    <span id='address-title'>Address:</span>
                                    <br/>
                                    <span id="address"></span>
                                    <br/>
                                    <span id='short-article'></span>
                                    <br/>
                                    <a target=_blank id='results'></a>
                                    <span id='info'></span>
                                </div>
                        </InfoWindow>)}
                    </Marker>
                );})}
        </GoogleMap>
    );})

export default Map
