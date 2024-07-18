import WebLogin from "./components/auth/WebLogin.vue";
import LandingPage from "./components/header/LandingPage.vue";
import WebSignup from "./components/auth/WebSignup.vue";
import DetailPage from "./components/page/DetailPage.vue";
import ItemPage from "./components/page/ItemPage.vue";
import UserPage from "./components/user/UserPage.vue";
import DataCheckOut from "./components/BuyItem/DataCheckOut.vue";
import DataCart from "./components/cart/DataCart.vue";
import ItemFavorite from "./components/favorite/ItemFavorite.vue";
import DataHistory from "./components/BuyItem/DataHistory.vue";
import Cookies from "js-cookie"
import { store } from "./store/index"
export const routes = [{
        path: "/",
        name: "homepage",
        component: LandingPage,
        beforeEnter: () => { checkAuth(); },
    },
    {
        path: "/login",
        name: "login",
        component: WebLogin
    },
    {
        path: "/signup",
        name: "signup",
        component: WebSignup
    },
    {
        path: "/products/:id",
        name: "detailproduct",
        component: DetailPage,
        beforeEnter: (to, from, next) => { checkAuth() ? next() : next({ name: "login" }); },

    },
    {
        path: "/allitem",
        name: "allitem",
        component: ItemPage,
        beforeEnter: () => { checkAuth(); },
    },
    {
        path: "/user/:component",
        name: "userpage",
        component: UserPage,
        beforeEnter: () => { checkAuth(); },
    },
    {
        path: "/datacart",
        name: "datacart",
        component: DataCart,
        beforeEnter: () => { checkAuth(); },
    },
    {
        path: "/checkout",
        name: "checkout",
        component: DataCheckOut,
        beforeEnter: () => { checkAuth(); },
    },
    {
        path: "/history",
        name: "history",
        component: DataHistory,
        beforeEnter: () => { checkAuth(); },
    },
    {
        path: "/favorite",
        name: "favorite",
        component: ItemFavorite,
        beforeEnter: () => { checkAuth(); },

    }
];

const checkAuth = () => {
    const jwtCookie = Cookies.get("jwt");
    const expirationDate = Cookies.get("tokenExpirationDate");
    const userId = Cookies.get("UID");

    if (jwtCookie) {
        if (new Date().getTime() < +expirationDate) {
            store.commit("auth/setToken", { idToken: jwtCookie, expiresIn: expirationDate, });
            store.dispatch('auth/getUser', userId);
            return true;
        } else {
            store.commit("auth/setUserLogout");
            return false
        }
    } else {
        return false;
    }
}