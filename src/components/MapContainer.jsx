import React from 'react'
import {Map, Polyline, GoogleApiWrapper} from 'google-maps-react'
import axios from 'axios'

class MapContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            start: '',
            end: '',
            polyline: []
        }
    }

    handleSubmit(evt) {
        evt.preventDefault()
        axios.get('https://pathplanning.azurewebsites.net/route?origin=%27785%20golden%20gate%20avenue%27&destination=%27345%20spear%20street%27')
          .then(res => {
            var result = res.data
            this.setState({
                polyline: result
            })
        })
    }

    render() {
        return (
            <div>
            <div id="nav">
                <nav class="navbar navbar-light bg-light">
                    <div class="row">
                        <img height='50px' width='50px' class="navbar-brand" src="./src/static/tenderloin.png" alt="logo"></img>
                        <span class="navbar-brand mb-0 h1">TENDERLOIN</span>
                    </div>
                </nav>
            </div>
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
                <form onSubmit={evt => this.handleSubmit(evt)}>
                    <div class="form-group">
                        <input className="form-control" value={this.state.start} 
                        onChange={evt => this.setState({ start: evt.target.value })} placeholder="Start"></input>
                    </div>
                    <div class="form-group">
                        <input className="form-control" value={this.state.end} 
                        onChange={evt => this.setState({ end: evt.target.value })} placeholder="End"></input>
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