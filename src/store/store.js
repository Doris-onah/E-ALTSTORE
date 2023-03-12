
import {createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            product: []
        }
    }
    ,
    mutations: {
        setProduct(state, payload) {
            state.product = payload
        }
    },
    actions: {
        async fetchProduct({ commit }) {
            const res = await fetch('https://fakestoreapi.com/products')
            const product = await res.json()
            commit('setProduct', product)
        }
    },
    getters: {
        product(state) {
            return state.product
        }
    }
})