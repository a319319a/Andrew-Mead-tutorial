const request = require('request')

const temparature=(data,callback)=>{
  const url = 'http://api.weatherstack.com/current?access_key=7ac764fbde97a5f29b7a63a3dac9a1fe&query='+data.latitude+', '+data.longitude
  request({ url: url }, (error, response) => {
    if (error) {
        console.log('Unable to connect the server!')
    } else {
         const data=JSON.parse(response.body)
          callback(data)
    }
  })
}

const geoURLfunction=(location,callback)=>{
  const geoURL='https://api.geoapify.com/v1/geocode/search?text='+location+'&format=json&apiKey=d548c5ed24604be6a9dd0d989631f783'

    request({url:geoURL,json:true},(error,response)=>{
      // console.log(response.body.data)
    if (error) {
      console.log('Unable to connect the server!')
    } else {
      const data={
        longitude:response.body.results[0].lon,
        latitude:response.body.results[0].lat
      }
    callback(data)
    }
  })
}

geoURLfunction('kolkata, West Bengal, India',(data)=>{
  temparature(data,(data)=>{
    console.log('Amartya')

    console.log('Currently it is '+data.current.weather_descriptions[0]+ ' and the temparature' +data.temparature+' degree celcius.')
  })
})