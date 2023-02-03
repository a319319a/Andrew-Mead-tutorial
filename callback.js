setTimeout(() => {
    console.log('Two seconds')
}, 2000);

const names=['Amartya','Avirup','Pratap','Saswati']

const shortNames=names.filter((name)=>{
    return name.length>=7
})

console.log(shortNames)

const geoCode=(address,callback)=>{
    setTimeout(() => {
        const data={
            latitude:0,
            longitude:0
        }
        callback(data)
    }, 2000);
}

geoCode('Kolkata',(data)=>{
    console.log(data)
})


const add=(a,b,callback)=>{
    setTimeout(() => {
        const data=a+b
        callback(data)
    }, 2000);
}

add(1,4,(sum)=>{
    console.log(sum)
})