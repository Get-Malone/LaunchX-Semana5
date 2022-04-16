<template>
    <div>
        <h3>
            SELECCIONA UN PASTEL :)
        </h3>
        <div v-for="pastel in $store.getters.getPasteles" :key="pastel" class="lista">
            <input v-model="$store.state.saboresSeleccionados" :id="pastel.nombre" 
            :value="{nombre: pastel.nombre, precio: pastel.precio, stock:pastel.stock - 1}" type="checkbox" class="seleccionados">
            <label for="pastel.nombre">
                {{pastel.nombre}}
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