const express=require("express")
const app=express()
const port=5000

app.get("/",(req,res)=>{
    res.setHeader("set-cookie",["serverCookie=123"])
    res.sendFile(`${__dirname}/index.html`)
})

app.get("/path1",(req,res)=>{
    res.send(`Path 1: I have been sent these cookies: ${req.headers.cookie}`)
})

app.get("/path2",(req,res)=>{
    
    res.send(`Path 2: I have been sent these cookies: ${req.headers.cookie}`)
})

app.get("/path2/about",(req,res)=>{
    
    res.send(`Path 2: I have been sent these cookies: ${req.headers.cookie}`)
})


app.listen(5000,()=>{
    console.log(`Server is listening on port ${port}`)
})