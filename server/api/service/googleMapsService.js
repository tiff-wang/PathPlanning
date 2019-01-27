const googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_MAPS_KEY
  });

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
                return callback(response.json.routes)
            }
        })
    }
}


