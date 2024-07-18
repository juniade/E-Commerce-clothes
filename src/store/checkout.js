export default {
    namespaced: true,
    state() {
        return {
            checkOutItem: []
        }
    },
    mutations: {
        addItemToCheckOut(state, payload) {
            if (!Array.isArray(payload)) {
                payload = [payload]; // Convert single object to array
            }
            for (let data of payload) {
                let found = false;
                for (let item of state.checkOutItem) {
                    if (data.id === item.id) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    state.checkOutItem.push(data);
                }
            }
        },
        clearCheckOutList(state) {
            state.checkOutItem = [];
        }
    },
    getters: {},
    actions: {
        addToCheckOut({ commit }, payload) {
            commit('addItemToCheckOut', payload)
        },
        removeAll({ commit }, payload) {
            commit("clearCheckOutList", payload)
        }
    }
}