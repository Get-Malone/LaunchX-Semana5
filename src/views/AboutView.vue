<template>
  <div class="about" @click="submit.prevent">
    <IngredientesCounter/>

  </div>
</template>

<script>
import IngredientesCounter from "@/components/IngredientesCounter.vue"
    export default {
      name: 'AboutView',
      components: {
        IngredientesCounter
      }
    }
</script>

<style>

</style>