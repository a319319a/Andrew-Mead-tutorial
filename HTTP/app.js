const http=require('http')
let place='kolkata'
let placeUrl='http://api.geoapify.com/v1/geocode/search?text='+'Kolkata, India'+'&format=json&apiKey=d548c5ed24604be6a9dd0d989631f783'

const request =http.request(placeUrl,(response)=>{
    let data_location=''
    let data={
        longitude:response.body.results[0].lon,
        latitude:response.body.results[0].lat
      }
    let url='http://api.weatherstack.com/current?access_key=7ac764fbde97a5f29b7a63a3dac9a1fe&query='+data.latitude+', '+data.longitude

    http.request(url,(response)=>{
        if (error) {
            console.log('Unable to connect the server!')
        } else {
            data_location=JSON.parse(response.body)
        }
    })
    response.on('data',(chunk)=>{
        data=data+chunk.toString()
    })

    response.on('end',()=>{

        jsonObject=JSON.parse(data)
        console.log(jsonObject);
    })
})
