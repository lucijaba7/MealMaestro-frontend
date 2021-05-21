<template>

    <v-dialog max-width="600px">        
                     <template v-slot:activator="{ on }">
                        <v-btn icon x-small v-on="on" class="ma-10">
                           <v-avatar size="100">
                              <img src="../assets/choose-avatar.png" contain position alt="Avatar">
                           </v-avatar>
                        </v-btn>
                     </template>
                     <v-card class="text-center">
                        <v-list-item-content class="justify-center">
                           <div class="mx-auto text-center">
                           </div>
                        </v-list-item-content>
                     </v-card>                    
    </v-dialog>
</template>

<script>


export default {
   
}
</script>
