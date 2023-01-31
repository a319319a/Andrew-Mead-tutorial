const path=require('path')
const fs=require('fs')
const { relative } = require('path')
const book={
    title:'innerEngineering and self motivation',
    author:'Sadhguru',
    price:250
}


const bookJSon=JSON.stringify(book)

const storeJson=()=>{
    if (!fs.existsSync("./Text/text.json")) {
        fs.writeFileSync('./Text/text.json',bookJSon)
    } else {
        fs.appendFileSync('./Text/text.json',bookJSon)
    }
}


const addNote=(title,body)=>{
   const notes=loadNotes()
    console.log(loadNotes())
    notes.push({
        title:title,
        body:body
    })
    
    saveNotes(notes)
}

const loadNotes=function(){
    try {
        const dataBuffer=fs.readFileSync('./Text/text.json')
        const stringData=dataBuffer.toString()
        return JSON.parse(stringData)
    } catch (error) {
        return []
    }
}

const saveNotes=function(notes){
    const jsonData=JSON.stringify(notes)
    if (!fs.existsSync("./Text")) {
        fs.mkdirSync("Text")
        // path_tofile=path.relative('Text','text.json')
        // fs.open(path_tofile,'w',function(err,data){
        //     if (err) {
        //         throw err
        //     }
        //     console.log('File created successfully')
        // })
        fs.writeFileSync('./Text/text.json',jsonData)
    } 
    else
    {
        fs.writeFileSync('./Text/text.json',jsonData)
    }
}
module.exports={storeJson,addNote}