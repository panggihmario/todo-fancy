<template>

    <v-data-table
                :headers="headers"
                :items="tasks"
                :loading="true"
                class="elevation-1"
                >
                <v-progress-linear slot="progress" color="red" indeterminate></v-progress-linear>
                <template slot="items" slot-scope="props">
      
                    
       
                    <tr v-for="(task,index) in taskAll" :key=index>
                        <td>{{task.task}}</td>
                        <td>{{task.createdAt}}</td>
                        <td>{{task.duedate}}</td>
                        <td>
                            <a href="#" @click="openModalEdit(task)" class="black--text"><i class="fas fa-edit"></i></a> || 
                            <a href="#" class="black--text" @click="deleteTask(task._id)"> 

                            <i class="far fa-trash-alt"></i>
                            </a>
                        </td>
                    </tr>
                </template>
                {{taskAll}}
    </v-data-table>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
      data(){
        return{
              headers: [
        {
          text: 'Tasks',
          align: 'center',
          value: 'name'
        },
        { text: 'start', value: 'calories' ,align :'center'},
        { text: 'Duedate', value: 'calories' ,align :'center'},
        { text: 'Action', value: 'calories' ,align :'center'},
      ],
      tasks: [{}]
        }
    },
    methods : {
        ...mapActions([
            "openModalEdit","allTask","deleteTask",
        ])
  
    },
    computed : {
        ...mapState([
            "alltasks"
        ]),
        taskAll :{
                get(){
                    return this.$store.state.alltasks
                },
                
                set(value){
                    this.$store.commit('setTasks',value)
                }
            },

    },
    created(){
        this.allTask()
        console.log("==========",this.alltasks)
    },
    
}
</script>
