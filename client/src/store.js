import Vue from 'vue'
import Vuex from 'vuex'
import swal from 'sweetalert';
import router from './router'

const axios = require('axios');
// import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        name :'',
        email :'',
        password :'',
        dialog : false,
        dialogEdit : false,
        task : '',
        duedate : '',
        alltasks : []
    },
    mutations :{
        setTasks(state,payload){
            console.log(payload)
            state.alltasks = payload
        },
        setDialogEdit(state,payload){
            state.dialogEdit = payload
        },
        setDialog(state,payload){
            state.dialog = payload
        },
        setName(state,payload){
            state.name=payload
        },
        setEmail(state,payload){
            state.email = payload
        },
        setPassword(state,payload){
            state.password = payload
        },
        setTask(state,payload){
            state.task = payload
        },
        setDueDate(state,payload){
            state.duedate = payload
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
                        localStorage.setItem('token',dataUser.data.token)
                        router.push('/about')
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
                    localStorage.setItem('token',dataUser.data.token)
                    router.push('/about')
                    console.log(dataUser)
                }
            })
            .catch(err=>{
                console.log(err)
            })
        },
        openModal({commit}){
            commit('setDialog',true)
        },
        openModalEdit({commit}){
            commit('setDialogEdit',true)
        },
        addTask(context){
            var token = localStorage.getItem('token')
            console.log(token)
            console.log(this.state.task)
            axios.post('http://localhost:3000/task',{
                task : this.state.task,
                duedate : this.state.duedate
            },{
                headers : {
                    token : token
                }
            })
            .then((data)=>{
                console.log(data)
                context.dispatch('allTask')
            })
            .catch(err=>{
                console.log(err)
            })
        },
        allTask({commit}){
            var token = localStorage.getItem('token')
            axios('http://localhost:3000/alltask',{
                headers : {
                    token : token
                }
            })
            .then(({data})=>{
                console.log(data)
                commit('setTasks', data)
            })
        }
    }
})