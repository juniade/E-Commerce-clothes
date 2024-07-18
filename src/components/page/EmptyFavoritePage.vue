<template>
    <div class="d-flex justify-content-between">
        <h5>Favorite Item</h5>
        <p>You don't have any favorite item yet</p>
    </div>
    <div class="d-flex justify-content-center pt-5">
        <div>
            <img src="../../assets/cart.png" />
        </div>
    </div>
    <div class="d-flex justify-content-center mt-3">
        <div class="text-center pb-5">
            <h4>No favorite items yet</h4>
            <p class="px-5">When add item to favorite, the item will appear on favorite list</p>
            <router-link to="/allitem" class=" btn btn-success mt-3">Find Products</router-link>
        </div>
    </div>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue';
</script>