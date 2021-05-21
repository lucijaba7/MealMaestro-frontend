<template> <!-- trenutno je gore bijeli dio zbog floating nav, ali kad stavimo da se on vidi samo kad se ulogiras nece ga bit -->
    <v-container fluid fill-height justify-center class="secondary"> 
        <v-col align="center" xs="12" sm="6" md="4">
            <v-img
                src="../assets/LOGO-tocni.png"
                width="80%"
                height="80%"
                class="ml-4"
            ></v-img>
            <p class="text-h3 text-xs-h5 white--text pt-5">MealMaestro</p>
            <v-col xs="10" sm="6" md="7" lg="7">
                <v-btn block rounded class="px-15 py-3 mt-5 accent elevation-0" to="/login">Login</v-btn>
                <v-btn block rounded outlined color="primaryText" class="px-15 py-3 mt-5 white elevation-0" to="/registration">Signup</v-btn>
            </v-col>
        </v-col>
    </v-container>
</template>

<script>
export default {
   name: 'SplashScreen',
};
</script>

