import { createStore } from 'vuex'

export default createStore({
  state: {
    /*counter: 0,*/
    pasteles: [
      { id: 1, nombre: 'Pastel de Fresa', precio: 10.00, stock: 10, imagen: 'https://www.recetasdecocina.com/wp-content/uploads/2018/10/pastel-de-fresa-1.jpg' },
      { id: 2, nombre: 'Pastel de Chocolate', precio: 10.00, stock: 10, imagen: 'https://www.recetasdecocina.com/wp-content/uploads/2018/10/pastel-de-chocolate-1.jpg' },
      { id: 3, nombre: 'Pastel de Dulce de Leche', precio: 10.00, stock: 10, imagen: 'https://www.recetasdecocina.com/wp-content/uploads/2018/10/pastel-de-dulce-de-leche-1.jpg' },
      { id: 4, nombre: 'Pastel de tres leches', precio: 10.00, stock: 10, imagen: 'https://www.recetasdecocina.com/wp-content/uploads/2018/10/pastel-de-dulce-de-leche-1.jpg' },
    ],
    adornos: [
      { id: 1, nombre: 'Adorno de Fresa', precio: 10.00, stock: 10, imagen: 'https://www.recetasdecocina.com/wp-content/uploads/2018/10/pastel-de-fresa-1.jpg' },
      { id: 2, nombre: 'Adorno de Chocolate', precio: 10.00, stock: 10, imagen: 'https://www.recetasdecocina.com/wp-content/uploads/2018/10/pastel-de-chocolate-1.jpg' },
      { id: 3, nombre: 'Adorno de Dulce de Leche', precio: 10.00, stock: 10, imagen: 'https://www.recetasdecocina.com/wp-content/uploads/2018/10/pastel-de-dulce-de-leche-1.jpg' },
      { id: 4, nombre: 'Adorno de tres leches', precio: 10.00, stock: 10, imagen: 'https://www.recetasdecocina.com/wp-content/uploads/2018/10/pastel-de-dulce-de-leche-1.jpg' },
    ],
    saboresSeleccionados: [
      {nombre:'Producto', precio:0, stock: 10,}
    ],
    adornosSeleccionados: [],
    total: 0,
    newNombre: '',
    newEmail: '',
    pedidosList: [],
  },
  getters: {
    //recuperar datos que tenemos en el state
    /*square(state) {
      return state.counter * state.counter;
    },
    */
    //recuperar datos que tenemos en el state
    getPasteles(state) {
      console.log(state.saboresSeleccionados);
      return state.pasteles;
    },
    //recuperar datos que tenemos en el state
    getAdornos(state) {
      return state.adornos;
    },
    //recuperar datos que tenemos en el state
    getSaboresSeleccionados(state) {
      return state.saboresSeleccionados;
    },
    //recuperar datos que tenemos en el state
    getAdornosSeleccionados(state) {
      return state.adornosSeleccionados;
    },
    //recuperar datos que tenemos en el state
    getTotal(state) {
      const longitud = state.saboresSeleccionados.length;
      let total = 0;
      for (let i = 0; i < longitud; i++) {
        total += state.saboresSeleccionados[i].precio;
      }
      return total;
    },
    getProductos(state) {
      const longitud = state.saboresSeleccionados.length;
      let productos = [];
      for (let i = 0; i < longitud; i++) {
        productos.push(state.saboresSeleccionados[i].nombre);
      }
      return productos;
    },
    getPedidosList(state) {
      return state.pedidosList;
    },
  },
  mutations: {
    addPedido(state) {
      const longitud = state.saboresSeleccionados.length;
      let addedPedidos = {
        nombre: state.newNombre,
        email: state.newEmail,
        pedidos: state.saboresSeleccionados,
      }
      for (let j = 0; j < longitud; j++) {
        state.pasteles.find((o, i) => {
          if (o.nombre === state.saboresSeleccionados[j].nombre) {
              state.pasteles[i] = { id: state.pasteles[i].id, nombre: state.pasteles[i].nombre, 
              precio: state.pasteles[i].precio, stock: state.pasteles[i].stock - 1,
              imagen: state.pasteles[i].imagen }; 
              // stop searching
          }
        });
        state.adornos.find((o, i) => {
          if (o.nombre === state.saboresSeleccionados[j].nombre) {
              state.adornos[i] = { id: state.adornos[i].id, nombre: state.adornos[i].nombre, 
              precio: state.adornos[i].precio, stock: state.adornos[i].stock - 1,
              imagen: state.adornos[i].imagen }; 
              // stop searching
          }
        });
      }
      console.log(state.pedidosList);
      state.pedidosList.push(addedPedidos);
      state.newNombre = '';
      state.newEmail = '';
      state.saboresSeleccionados = [];
    },
    //mutations con commit y actions con dispatch
    /*increment (state, random) {
      state.counter += random
    },
    decrement (state, random) {
      state.counter -= random
    },*/
    /*sumaTotal(state) {
      const longitud = state.saboresSeleccionados.length;
      let total = 0;
      for (let i = 0; i < longitud; i++) {
        total += state.saboresSeleccionados[i].precio;
      }
      return total;
    },*/
  },
  actions: {
    //a diferencia de las mutaciones aqui se puede consultar codigo asincrono
    //https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new
    /*async increment ( { commit } ) {
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit('increment', results);
    },
    async decrement ( { commit } ) {
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit('decrement', results);
    },*/
    //mutations con commit y actions con dispatch
  },
  modules: {
  },
})
