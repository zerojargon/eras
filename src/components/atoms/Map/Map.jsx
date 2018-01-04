import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) => {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={props.pointer}
    >
      {props.pointer && <Marker position={props.pointer} />}
    </GoogleMap>
  )
}))
export default Map
