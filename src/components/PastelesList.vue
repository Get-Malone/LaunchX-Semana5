<template>
    <div>
        <li v-for="pastel in $store.getters.getPasteles" :key="pastel">
            {{pastel.nombre}}..........{{"$" + pastel.precio}}
        </li>
    </div>
</template>

<script>
    export default {
        name: 'HomeView',
    }
</script>

<style>

</style>