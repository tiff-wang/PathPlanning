import React from 'react'

class Form extends React.Component {

    render() {
        const polyline = [
            { lat: 37.789411, lng: -122.422116 },
            { lat: 37.785757, lng: -122.421333 },
            { lat: 37.789352, lng: -122.415346 }
        ]
       
        return (
            <form>
                <div class="form-group">
                    <input class="form-control" id="start" placeholder="Start"></input>
                </div>
                <div class="form-group">
                    <input class="form-control" id="end" placeholder="End"></input>
                </div>
                <button type="submit" class="btn btn-primary">Find Safest Route</button>
            </form>
        )
      }
}


export default Form