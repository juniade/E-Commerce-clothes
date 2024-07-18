export default {
    namespaced: true,
    state() {
        return {
            cartItem: []
        }
    },
    mutations: {
        addItemToCart(state, payload) {
            const existingItem = state.cartItem.find(item => item.id === payload.id)
            if (existingItem) {
                existingItem.qty++
            } else {
                state.cartItem.push({...payload, qty: 1 })
            }
        },
        addQty(state, id) {
            const currentItem = state.cartItem.find(item => item.id === id)
            currentItem.qty++
        },
        reduceQty(state, id) {
            const currentItem = state.cartItem.find(item => item.id === id)
            if (currentItem.qty > 1) {
                currentItem.qty--
            } else {
                state.cartItem = state.cartItem.filter(item => item.id !== id)
            }

        },
        removeQty(state, id) {
            state.cartItem = state.cartItem.filter(item => item.id !== id)
        },
        clearCartList(state) {
            state.cartItem = [];
        }
    },
    getters: {},
    actions: {
        addToCart({ commit }, payload) {
            commit('addItemToCart', payload)
        },
        plusQty({ commit }, id) {
            commit('addQty', id)
        },
        minQty({ commit }, id) {
            commit('reduceQty', id)
        },
        hapusItem({ commit }, id) {
            commit('removeQty', id)
        },
        removeAllCart({ commit }, payload) {
            commit("clearCartList", payload)
        }
    }
}