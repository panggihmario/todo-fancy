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
                  <v-text-field label="Task" required v-model="inputTask"></v-text-field>
                </v-flex>
                <v-flex xs12>
                   <div>
                    <v-layout row wrap>
                      <v-flex xs12 sm3>
                        <v-checkbox v-model="landscape" hide-details label="Landscape"></v-checkbox>
                      </v-flex>
                    </v-layout>
                  <v-date-picker v-model="inputDueDate" :landscape="landscape" :reactive="reactive"></v-date-picker>
                </div>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="addTask"     @click.native="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
    data(){
        return {
        landscape: false,
        reactive: false
        }
    },
    methods : {
      ...mapActions([
        "addTask"
      ])
    },
    computed : {
      ...mapState([
        "task" ,"duedate"
      ]),
       inputTask : {
      get(){
        return this.$store.state.task
      },
      set(value){
        this.$store.commit('setTask',value)
      }
    },
     inputDueDate : {
      get(){
        return this.$store.state.duedate
      },
      set(value){
        this.$store.commit('setDueDate',value)
      }
    },
        dialog :{
            get(){
                return this.$store.state.dialog
            },
            set(value){
                this.$store.commit('setDialog',false)
            }
        }
    }
}
</script>
