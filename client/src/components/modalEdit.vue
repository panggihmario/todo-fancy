<template>
     <v-layout row justify-center>
      <v-dialog v-model="dialogEdit" persistent max-width="500px">
       
        <v-card>
          <v-card-title>
            <span class="headline">Edit Task</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Task" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Password" type="password" required></v-text-field>
                </v-flex>
             
            
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialogEdit = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="dialogEdit = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    computed :{
        dialogEdit :{
            get(){
                return this.$store.state.dialogEdit
            },
            set(value){
                this.$store.commit('setDialogEdit',false)
            }
        }
    }
}
</script>
