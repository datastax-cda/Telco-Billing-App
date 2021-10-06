import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useHistory } from 'react-router-dom'

const containerStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    right: "10px",
    bottom: "10px"
};
const center = {
    lat: 37.772,
    lng: -122.214
};
const position = {
    lat: 37.772,
    lng: -122.214
}
const onLoad = marker => {
    console.log('marker: ', marker)
}

export default function MapBox() {
    const GoogleMapsAPIKey=process.env.GAPI_KEY;
    const account = window.location.search
    let history = useHistory()
    return (
        <div className='mapbox'>
            <span className='close' onClick={() => { history.push(`/home${account}`)}}>
                  &times;
            </span>
            <LoadScript
                // googleMapsApiKey={'AIzaSyCSrrnwIUucDnFDLYgdkQUn4ztLwoik2AA'}
                googleMapsApiKey={GoogleMapsAPIKey}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    mapContainerClassName={'mapbox'}
                >
                <Marker
                    onLoad={onLoad}
                    position={position}
                />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}
