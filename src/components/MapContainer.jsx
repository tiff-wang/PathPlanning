import React from 'react'
import {Map, Polyline, GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            start: '',
            end: '',
            polyline: [
                { lat: 37.789411, lng: -122.422116 },
                { lat: 37.785757, lng: -122.421333 },
                { lat: 37.789352, lng: -122.415346 }
            ]
        }
    }

    render() {
        return (
            <div>
            <div id="map">
                <Map
                    className="map"
                    google={this.props.google}
                    zoom={14} 
                    mapTypeControl={false} >
                    <Polyline
                    fillColor="#0000FF"
                    fillOpacity={0.35}
                    path={this.state.polyline}
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2}
                    />
                </Map>
            </div>
            <div id="form">
                <form>
                    <div class="form-group">
                        <input class="form-control" id="start" placeholder="Start"></input>
                    </div>
                    <div class="form-group">
                        <input class="form-control" id="end" placeholder="End"></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Find Safest Route</button>
                </form>
            </div>
            </div>
        )
      }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyD6CHq7534Kd6KYPcqHSYTqu8GvcRJIbRw'
})(MapContainer)