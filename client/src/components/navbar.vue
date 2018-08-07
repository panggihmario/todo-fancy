<template>
        <v-toolbar >
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Welcome</v-toolbar-title>
            <v-spacer>ToDo Fancy</v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                
                <v-btn flat @click="openModal">Add Task</v-btn>
                <v-btn flat class="black--text" >Log Out</v-btn>
            </v-toolbar-items>
            </v-toolbar>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    methods :{
        ...mapActions([
            "openModal"
        ])
    }
}
</script>
