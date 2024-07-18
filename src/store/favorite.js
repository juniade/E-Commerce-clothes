export default {
    namespaced: true,
    state() {
        return {
            dataFavorite: []
        }
    },
    mutations: {
        addItemToFavorite(state, payload) {
            const existingItem = state.dataFavorite.find(item => item.id === payload.id)
            if (!existingItem) {
                state.dataFavorite.push(payload)
            }
        },
        removeItemFromFavorite(state, payload) {
            state.dataFavorite = state.dataFavorite.filter(item => item.id !== payload.id)
        }
    },
    actions: {
        itemFavorite({ commit }, payload) {
            commit('addItemToFavorite', payload)
        },
        removeFavorite({ commit }, payload) {
            commit('removeItemFromFavorite', payload)
        }
    }
}