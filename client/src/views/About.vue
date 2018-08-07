<template>
    <div id="app">
        <v-app id="inspire">
            <v-jumbotron :gradient="gradient" style="height:100vh">
            <navbar/>
            <modal/>
            <v-container style="margin-top:100px">
                <listTask/>
            </v-container>
            </v-jumbotron>
        </v-app>
</div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import listTask from '@/components/listTask.vue'
import modal from '@/components/modal.vue'
export default {
    components : {
        navbar,listTask,modal
    },
    data(){
        return{
            gradient : 'to right, #076585,#fff'
        }
    }
  
}
</script>
