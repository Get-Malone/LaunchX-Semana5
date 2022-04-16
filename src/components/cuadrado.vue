<template>
    <div class="cuadrado">
        {{$store.state.counter}} <sup>2</sup> = {{$store.getters.square}}
    </div>
</template>

<script>
    export default {
        name: 'HomeView',
    }
</script>

<style>

</style>