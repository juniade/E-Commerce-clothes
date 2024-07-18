import { createStore } from "vuex"
import product from "./product"
import auth from "./auth"
import cart from "./cart"
import checkout from "./checkout"
import favorite from "./favorite"
import history from "./history"


export const store = createStore({
    modules: {
        product,
        favorite,
        auth,
        cart,
        checkout,
        history,

    }
})