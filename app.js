const express = require('express')
const bodyParser = require('body-parser')

const app =  express()

app.set('view engine','ejs')


app.get("/",function(req,res){

    var today = new Date()
    var currentDay = today.getDay()
    var day = ""

    if(currentDay === 6 || currentDay === 0)
       day = "Weekend"
    else
        day = "Weekday"

        res.render('list',{kindOfDay: day})
})


app.listen("3000",function(req,res){
    console.log("Server up and running on port 3000")
})