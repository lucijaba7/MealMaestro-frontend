<template>
  <div class="recipes">
    <h1>Recipes</h1>
    <!-- pomocni botun za otvorit expanded meal card -->
    <v-btn
      rounded
      @click.stop="dialog = true"
      class="px-15 py-3 my-5 primary elevation-0"
      >Expanded meal card</v-btn
    >
    <ExpandedMealCard v-model="dialog" />
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
  </div>
</template>

<script>
import ExpandedMealCard from "@/components/Cards/ExpandedMealCard";
import RatingPopup from "@/components/Popups/RatingPopup";
import NewMealPopup from "@/components/Popups/NewMealPopup";
import CreateMealPopup from "@/components/Popups/CreateMealPopup";
import ExceptionPopup from "@/components/Popups/ExceptionPopup";

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
    ExpandedMealCard,
    NewMealPopup,
    CreateMealPopup,
    ExceptionPopup
  }
};
</script>
