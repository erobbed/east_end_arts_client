import React from 'react';
// import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

const MapContainer = (props) => {

  return(
    <iframe title='map'
      frameBorder="0" style={{border: '0', width: '100%',
      height: '100%' }}
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE}&q=place_id:${props.place}`}>
    </iframe>
  )
}

export default MapContainer
