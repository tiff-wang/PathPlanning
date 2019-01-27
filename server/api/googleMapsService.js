const googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_MAPS_KEY
  });

const googleMapsController = require('./googleMapsController')

// Direction. 

module.exports = {
    /**
     * Gets routes options from origin to destination.
     */
    getDirections: (req, callback) => {
        googleMapsClient.directions({
            origin: req.query.origin,
            destination: req.query.destination,
            mode: 'walking',
            alternatives: true
        }, function(err, response) {
            if (err) {
                console.log(err)
            } else {
                var points = googleMapsController.findBestRoute(response.json.routes)
                return callback(points)
            }
        })
    }
}


