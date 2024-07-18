<template>
    <router-link :to="'/products/' + products_item.id" class="product-link">
        <img class="card-img-top" :src="products_item.image" alt="... " style="height:50%">
        <div class='mt-1'>
            <h5>{{ products_item.price }}</h5>
            <p style="height:60px" class="card-text">{{ products_item.name }}</p>
        </div>
    </router-link>
    <div class=" d-flex justify-content-between">
        <h6>8/M
        </h6>
        <h6 @click="isClick(products_item)" :style="{ color:products_item.isFavorite ? 'red' : 'black' }">
            <i class="fas fa-heart"></i> 12
        </h6>
    </div>
</template>
<script setup>
import { ref } from "vue"
import { useStore } from "vuex";

const store=useStore()
defineProps({
    products_item: Object
})

const isClick = (data) => {
    data.isFavorite =!data.isFavorite
    if(data.isFavorite){
        store.dispatch('favorite/itemFavorite',{...data})
    }else{
        store.dispatch('favorite/removeFavorite',{...data})
    }
}
</script>

<style scoped>
.product-link {
    text-decoration: none;
    color: black
}
</style>