<template>
   <v-app id="inspire">
      <v-main>
         <v-container fluid fill-height justify-center>
            <!-- <v-container align-center justify-center> -->
               <v-flex xs12 sm6 md4>
                  <v-card class="elevation-0 ">                     
                     <v-card-text class="py-2">
                        <v-row justify="center" xs6>                   
                    <v-col cols="12" md="8"  flat>
                       <v-card                   
                        class="mx-auto"                   
                         
                        flat                                       
                        >
                      <v-img justify-center xs6                   
                        src="../assets/LOGO-tocni.png"
                        />
                      </v-card >                      
                    </v-col>
                  </v-row>
                        <v-card-title class="justify-center">
                          <h2 class="py-5 justify-center">Sign in</h2 >
                        </v-card-title>
                        <v-form>
                           <v-text-field class="py-3"                          
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
                        </v-form>
                        <v-card-actions class="justify-center">
                        <v-spacer></v-spacer>
                        <div class="text-center pb-8">
                          <v-btn  rounded class="px-15 py-3 mt-5 green elevation-0" to="/">Login</v-btn>
                        </div>
                     </v-card-actions>
                     <v-layout row>
                     <v-flex xs12 md6 justify-center>
                       <p class="pt-5 px-2 justify-center" justify-center>New to MealMaestro?</p>
                     </v-flex>
                     <v-flex xs12 md6>
                       <v-btn depressed  class="pt-7 transparent "  to="/registration">Create account</v-btn>
                     </v-flex>
                     </v-layout>
                     </v-card-text>
                     
                  </v-card>
               </v-flex>
            </v-container>
      </v-main>
   </v-app>
</template>

<script>
export default {
   name: 'Login',
   props: {
      source: String,
   },
};
</script>

<style>

</style>
