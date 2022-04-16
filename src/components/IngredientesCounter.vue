<template>
    <div>
    <h3>
        PEDIDOS
    </h3>
        <div v-for="ingrediente in $store.getters.getPedidosList" :key="ingrediente">
                    Cliente: {{ingrediente.nombre}}
                    Correo: {{ingrediente.email}}
            <div v-for="pedido in ingrediente.pedidos" :key="pedido">
                Producto: {{pedido.nombre}}
                Precio: {{pedido.precio}}
                Stock: {{pedido.stock}}
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutView',
    }
</script>

<style>

</style>