<template>
  <div class="recipes">
    <h1>Recipes</h1>
    <!-- pomocni botun za otvorit expanded meal card 
    <v-btn rounded @click.stop="dialog = true" class="px-15 py-3 my-5 primary elevation-0">Expanded meal card</v-btn>
    <ExpandedMealCard v-model="dialog" /> -->
    <!-- botun za otovrit ratings 
    <v-btn rounded @click.stop="dialog = true" class="px-15 py-3 my-5 primary elevation-0">Rating</v-btn>
    <RatingPopup v-model="dialog" /> -->
  </div>
</template>

<script>
import ExpandedMealCard from '@/components/ExpandedMealCard'
import RatingPopup from '@/components/RatingPopup'

export default {
  data () {
    return {
      dialog: false,
    }
  },
  components: { RatingPopup, ExpandedMealCard }
}
</script>