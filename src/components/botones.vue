<template>
    <div class="buttons">
        <!-- 
        commit es para las mutaciones y dispatch para las acciones

        <button @click="$store.commit('decrement')">-</button>
        <button @click="$store.commit('increment')">+</button>-->

        <button @click="$store.dispatch('decrement')">-</button>
        <button @click="$store.dispatch('increment')">+</button>
    </div>
</template>

<script>
    export default {
        name: 'HomeView',
    }
</script>

<style>

</style>