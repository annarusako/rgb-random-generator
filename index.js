var randomColorRGB = require('random-rgb-color-picker')

// usage
// randomColorRGB()
// return {String} rgb(100,100,100)

// set maximum
// randomColorRGB({max: 100})
// return {String} rgb(90,80,60)

// set minimum
// randomColorRGB({min: 20})
// return {String} rgb(145,118,172)

// set opacity
// randomColorRGB({opacity: 0.5})
// return {String} rgba(123,182,123,0.5)

module.exports = {
    randomColorRGB
}