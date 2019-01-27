const polyline = require('google-polyline')

test_polyline = 'y_reF|yejVmA_Rk@_IsAgTqAoSa@kHBo@Tm@BSt@gACGHKfAyAvAkBgFcHaDoEwBwCwAqBoAcBGQi@y@OSi@u@iA}AsBoCy@mAMKMGeBcCaC}CoBmCwHgKoKaO}B}C_AoArFwHrFuHzAsB'

module.exports = {
    findBestRoute: (routes) => {
        points = polyline.decode(test_polyline)
        return points
    }
}