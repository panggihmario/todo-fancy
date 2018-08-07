import Vue from 'vue'
import Vuex from 'vuex'
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
            console.log('tes')
            axios.post('http://localhost:3000/users/register',{
                name : this.state.name,
                email : this.state.email,
                password : this.state.password
              
              })
              .then(dataUser=>{
                  if(dataUser.data.errors){
                      console.log('error')
                    }else{
                          console.log(dataUser)

                  }
                //   console.log(dataUser.data.÷errors)
              })
              .catch(err=>{
                  console.log(err)
              })
        }
    }
})


