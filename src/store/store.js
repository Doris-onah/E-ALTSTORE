import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      products: [],
      isLoggedIn: false,
    };
  },
  mutations: {
    products(state, payload) {
      state.products = payload;
    },
    login(state) {
      console.log("login");
      state.isLoggedIn = true;
    },
    logout(state) {
      console.log("logout");
      state.isLoggedIn = false;
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
    login({ commit }) {
      commit("login");
    },
    logout({ commit }) {
      commit("logout");
    }
  },
 
    getters: {
      products(state) {
        return state.products;
      },
      isLogged(state) {
        return state.isLoggedIn;
      },
  },
});

