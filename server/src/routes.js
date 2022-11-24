module.exports = (app)=>{
    app.post('/register',(req,res)=>{
        console.log("Post Request Complete")
        res.send({
            message:`${req.body.email}hello Wohoo!! user is registered ! F* Up`
        })
    })
    
}