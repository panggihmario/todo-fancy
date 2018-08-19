import Vue from 'vue'
import Vuex from 'vuex'
import swal from 'sweetalert';
import router from './router'
import {provider,auth} from '@/firebase.js'

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
        alltasks : [],
        editTodo: ''
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
        },
        setEditTodo(state, payload){
            state.editTodo = payload
        }
    },
    actions:{
        register(context){
            axios.post('http://localhost:3000/users/register',{
                name : this.state.name,
                email : this.state.email,
                password : this.state.password
              
              })
              .then(dataUser=>{
                  if(dataUser.data.errors){
                    swal("Register failed!", "please fill in the empty fields", "warning");
                    }else{
                        localStorage.setItem('token',dataUser.data.token)
                        localStorage.setItem('name',dataUser.data.dataUser.name)
                        router.push('/about')
                  }
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
                if(dataUser.data == false){
                    swal("Login failed!", "wrong password", "warning");
                }else{
                    console.log(dataUser);
                    
                    localStorage.setItem('token',dataUser.data.token)
                    localStorage.setItem('name',dataUser.data.dataUser.name)
                    router.push('/about')
                }
            })
            .catch(err=>{
                console.log(err)
            })
        },
        openModal({commit}){
            commit('setDialog',true)
        },
        openModalEdit({commit},data){
            commit('setEditTodo', data)
            commit('setDueDate',data.duedate)
            commit('setTask',data.task)
            commit('setDialogEdit',true)
        },
        addTask(context){
            var token = localStorage.getItem('token')
            axios.post('http://localhost:3000/task/addTask',{
                task : this.state.task,
                duedate : this.state.duedate
            },{
                headers : {
                    token : token
                }
            })
            .then((data)=>{
                context.dispatch('allTask')
            })
            .catch(err=>{
                console.log(err)
            })
        },
        allTask({commit}){
            var token = localStorage.getItem('token')
            axios('http://localhost:3000/task/alltask',{
                headers : {
                    token : token
                }
            })
            .then(({data})=>{
                console.log(data)
                commit('setTasks', data)
            })
        },
        deleteTask(context,id){
            var token = localStorage.getItem('token')
            axios.delete(`http://localhost:3000/task/delete/${id}`,{
                headers : {
                    token : token
                }
            })
            .then(data=>{
                context.dispatch('allTask')
            })
            .catch(err=>{
                console.log(err)
            })
            
        },
        editTask(context,id){
            var token = localStorage.getItem('token')
            axios.put(`http://localhost:3000/task/edit/${id}`,{
                task : this.state.task,
                duedate : this.state.duedate
            },{
                headers : {
                    token : token
                }
            })
            .then(data=>{
                context.dispatch('allTask')
            })
            .catch(err=>{
                console.log(err)      
            })
        },
        logout(context){
            localStorage.clear()
            router.push('/login')
            auth.signOut()
            .then(result=>{
                
            })
        },
        loginFb(context){
            auth.signInWithPopup(provider)
            .then(function(result) {
                console.log(result.credential.accessToken)
                axios.post('http://localhost:3000/users/loginfb',{
                    headers : {
                        tokenFb : result.credential.accessToken
                    }
                })
                .then(data=>{
                    console.log(data)
                    let token = data.data.token
                    let name = data.data.name
                    localStorage.setItem('token',token)
                    localStorage.setItem('name',name)
                    router.push('/about')
                })
            })
        }

    }
})