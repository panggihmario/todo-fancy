<template>
  
    <v-app id="inspire">
    <v-jumbotron :gradient="gradient" style="height:100vh">
      <v-container  >
        <h1>TODO-FANCY</h1>
          <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                  <v-card>
                    <v-container >
                        <form>
                            <v-layout row>
                        
                          </v-layout>
                          <v-layout row>
                            <v-flex xs12>
                              <v-text-field name ="email" label="email" v-model="inputEmail" type="name" >
                              </v-text-field>
                            </v-flex>
                          </v-layout>
                           <v-layout row>
                            <v-flex xs12>
                              <v-text-field  label="password"  v-model="inputPassword" type="password">
                              </v-text-field>
                            </v-flex>
                          </v-layout>
                              <a href="#" class="black--text" @click="moveToRegister"><p class="text-lg-right">Register</p></a>
                             
                                <v-layout row>
                               
                                <v-flex xs 12>
                                    <div>
                                   <v-btn outline color="indigo" @click="login">Login</v-btn>
                                </div>
                                
                                <div>
                                  <button type="submit" @click="loginFb">loginfb</button>
                                </div>
                                  </v-flex>
                                </v-layout>      
                        </form>
                    </v-container>
                  </v-card>
              </v-flex>
          </v-layout>
      </v-container>
  </v-jumbotron>
 </v-app>
</template>

<script>
import router from '../router'
import {mapActions,mapState} from 'vuex'
export default {
  data(){
    return {
      gradient : 'to right, #076585,#fff',
      errors : []
    }
  },
  methods : {
      moveToRegister(){
          router.push('/')
      },
      ...mapActions([
          "login","loginFb"
      ])
  },
   computed :{
    ...mapState([
      "password","email"
    ]),
      inputEmail : {
      get(){
        return this.$store.state.email
      },
      set(value){
        this.$store.commit('setEmail',value)
      }
    },
      inputPassword : {
      get(){
        return this.$store.state.password
      },
      set(value){
        this.$store.commit('setPassword',value)
      }
    }
  }
}
</script>




<style lang="scss" scoped>

.v-card {
    display: block;
    border-radius: 5px;
    width: 600px;
    margin : auto;
    margin-top : 150px;
    border: solid 2px;  
    min-width: 0;
    position: relative;
    text-decoration: none;
    -webkit-box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    box-shadow: 5px 5px;
.application--wrap {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 0px;
    max-width: 100%;
    position: relative;
}
}
</style>



