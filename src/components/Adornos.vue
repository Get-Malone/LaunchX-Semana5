<template>
    <div>
        <h3>
            SELECCIONA UN ADORNO :)
        </h3>
        <div v-for="adorno in $store.getters.getAdornos" :key="adorno" class="lista">
            <input v-model="$store.state.saboresSeleccionados" :id="adorno.nombre" 
            :value="{nombre: adorno.nombre, precio: adorno.precio, stock:adorno.stock -1}" type="checkbox" class="seleccionados">
            <label for="adorno.nombre">
                {{adorno.nombre}}
            </label>
        </div>
        <!--<div>
            {{$store.getters.getSaboresSeleccionados}}
        </div>-->
    </div>
</template>

<script>
    export default {
        name: 'HomeView',
    }
</script>

<style>

</style>