import React, { Component } from 'react'
import { compose, withState, withStateHandlers, } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import MapStyles from './data/MapStyles.json';
import { geocodeByPlaceId } from 'react-places-autocomplete'
import {getInfo} from './wikipediaApi.js'

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
            defaultZoom={15}
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
                        animation={window.google.maps.Animation.DROP}
                        onClick={() => {
                            props.markerLocationsActive(i);
                            getInfo(marker.title);
                        }}
                    >
                        {i === props.activeKey && (
                            geocodeByPlaceId(marker.place_id)
                                .then(results => {
                                const address = results[0].formatted_address;
                                document.getElementById('address').innerHTML += address;
                                })
                                .catch(error => console.error(error)),
                            <InfoWindow onCloseClick={props.onToggleOpen}>
                                <div id='info-window'>
                                    <span tabIndex="0" id="title">{marker.title}</span>
                                    <br/>
                                    <span tabIndex="0" id='address-title'>Address:</span>
                                    <br/>
                                    <span tabIndex="0" id="address"></span>
                                    <br/>
                                    <span tabIndex="0" id='short-article'></span>
                                    <br/>
                                    <a tabIndex="0" target='blank' id='results'></a>
                                    <br/>
                                </div>
                        </InfoWindow>)}
                    </Marker>
                );})}
        </GoogleMap>
    );});

export default Map
