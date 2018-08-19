Vue.component('list-task',{
    template : `
    <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">Task</th>
        <th scope="col">Due Date</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="task in tasks">
			<td>{{task.task}}</td>
			<td>{{task.duedate}}</td>
			<td>
			<a href="#" data-toggle="modal" data-target="#modalEdit" v-on:click="getEdit(task)">
			<i class="fas fa-edit"></i>
			</a>
			</td>
			<td>
			<a href="#" v-on:click="deleteTask(task._id)">
			<i class="fas fa-trash-alt"></i>
			</a>
			</td>
      </tr>
    
     
    </tbody>
  </table>
    `,
	 props : ['tasks'],
    methods : {
      getEdit(task){
			this.$emit('task-edit',task)
		},
		deleteTask(id){
			console.log(id);
			let token = localStorage.getItem('token')
			axios.delete(`http://localhost:3000/task/delete/${id}`,{
				headers :{
					token : token
				}
			})
			.then(data=>{
				console.log(data);
				window.location =  "http://localhost:8080/home.html"
				
			})
			.catch(err=>{
				console.log(err);
				
			})
			
		}
	 },
	

})