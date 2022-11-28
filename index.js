const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const roomInfo =  require ("./data/roomData.json")

app.use(cors())

app.get('/roomInfo',(req,res)=>{
    res.send(roomInfo)
})

app.listen(port,()=>{
    console.log(`Hoteltastic is running in ${port}`)
})