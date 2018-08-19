const user = require('../models/user.js')
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const saltRounds = 10;
const axios = require('axios');
var FB = require('fb');

class Controller{

    static register(req,res){
        var salt = bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(req.body.password, salt);
        user.findOne({
            email:req.body.email
        })
        .then(function(mail){
            if(!mail){
                user.create({
                    name : req.body.name,
                    email : req.body.email,
                    password : hash
                })
                .then(function(dataUser){
                    var token = jwt.sign({id:dataUser._id,name:dataUser.name,email:dataUser.email},process.env.secretKey)
                    res.status(200).json({
                        dataUser,token
                    })
                })
                .catch((err)=>{
                    res.json(err)
                    console.log(err)
                })
            }else{
                res.json("account sudah ada")
            }
        })
        .catch(err=>{
            res.json(err)
        })  
     
    }

    static authentication(req,res,next){
        var decoded = jwt.verify(req.headers.token, process.env.secretKey)
        // console.log("===============",decoded)
        if(decoded){
            next()
        }else{
            res.status(400).json('error')
        }
    }

    static login(req,res){
        user.findOne({
            email : req.body.email
        })
        .then(function(dataUser){
            if(dataUser){
                let checkPassword = bcrypt.compareSync(req.body.password, dataUser.password)
                var token = jwt.sign({id:dataUser._id,name:dataUser.name,email:dataUser.email},process.env.secretKey)
                if(checkPassword){
                    // res.json(dataUser)
                    res.json({dataUser,token})
                }else{
                    res.json(false)
                }
            }else{
                res.json('empty')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    static getDataFb(req,res){
        let tokenfb = req.body.headers.tokenFb
        let url = `https://graph.facebook.com/me?fields=id,name,email&access_token=${tokenfb}`
        axios.get(url)
        .then(response=>{
            user.findOne({
                email : response.data.email
            })
            .then(function(dataFb){
                console.log(dataFb);
                
                if(dataFb){
                    var token = jwt.sign({id:dataFb._id,name:dataFb.name,email:dataFb.email},process.env.secretKey)
                    res.status(200).json({token,email :dataFb.email,name:dataFb.name})
                }else{
                    user.create({
                        name : response.data.name,
                        email : response.data.email,
                        password : response.data.id
                    })
                    .then(data=>{
                        var token = jwt.sign({id:data._id,name:data.name,email:data.email},process.env.secretKey)
                        res.status(200).json({
                            data,token
                        })
                    })
                    .catch(err=>{
                        res.status(500).json({ error: err})
                    })
                }
            })
            .catch(err=>{
                res.status(500).json({ error: err})
            })
            
        })
        
    }
}

module.exports = Controller