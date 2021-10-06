import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useHistory } from 'react-router-dom'

// const center = {
//     lat: 37.772,
//     lng: -122.214
// };
//
// const position = {
//     lat: 37.772,
//     lng: -122.214
// }

function Map(){
    const [markerPosition,setMarkerPosition] = React.useState(null);
    const containerStyle = {
        position: "absolute",
        top: "10px",
        left: "10px",
        right: "10px",
        bottom: "10px"
    };
    const onLoad = marker => {
        console.log('marker: ', marker)
    }
    const gapikey=process.env.REACT_APP_GAPI_KEY;
    let history = useHistory()
    function moveMarker(){
        setMarkerPosition({
            lat:29.7589382,
            lng:-95.3676974
        })
    }
    React.useEffect(() => {
        moveMarker()
    })
    return (
        <div className='mapbox'>
            <LoadScript
                googleMapsApiKey={gapikey}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={markerPosition}
                    zoom={10}
                    mapContainerClassName={'mapbox'}
                >
                    <Marker
                        onLoad={onLoad}
                        position={markerPosition}
                        // onPositionChanged={}
                    />
                </GoogleMap>
            </LoadScript>
            <span className='close' onClick={() => { history.goBack()}}>
                  Close
            </span>
        </div>
    )
}
export default Map
