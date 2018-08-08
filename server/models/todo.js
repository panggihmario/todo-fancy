var mongoose = require('mongoose')

var Schema = mongoose.Schema
var blogTodo = new Schema({
    user :{
      type : Schema.Types.ObjectId,
      ref :  'User'
    },
    task:  {
      type : String,
      required : true
    },
    duedate : {
      type : String,
      required : true
    },
  },{
      timestamps : true
  });

var todo = mongoose.model('Task',blogTodo)

module.exports = todo