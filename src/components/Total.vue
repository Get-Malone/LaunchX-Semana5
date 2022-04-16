<template>
    <div>
        <h3>
            TOTAL: {{"$" + $store.getters.getTotal}}
            <!--{{$store.state.saboresSeleccionados[1].precio}}-->
        </h3>
    </div>
</template>

<script>
    export default {
        name: 'HomeView',
    }
</script>

<style>

</style>