Vue.component('list-task',{
    template : `
    <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">Task</th>
        <th scope="col">Due Date</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="task in tasks">
        <td>{{task.task}}</td>
        <td>{{task.duedate}}</td>
        <td></td>
      </tr>
    
     
    </tbody>
  </table>
    `,
    props : ['tasks']

})