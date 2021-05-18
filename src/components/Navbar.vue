<template>
  <nav >    
    
   <v-app-bar  
     
      app
      flat
      max-height="60px"
      max-width="100px"
      >    
        <v-app-bar-nav-icon class="toolbar-icon" >
        <v-icon color="secondary">mdi-account-circle</v-icon>
        </v-app-bar-nav-icon>
         <v-app-bar-nav-icon class="toolbar-icon-settings">
        <v-icon color="secondary" >mdi-settings-helper</v-icon>
        </v-app-bar-nav-icon>
       <!-- <v-btn icon >
        <v-icon class="settings-icon" color="secondary">mdi-settings-helper</v-icon>
      </v-btn> -->
      </v-app-bar>

    <div class="ma-12 pa-12">
      <v-card>

      <v-navigation-drawer  class="secondary"  fixed  app 
        permanent
        expand-on-hover 
      >
        <v-list
          nav
          dense
        >
          <v-list-item class="navigation-items" v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-icon>
              <v-icon color="white">{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item>
          
        </v-list>
      </v-navigation-drawer>
      </v-card>
    </div>
  </nav>
  
</template>

<script>
export default {
    data() {
      return {
        links: [
          { icon: 'mdi-home', text: 'HOME', route: '/' },
          { icon: 'mdi-silverware-fork-knife', text: 'RECIPES', route: '/recipes' },
          { icon: 'mdi-fridge', text: 'FRIDGE', route: '/fridge' },
          { icon: 'mdi-cart', text: 'GROCHERY LIST', route: '/grocheryList' },
          { icon: 'mdi-feature-search', text: 'BROWSE', route: '/browse' },
        ],
        
      }
    }
}
</script>

<style scoped>
.navigation-items{
  margin-top: 25px;
  
}

.toolbar{
  /* position: absolute; */
  left: 800px;
  /* right: 40px; */
}

.toolbar-icon{
  /* right: 20px;
  left: 500px; */
  /* position: absolute; */
  /* position: relative; */
  margin-top: 30px;
  /* align-content: right; */
  
}

.toolbar-icon-settings{
  /* right: 20px;
  left: 500px; */
  /* position: absolute; */
  /* position: relative; */
  margin-top: 30px;
  padding-bottom: 20px;
}
</style>
