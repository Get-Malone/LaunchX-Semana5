<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--
    <counter/> 

    <cuadrado/>

    <botones/>
    -->

    <listaPasteles/>

    <listaAdornos/>

    <sabores/>

    <adornos/>

    <total/>

    <pedido/>

    <datosPasteleria/>
    
  </div>
</template>

<script>
/*import counter from '../components/counter.vue'
import cuadrado from '../components/cuadrado.vue'
import botones from '../components/botones.vue'*/
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import datosPasteleria from '../components/DatosPasteleria.vue'
import listaPasteles from '../components/PastelesList.vue'
import listaAdornos from '../components/MisAdornos.vue'
import sabores from '../components/Sabores.vue'
import adornos from '../components/Adornos.vue'
import pedido from '../components/Pedido.vue'
import total from '../components/Total.vue'

export default {
  name: 'HomeView',
  components: {
    datosPasteleria,
    listaPasteles,
    listaAdornos,
    sabores,
    adornos,
    total,
    pedido,
  }
  /*components: {
    HelloWorld
  }
  data() {
    return {counter: 0}
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  }
  components: {
    /*counter,
    cuadrado,
    botones,
    datosPasteleria,
  }*/
}
</script>

html{
  box-sizing: border-box;
}

<style>
body{
  padding: 0;
  margin: 0;
  font-family: var(--sans);
  background-image: url("https://pasteleriaalcazar.mx/wp-content/uploads/2021/06/pastel_productos.jpg");
  background-color: var(--black);
  color: var(--white);
  font-size: var(--font-size);
}

:root {
  --black: #171321;
  --dkblue: #0d314b;
  --plum: #4b0d49;
  --hotmag: #ff17e4;
  --magenta: #e310cb;
  --aqua: #86fbfb;
  --white: #f7f8fa;
  --font-size: 1.3rem;
  --mono: "Oxygen mono", monospace;
  --sans: Oxygen, sans-serif;
  --transparent: rgba(0,0,0,0);
  }

*,
*::before,
*::after {
    box-sizing: inherit;
}
div{
  padding-left: 20px; 
  text-align: left;
  color: var(--dkblue);
}

form{
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 80%;
  height: 100%;
  background-color: var(--transparent);
  padding: 10px;
  border-radius: 10px;
}

</style>