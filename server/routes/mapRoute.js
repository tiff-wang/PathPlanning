const googleMapsService = require('../api/service/googleMapsService')

module.exports = function(app) {
    app.get('/route', function(req, res){
        googleMapsService.getDirections(req, function(response) {
            res.send(response)
        })
    })
}
