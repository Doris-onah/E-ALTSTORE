import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      products: [],
   
    };
  },
  mutations: {
    products(state, payload) {
      state.products = payload;
    },
   
  },
  actions: {
    setProducts({ commit }) {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          commit("products", data.products);
        });
      },
  


  },
 
    getters: {
      products(state) {
        return state.products;
      },
    
    
  },
});

