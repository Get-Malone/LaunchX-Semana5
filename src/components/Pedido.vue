<template>
    <div>
        <form class="pedido" @submit.prevent="$store.commit('addPedido')">
                <input v-model="$store.state.newNombre" type="text" placeholder="Nombre" required>
                <input v-model="$store.state.newEmail" type="email" id="mail" placeholder="Correo electronico">
                <textarea v-model="$store.getters.getProductos" readonly></textarea>
                <button type="submit">
                    PEDIR AHORA
                </button>
        </form>
        <!--<div>
            {{$store.getters.getPedidosList}}
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