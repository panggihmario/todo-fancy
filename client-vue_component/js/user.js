new Vue({
    el :'#app',
    data :{
        name : '',
        email : '',
        password : ''
    },
    methods : {
        register(){
            axios.post('http://localhost:3000/users/register',{
                name : this.name,
                email : this.email,
                password : this.password
            })
            .then(dataUser=>{
                localStorage.setItem('token',dataUser.data.token)
                localStorage.setItem('name',dataUser.data.dataUser.name)
                console.log(dataUser)
            })
            .catch(err=>{
                console.log(err);
                
            })
        },
        login(){
            axios.post('http://localhost:3000/users/login',{
                email : this.email,
                password : this.password
            })
            .then(dataUser=>{
                localStorage.setItem('token',dataUser.data.token)
                localStorage.setItem('name',dataUser.data.dataUser.name)
                console.log(dataUser);
                
            })
            .catch(err=>{
                console.log(err);
                
            })
        }
    }
})