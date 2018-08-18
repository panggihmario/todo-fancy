Vue.component('modal',{
    template : `
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
            <input type="text" placeholder="task" v-model="task">
            <br><br>
            <input type="date" v-model="duedate">
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" v-on:click="addTask" data-dismiss="modal">Add Task</button>
            </div>
        </div>
        </div>
    </div>
    `,
    data(){
        return{
            task :'',
            duedate : ''
        }
    },
    methods :{
        addTask(){
            let token = localStorage.getItem('token')
            axios.post('http://localhost:3000/task/addTask',{
                task : this.task,
                duedate : this.duedate
            },{
                headers : {
                    token : token
                }
            })
            .then(data=>{
                console.log(data)
            })
            .catch(err=>{
                console.log(err);
                
            })
        }
    }
})