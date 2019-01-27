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

    handleSubmit(evt) {
        evt.preventDefault()
        console.log(this.state)
        // var emails = ''
        // axios.get('/api/members')
        //   .then(res => {
        //     var members = res.data
        //     for (let i = 0; i < members.length; i++) {
        //         if ( (members[i].member_type == 'Subscriber' && this.state.subscribers) ||
        //              (members[i].member_type == 'Active Member' && this.state.active_members) ||
        //              (members[i].member_type == 'Contributer' && this.state.contributers) ||
        //              (members[i].member_type == 'Executive' && this.state.executives ) ) {
        //                 emails = emails + members[i].email + ', '
        //         }
        //     }
        //     this.sendNewsletter(this, emails)
        // })
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