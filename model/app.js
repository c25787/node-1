const express=require('express')
const app=express()


app.get('/',  (req,res) =>res.send("Hello ji ok d")
)

app.listen(3000)