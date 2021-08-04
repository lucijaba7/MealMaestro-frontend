<template>
  <v-container fluid>
    <!-- <div class="recipes"> -->
    <p class="text-h3 mt-5 mb-1">Recipes</p>
    <v-row>
      <v-col>
        <p class="text-justify text-wrap">
          This is a collection of your recipes. Go and <br />
          write a new one to enrich your collection!
        </p>
      </v-col>
    </v-row>
    <v-row> <YourRecipesCard /></v-row>

    <v-row> <SavedRecipesCard /></v-row>

    <!-- BOTUNIIIIIII -->

    <!-- pomocni botun za otvorit expanded meal card -->
    <v-btn
      rounded
      @click.stop="dialog = true"
      class="px-15 py-3 my-5 primary elevation-0"
      >Expanded meal card</v-btn
    >
    <ExpandedMealPopup v-model="dialog" />
    <!-- botun za otovrit ratings -->
    <v-btn
      rounded
      @click.stop="dialog1 = true"
      class="px-15 py-3 my-5 primary elevation-0"
      >Rating</v-btn
    >
    <RatingPopup v-model="dialog1" />
    <!-- botun za otvorit new meal popup -->
    <v-btn
      rounded
      @click.stop="dialog2 = true"
      class="px-15 py-3 my-5 primary elevation-0"
      >New meal</v-btn
    >
    <NewMealPopup v-model="dialog2" />

    <!-- botun za otvorit create meal -->
    <v-btn
      rounded
      @click.stop="dialog3 = true"
      class="px-15 py-3 my-5 primary elevation-0"
      >Create meal</v-btn
    >
    <CreateMealPopup v-model="dialog3" />

    <!-- botun za otvorit exception -->
    <v-btn
      rounded
      @click.stop="dialog4 = true"
      class="px-15 py-3 my-5 primary elevation-0"
      >Create exception</v-btn
    >
    <ExceptionPopup v-model="dialog4" />
    <!-- </div> -->
  </v-container>
</template>

<script>
import ExpandedMealPopup from "@/components/Popups/ExpandedMealPopup";
import RatingPopup from "@/components/Popups/RatingPopup";
import NewMealPopup from "@/components/Popups/NewMealPopup";
import CreateMealPopup from "@/components/Popups/CreateMealPopup";
import ExceptionPopup from "@/components/Popups/ExceptionPopup";
import YourRecipesCard from "@/components/Cards/YourRecipesCard";
import SavedRecipesCard from "@/components/Cards/SavedRecipesCard";

export default {
  data() {
    return {
      dialog: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false
    };
  },
  components: {
    RatingPopup,
    ExpandedMealPopup,
    NewMealPopup,
    CreateMealPopup,
    ExceptionPopup,
    YourRecipesCard,
    SavedRecipesCard
  }
};
</script>
