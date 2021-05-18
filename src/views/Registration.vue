<template>
         <v-container fluid fill-height justify-center>
            <!-- <v-container align-center justify-center> -->
               <v-flex xs12 sm6 md4>
                  <v-card class="elevation-0 ">                     
                     <v-card-text class="py-2"> 
                         <v-row justify="center" >                          
                        <v-card-title class="justify-center">
                          <h2 class="justify-center">Registration</h2 >
                        </v-card-title>    
                         </v-row>  
                    <v-row justify="center">         
                    <v-col  cols="12" xs="4" sm="4" md="4"  flat>
                         <v-card                   
                        class="mx-auto"                   
                        flat                                                             
                        >
                    <v-card-actions xs3 md4 class="justify-center">                        
                        <div class="text-center pb-4">
                          <!-- <v-btn  rounded class="px-15 py-3 mt-5 " to="/"> -->
                            <v-img src="../assets/choose-avatar.png">
                                
                            </v-img>
                          <!-- </v-btn> -->
                        </div>
                     </v-card-actions>
                    <!-- <div class="text-center pb-4">
                    <v-btn  absolut depressed color="px-15 transparent align-center ma-10">
                      <v-img  class="mb-3"                
                        src="../assets/choose-avatar.png"
                        
                        />
                    </v-btn> 
                    </div> -->
                      </v-card >
                       <!-- <v-flex class="mb-4"> -->
                        <!-- <v-avatar size="96" class="mr-4">
                            <img :src="'/avatars/avatar_' + (form.avatar.toLowerCase()) + '.png'" alt="Avatar">
                        </v-avatar>
                        <v-btn @click="openAvatarPicker">Change Avatar</v-btn> -->
                    <!-- </v-flex>                      -->
                    </v-col>
                  </v-row>
                         <v-form>
                          <v-text-field                           
                              name="login"
                              label="Username"
                              type="text"
                           ></v-text-field>
                           <v-text-field                          
                              name="login"
                              label="First name"
                              type="text"
                           ></v-text-field>
                           <v-text-field                          
                              name="login"
                              label="Last name"
                              type="text"
                           ></v-text-field>
                           <v-text-field                           
                              name="login"
                              label="Email"
                              type="text"
                           ></v-text-field>
                           <v-text-field 
                              id="password"                              
                              name="password"
                              label="Password"
                              type="password"
                           ></v-text-field>
                            <v-text-field 
                              id="repPassword"                              
                              name="repeatPassword"
                              label="Repeat password"
                              type="password"
                           ></v-text-field>
                        </v-form>
                        <v-card-actions xs3 md4 class="justify-center">                        
                        <div class="text-center pb-4">
                          <v-btn  rounded class="px-15  green elevation-0" to="/">Next</v-btn>
                        </div>
                     </v-card-actions>
                     <v-layout row justify-center>
                     <v-flex xs6 md6 justify-center class="text-right ">
                       <p class="pt-5 ">Already have an account?</p>
                     </v-flex>
                     <v-flex xs4 md6 class="pt-5 white text-left ">
                       <v-btn small depressed color="transparent" class="white text-left "  to="/login">Sign in</v-btn>
                     </v-flex>
                     <v-flex xs12 md12 justify-center class="text-center ">
                       <p class="pt-5 text-center ">By continuing, you agree to MealMaestro <strong>Terms of Use</strong> and confirm that you have read its <strong>Privacy Policy</strong>.</p>
                     </v-flex>
                     </v-layout>
                     </v-card-text>                     
                  </v-card>
               </v-flex>
            </v-container>
</template>

<script>
import AvatarPicker from '../components/AvatarPicker.vue'

export default {
   name: 'Login',
//    components: { AvatarPicker },
   props: {
      source: String,
   },
//    methods: {
//             openAvatarPicker () {
//                 this.showAvatarPicker = true
//             },
//             selectAvatar (avatar) {
//                 this.form.avatar = avatar
//             }
//         }
};

</script>

<style>

</style>
