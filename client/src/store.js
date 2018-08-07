import Vue from 'vue'
import Vuex from 'vuex'
import swal from 'sweetalert';

const axios = require('axios');
// import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        name :'',
        email :'',
        password :''
    },
    mutations :{
        setName(state,payload){
            state.name=payload
        },
        setEmail(state,payload){
            state.email = payload
        },
        setPassword(state,payload){
            state.password = payload
        }
    },
    actions:{
        register(context){
            // console.log('tes')
            axios.post('http://localhost:3000/users/register',{
                name : this.state.name,
                email : this.state.email,
                password : this.state.password
              
              })
              .then(dataUser=>{
                  if(dataUser.data.errors){
                    //   console.log('error')
                    swal("Register failed!", "please fill in the empty fields", "warning");
                    }else{
                          console.log(dataUser)

                  }
                //   console.log(dataUser.data.÷errors)
              })
              .catch(err=>{
                  console.log(err)
              })
        },
        login(context){
            axios.post('http://localhost:3000/users/login',{
                email : this.state.email,
                password : this.state.password
            })
            .then(dataUser=>{
                // console.log(dataUser)
                if(dataUser.data == false){
                    swal("Login failed!", "wrong password", "warning");
                }else{
                    console.log(dataUser)
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
})


