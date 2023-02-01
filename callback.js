setTimeout(() => {
    console.log('Two seconds')
}, 2000);

const names=['Amartya','Avirup','Pratap','Saswati']

const shortNames=names.filter((name)=>{
    return name.length>=4
})

console.log(shortNames)

const geoCode=(address,callback)=>{
    const data={
        latitude:0,
        longitude:0
    }
}