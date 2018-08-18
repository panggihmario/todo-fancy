var mongoose = require('mongoose')

var Schema = mongoose.Schema
var blogUser = new Schema({
    name:  {
      type : String,
      required : true,
      msg : 'tess'
    },
    email : {
      type : String,
      required : true
    },
    password : {
      type : String,
      required : true
    },
    tasks : []
  });

var user = mongoose.model('User',blogUser)

module.exports = user