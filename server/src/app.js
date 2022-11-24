console.log("We r Connected");
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')

//sql initialization
const {squelize} = require('./models')

const app = express()
app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(cors())

require('./routes')(app);
squelize.sync()
    .then(()=>{
        app.listen(config.port)
        console.log(`server started on port ${config.port}`)
    })