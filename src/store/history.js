export default {
    namespaced: true,
    state() {
        return {
            historyData: []
        }
    },
    mutations: {
        addItemToHistory(state, payload) {
            let item = []
            for (let key in payload) {
                item.push({...payload[key] })
            }
            state.historyData.push(item)

        },
    },
    getters: {},
    actions: {
        addToHistory({ commit }, payload) {
            commit('addItemToHistory', payload)
        },
    }
}