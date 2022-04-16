<template>
    <div>
        <li v-for="adorno in $store.getters.getAdornos" :key="adorno">
            {{adorno.nombre}}..........{{"$" + adorno.precio}}
        </li>
    </div>
</template>

<script>
    export default {
        name: 'HomeView',
    }
</script>

<style lang="scss" scoped>

</style>