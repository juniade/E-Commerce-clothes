<template>
    <div class="col-lg-2 col-md-12">
        <div class="d-flex justify-content-start align-items-center">
            <div class="me-3">
                <router-link to="/datacart"><i class="fa-solid fa-cart-shopping fs-5" style="color:#73A9AD"><span class="fs-6 border border-2 rounded-circle  " style="color:black;">{{ cartData.length }}</span></i></router-link>
            </div>
            <div class="me-3">
                <router-link to="/favorite"><i class="fa-regular fa-heart fs-5" style="color:#73A9AD"><span class="fs-6 border border-2 rounded-circle  " style="color:black;">{{ favorite.length }}</span></i></router-link>
            </div>
            <login-drop-down></login-drop-down>
        </div>
    </div>
</template>
<script setup>
import LoginDropDown from './LoginDropDown.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store=useStore()

const cartData = computed(() => {
    console.log(store.state.cart.cartItem);
    return store.state.cart.cartItem;
});

const favorite=computed(()=>{
    return store.state.favorite.dataFavorite
})
</script>
