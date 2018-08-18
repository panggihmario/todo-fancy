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
        <i class="fas fa-edit"></i>
        </td>
        <td>
        <i class="fas fa-trash-alt"></i>
        </td>
      </tr>
    
     
    </tbody>
  </table>
    `,
    props : ['tasks']

})