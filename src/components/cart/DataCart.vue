<template>
    <logo-drop-down>
        <navigation></navigation>
    </logo-drop-down>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-sm-6">
                <div v-if="cartData.length === 0">
                    <empty-cart-page></empty-cart-page>
                </div>
                <div v-else>
                    <div class="mb-3" v-for="(cart, index) in cartData" :key="index">
                        <div class="d-flex">
                            <div class="me-3">
                                <img :src="cart.image" style="width:150px" />
                            </div>
                            <div class="align-content-center">
                                <p class="m-0">{{ cart.name }}</p>
                                <p>8/M</p>
                                <p>
                                    <b>Rp{{ cart.price }}</b>
                                </p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between ">
                            <div>
                                <base-button class="ms-4" style="color:red"
                                    @click="hapusItem(cart.id)"><b>Remove</b></base-button>
                            </div>
                            <div class="d-flex">
                                <base-button class="border" @click="kurang(cart.id)">-</base-button>
                                <base-button class="border">{{ cart.qty }}</base-button>
                                <base-button class="border" @click="tambah(cart.id)">+</base-button>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 class="mb-5 mt-5">Other Items</h4>
                <div class="row">
                    <div class="col-lg-3 col-sm-6" v-for="newitem in newProduct" :key="newitem">
                        <list-item :products_item="newitem"></list-item>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="px-3 py-3 border rounded">
                    <div class="px-2 pt-3 d-flex justify-content-between">
                        <h6>Order Summary</h6>
                        <h6 v-if="cartData.length === 0">Rp0</h6>
                        <h6 v-else>Rp{{ totalPrice }}</h6>
                    </div>
                    <div class="px-2 d-flex justify-content-between">
                        <p v-if="cartData.length === 0">0 items</p>
                        <p v-else>{{ cartData.length }}</p>
                        <p>Not includes shipping fee</p>
                    </div>
                    <hr />
                    <router-link to="/checkout" :class="[' btn btn-secondary', { 'disabled ': cartData.length === 0 }]" style="width: 100%"
                        @click="checkOutItem(cartData)">Checkout</router-link>
                </div>
            </div>
        </div>
    </div>
    <web-footer></web-footer>
</template>
<script setup>
import LogoDropDown from "../header/LogoDropDown.vue";
import Navigation from "../header/Navigation.vue";
import BaseButton from "../ui/BaseButton.vue";
import ListItem from "../item/ListItem.vue";
import WebFooter from "../footer/WebFooter.vue";
import EmptyCartPage from "../page/EmptyCartPage.vue";

import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

onMounted(async () => {
    await store.dispatch("product/getProductData");
    await store.dispatch("product/getProductDetail", route.params.id);
});
const productDetail = computed(() => {
    return store.state.product.productDetail;
});

const newProduct = computed(() => {
    return store.state.product.products.slice(10, 16);
});

const id = computed(() => {
    return route.params.id;
});

watch(id, async (newVal, oldVal) => {
    await store.dispatch("product/getProductDetail", route.params.id);
});

const cartData = computed(() => {
    console.log('isi cartItem:',store.state.cart.cartItem);
    return store.state.cart.cartItem;
});

const tambah = (id) => {
    store.dispatch('cart/plusQty', id)
}

const kurang = (id) => {
    store.dispatch('cart/minQty', id)
}

const hapusItem = (id) => {
    store.dispatch('cart/hapusItem', id)
}

const totalPrice = computed(() => {
    return store.state.cart.cartItem.reduce((a, b) => a + b.qty * b.price, 0)
})

const checkOutItem = (data) => {
    console.log('ini adalah data chekout',data)
    store.dispatch('checkout/addToCheckOut', data)
}

</script>