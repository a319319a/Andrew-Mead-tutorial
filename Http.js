const request = require('request')
 
const url = 'http://api.weatherstack.com/current?access_key=7ac764fbde97a5f29b7a63a3dac9a1fe&query=kolkata'
 
request({ url: url }, (error, response) => {
    if (error) {
        console.log('Unable to connect the server!')
    } else {
         const data=JSON.parse(response.body)
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + ' degress.')
    console.log('Today is Tuesday and it is '+data.current.temperature+'degree temperature ')
    }
})


const geoURL='http://api.positionstack.com/v1/forward?access_key=f2682f0b98926b2f5d27c9587b8c10e8&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC'

request({url:geoURL,json:true},(error,response)=>{
    // console.log(response.body.data)
  if (error) {
    console.log('Unable to connect the server!')
  } else {
    const latitude=response.body.data[0].latitude
    console.log(latitude)
    const longitude=response.body.data[1].longitude
     console.log(longitude)
  }
})

