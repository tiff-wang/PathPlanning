const decodePolyline = require('decode-google-map-polyline');

test_polyline = 'y_reF|yejVmA_Rk@_IsAgTqAoSa@kHBo@Tm@BSt@gACGHKfAyAvAkBgFcHaDoEwBwCwAqBoAcBGQi@y@OSi@u@iA}AsBoCy@mAMKMGeBcCaC}CoBmCwHgKoKaO}B}C_AoArFwHrFuHzAsB'

module.exports = {
    findBestRoute: (routes) => {
        var points = decodePolyline(test_polyline)
        return points
    }
}