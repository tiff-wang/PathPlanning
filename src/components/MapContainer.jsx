import React from 'react'
import {Map, Polyline, GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends React.Component {

    render() {
        const polyline = [
            { lat: 37.789411, lng: -122.422116 },
            { lat: 37.785757, lng: -122.421333 },
            { lat: 37.789352, lng: -122.415346 }
        ]

        const defaultMapOptions = {
            mapTypeControl: false
        }
       
        return (
            <Map
                className="map"
                google={this.props.google}
                zoom={14} 
                mapTypeControl={false} >
                <Polyline
                fillColor="#0000FF"
                fillOpacity={0.35}
                path={polyline}
                strokeColor="#0000FF"
                strokeOpacity={0.8}
                strokeWeight={2}
                />
            </Map>
        )
      }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyD6CHq7534Kd6KYPcqHSYTqu8GvcRJIbRw'
})(MapContainer)