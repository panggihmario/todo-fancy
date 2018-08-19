new Vue({
    el :'#app',
    data : {
        tasks : '',
        name :'',
        edit : null
    },
    methods : {
        allTask(){
            var token=localStorage.getItem('token')
            axios.get('http://localhost:3000/task/alltask',{
                headers : {
                    token: token
                }
            })
            .then(list=>{
                this.tasks = list.data
            })
            .catch(err=>{
                console.log(er);
            })
        },
        getDataEdit(data){
            console.log(data.task)
            this.edit = data
        },
        getName(){
           let name =localStorage.get('name')
           this.name = name
        }
    },
    mounted () {
        this.allTask()
        this.getName()
    }
})