<template>
     <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
       
        <v-card>
          <v-card-title>
            <span class="headline">Add Task</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Task" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                   <div>
      <v-layout row wrap>
        <v-flex xs12 sm3>
          <v-checkbox v-model="landscape" hide-details label="Landscape"></v-checkbox>
        </v-flex>
        <v-flex xs12 sm3>
          <v-checkbox v-model="reactive" hide-details label="Reactive"></v-checkbox>
        </v-flex>
      </v-layout>
  
      <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
    </div>
                  
                </v-flex>
              
              
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    computed :{
        dialog :{
            get(){
                return this.$store.state.dialog
            },
            set(value){
                this.$store.commit('setDialog',false)
            }
        }
    },
    data(){
        return {
        picker: null,
        landscape: false,
        reactive: false
        }
    }
}
</script>
