<template>
  <div class="recipes">
    <h1>Recipes</h1>
    <!-- pomocni botun za otvorit expanded meal card -->
    <v-btn rounded @click.stop="dialog = true" class="px-15 py-3 my-5 primary elevation-0">Expanded meal card</v-btn>
    <ExpandedMealCard v-model="dialog" /> 
    <!-- botun za otovrit ratings -->
    <v-btn rounded @click.stop="dialog1 = true" class="px-15 py-3 my-5 primary elevation-0">Rating</v-btn>
    <RatingPopup v-model="dialog1" /> 
    <!-- botun za otvorit new meal popup -->
    <v-btn rounded @click.stop="dialog2 = true" class="px-15 py-3 my-5 primary elevation-0">New meal</v-btn>
    <NewMealPopup v-model="dialog2" /> 
  </div>
</template>

<script>
import ExpandedMealCard from '@/components/ExpandedMealCard'
import RatingPopup from '@/components/RatingPopup'
import NewMealPopup from '@/components/NewMealPopup'

export default {
  data () {
    return {
      dialog: false,
      dialog1: false,
      dialog2: false,
    }
  },
  components: { RatingPopup, ExpandedMealCard, NewMealPopup }
}
</script>