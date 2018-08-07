<template>
    <v-data-table
                :headers="headers"
                :items="tasks"
                :loading="true"
                class="elevation-1"
                >
                <v-progress-linear slot="progress" color="red" indeterminate></v-progress-linear>
                <template slot="items" slot-scope="props">
      

       
                    <tr>
                        <td>Alvin</td>
                        <td>Eclair</td>
                        <td>$0.87</td>
                        <td>$0.87</td>
                    </tr>
       
       
                </template>
    </v-data-table>
</template>

<script>
export default {
      data(){
        return{
              headers: [
        {
          text: 'Tasks',
          align: 'center',
          value: 'name'
        },
        { text: 'duedate', value: 'calories' ,align :'center'},
        { text: 'Status', value: 'calories' ,align :'center'},
        { text: 'Action', value: 'calories' ,align :'center'},
      
      ],
      tasks: [
        {
     
        }]
        }
    }
}
</script>
