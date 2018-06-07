var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var TaskSchema = new mongoose.Schema({
    id: String,
    title: String,
    taskStatus: String,
    date: String,
    idDesc: String,
    time: String
})

TaskSchema.plugin(mongoosePaginate)
const Task = mongoose.model('TaskUpdated', TaskSchema)

module.exports = Task;