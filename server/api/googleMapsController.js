const decodePolyline = require('decode-google-map-polyline');

const AZURE_BLOB_URL = 'https://pathplanning.blob.core.windows.net/tenderloin/pathplanning'
var danger_data = ''
var request = require('request');
request(AZURE_BLOB_URL, function (error, response, body) {
   if (!error && response.statusCode == 200) {
      danger_data = JSON.parse(body);
      console.log(danger_data)
   }
})

test_polyline = 'y_reF|yejVmA_Rk@_IsAgTqAoSa@kHBo@Tm@BSt@gACGHKfAyAvAkBgFcHaDoEwBwCwAqBoAcBGQi@y@OSi@u@iA}AsBoCy@mAMKMGeBcCaC}CoBmCwHgKoKaO}B}C_AoArFwHrFuHzAsB'

module.exports = {
    findBestRoute: (routes) => {
        var min_score = Number.MAX_SAFE_INTEGER
        var bestRoute = decodePolyline(routes[0].overview_polyline.points)
        routes.forEach(function(route) {
            var points = decodePolyline(route.overview_polyline.points)
            var score = 0
            points.forEach(function(point) {
                key = 'lat: ' + point.lat.toFixed(5) + ',lng: ' + point.lng.toFixed(5)
                console.log(key)
                score += danger_data[key]
            })
            if (score < min_score) {
                min_score = score
                bestRoute = points
            }
        })
        return bestRoute
    }
}
