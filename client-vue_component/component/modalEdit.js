Vue.component('modal-edit',{
    template :`
    <div class="modal fade" id="modalEdit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Task</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
        <input type="text" placeholder="task" v-model="objEdit.task">
        <br><br>
        <input type="date" v-model="objEdit.duedate">
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-on:click="editTask(edit)" data-dismiss="modal">Save changes</button>
        </div>
    </div>
    </div>
</div>
    `,
    props : ['edit'],
    data(){
        return{
            objEdit :{}
        }
    },
    methods :{
        editTask(task){
            let token =localStorage.getItem('token')
            axios.put(`http://localhost:3000/task/edit/${task._id}`,this.objEdit,{
                headers :{
                    token : token
                }
            })
            .then(result=>{
                console.log(result);
                
            })
            .catch(err=>{
                console.log(err);
                
            })
            
        }
    },
    watch:{
        edit(){
            this.objEdit = this.edit
        }
    }
})