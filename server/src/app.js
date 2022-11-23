console.log("We r Connected");
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyparser.json())
app.use(cors())

app.get('/status',(req,res)=>{
    res.send({
        message:'Wohoo!! We r finally connected'
    })
})
app.listen(process.env.PORT || 8083)