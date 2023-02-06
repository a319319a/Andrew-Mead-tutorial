const express=require('express')
const app=express()
const path=require('path')
console.log(__dirname)
console.log(path.join(__dirname,'../public/index'))

const public_directory=path.join(__dirname,'../public')

app.use(express.static(public_directory))
app.get('',(req,res)=>{
    res.send('<h1>Welcome to express</h1>')
})
app.get('/help',(req,res)=>{
    res.send('Help page')
})
app.get('/about',(req,res)=>{
    res.end('This is about page')
})
app.listen(3000,()=>{
    console.log('The server is up on port 3000')
})