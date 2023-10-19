const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task: 'string',
    done: {
        type: boolean,
        default: false
    }
})

const TodoModel = mongoose.model("todos", TodoSchema)

module.exports = TodoModel