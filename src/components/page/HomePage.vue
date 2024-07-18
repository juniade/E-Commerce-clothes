<template>
    <main>
        <div class="bck">
            <div class="container align-content-center" style="height:100%">
                <div class="rounded align-content-center" style="width:300px; height:40%; background-color:white;">
                    <div class="px-4">
                        <h3 class="mb-4">Ready to declutter you closet?</h3>
                        <router-link to="/login" class=" d-grid col-12 btn btn-primary">Shop Now</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-4">
            <h4>Popular Items</h4>
            <popular-item display="popular">See All Popular Item</popular-item>
            <h4 class="pt-4">Shop by Brands</h4>
            <div>
                <base-button class="btn-outline-secondary me-2 mb-sm-2" style="color:black;" v-for="button in brands"
                    :key="button">{{ button }}</base-button>
            </div>
            <h4 class="pt-4">New Product</h4>
            <popular-item display="newitem">See All New Product</popular-item>
        </div>
    </main>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue';
import PopularItem from '../item/PopularItem.vue';

const brands = ["Vans", "Bohoo", "Mango", "Reebok", "Converse", "Sando", "Nike", "Adidas", "Dior", "Puma", "Zara", "Bershaka", "American Eagle"]
</script>

<style scoped>
main {
    height: 100%;
}

.bck {
    background-image: url("../../assets/bck.png");
    width: 100%;
    height:100vh
}
</style>