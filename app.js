const express=reqire('express')
const app=express()


app.get('/',  (req,res) =>res.send("Hello ji")
)

app.listen(3000)