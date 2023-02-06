const geourl=require('./Http')
const yargs=require('yargs')
yargs.version('10.1.1')
function findWeather(place){
    geourl.geoURLfunction(place,(data)=>{
        geourl.temparature(data,(data)=>{
          console.log('Amartya')
          console.log('Currently it is '+data.current.weather_descriptions[0]+ ' and the temparature is ' +data.current.temperature+' degree celcius.')
        })
    })
}
yargs.command({
    command:'weather',
    description:'The current weather ',
    builder:{
        place:{
            describe:'place of the',
            demandOption:true,
            type:'string'
        },
        
    },
    handler:function(argv){
        findWeather(argv.place)
     }
})

yargs.parse()