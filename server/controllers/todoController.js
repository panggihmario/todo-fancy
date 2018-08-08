const todo = require('../models/todo.js')
const jwt = require('jsonwebtoken')


class Controller{
    static addTask(req,res){
        var decoded = jwt.verify(req.headers.token, process.env.secretKey)
        // console.log(decoded)
        todo.create({
            task : req.body.task,
            user: decoded.id,
            duedate : req.body.duedate
        })
        .then(function(data){
            console.log('success')
            // console.log(data)
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
       
    }

    static allTask(req,res){
        // console.log("masuk dong",req.headers)
        var decoded = jwt.verify(req.headers.token, process.env.secretKey)
        console.log("===================",decoded)
        todo.find({
            user: decoded.id
        })
        .sort({duedate : "asc"})
        .populate('user')
        .then(function(allData){
            // console.log('tes')
            res.json(allData)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    static deleteTask(req,res){
        todo.deleteOne({
            _id : req.params.id
        },function(err,data){
            res.json(data)
        })
    }

    static updateTask(req,res){
        todo.updateOne({
            _id : req.params.id
        },{
            task : req.body.task,
            duedate : req.body.duedate
        })
        .then(function(data){
            res.json(data)
        })
    }
}

module.exports = Controller