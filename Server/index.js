const express =  require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://username:password@cluster0.fjgmhj9.mongodb.net/todolist')

app.get('/get', (req,res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const task = req.body.task

    TodoModel.create({
        task: task
    }).then(result => res.json(result))
        .catch(err => res.json(err))
})
app.listen('3000', () => {
    console.log("Server up and running on port 3000")
})