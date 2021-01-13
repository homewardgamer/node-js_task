const express =require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.get("/aditya",(req,res)=>{
    res.send("<h1>Hello Aditya</h1>")
})

app.listen(8000)

