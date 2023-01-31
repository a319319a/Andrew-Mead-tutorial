const fs=require('fs')
const { isAbsolute } = require('path')

const getNotes=function(){
    if (fs.existsSync('./Text/text.txt')) {
        fs.writeFileSync('./Text/text.txt','I am learning node js. ')
    } else {
        fs.mkdirSync("Text")
        fs.writeFileSync('./Text/text.txt','My name is amartya. ')
    }
}


const add=(a,b)=>{
    return a+b
}

const sub=(a,b)=>{
    return a-b
}
module.exports={getNotes,add,sub}