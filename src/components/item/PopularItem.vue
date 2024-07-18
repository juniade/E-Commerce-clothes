<template>
    <div class="row d-flex justify-content-center">
        <div class="col-lg-2 py-3 col-sm-6" v-for="(product, index) in displayedProducts" :key="index"
            style="width: 10rem;height:20rem">
            <list-item :products_item="product"></list-item>
        </div>
        <router-link to="/allitem" class="col-lg-2 py-3 col-sm-6 text-decoration-none" style="width: 10rem;">
            <div class="d-flex justify-content-center align-items-center" style=" background-color:#E3FEF7; height: 19rem;">
                <p class="fs-6 px-5" style=" color:#77B0AA;"><slot></slot></p>
            </div>
        </router-link>
    </div>
</template>
<script setup>
import ListItem from './ListItem.vue';
import { computed, onMounted, ref } from 'vue';
import { useStore } from "vuex";

const { display } = defineProps({
    display: String
})

const store = useStore();
const productListStatus = ref(false)
const productList = ref();


onMounted(async () => {
    try {
        await store.dispatch("product/getProductData")
        productListStatus.value = true
        productList.value = store.state.product.products
    } catch (err) {
        console.log(err)
    }
})

const displayedProducts = computed(() => {
    if (productListStatus.value && productList.value.length > 0) {
        if (display === "popular") {
            return productList.value.slice(0, 5);
        } else if (display === "newitem") {
            return productList.value.slice(5, 10);
        }
    }
})

</script>
