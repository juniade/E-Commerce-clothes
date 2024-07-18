<template>
    <logo-drop-down></logo-drop-down>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-sm-6">
                <!-- penambahan tanda ? artinya null check operator, 
                jadi ketika data nilainya null, maka dia akan di skip dan melanjutkan proses selanjutnya -->
                <div class="d-flex justify-content-center">
                    <img :src="productDetail?.image" class="img-fluid mb-sm-1" style="width:80%;">
                </div>
                <h4 class=" mt-5 mb-5">Other Items</h4>
                <div class="row">
                    <div class="col-lg-3 col-sm-6 d-flex justify-content-center" v-for="newitem in newProduct"
                        :key="newitem">
                        <div> <list-item :products_item="newitem"></list-item></div>   
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="px-4  border border-black">
                    <div class=" d-flex justify-content-between pt-3">
                        <h4>{{ productDetail?.price }}</h4>
                        <i class="fas fa-heart"></i>
                    </div>
                    <p>{{ productDetail?.name }}</p>
                    <div class="d-flex">
                        <p class="me-2">8M </p>
                        <p class="me-2">Very Good</p>
                        <p> Denpasar</p>
                    </div>
                    <hr class="mt-0">
                    <p><b>Item Description</b></p>
                    <P>{{ productDetail?.description }}</p>
                    <div>
                        <div class="d-flex justify-content-between">
                            <p>Category</p>
                            <p> {{ productDetail?.category }}</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p>Size</p>
                            <p>{{ productDetail?.size }}</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p>Condition</p>
                            <p>Very Good</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p>Color</p>
                            <p> {{ productDetail?.color }}</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p>Uploaded</p>
                            <p>5 hours ago</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p>Shipping</p>
                            <p>{{ productDetail?.shipping }}</p>
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <router-link to="/datacart"  @click="addCartData(productDetail)" class="btn btn-primary" type="button">Buy Now</router-link>
                        <modal-cart @push="choosePage" @addItem="addCartData(productDetail)" :data="productDetail?.name"></modal-cart>
                    </div>
                    <div class=" pb-3 mt-3 d-flex">
                        <div class="me-2 align-content-center">
                            <img src="https://i.pinimg.com/736x/7b/94/3f/7b943f0ae3902473c07b3b05a6ee8778.jpg"
                                class="rounded-circle" style="width:50px;height:50px">
                        </div>
                        <div>
                            <p class="m-0"><b>Jack on the corner</b></p>
                            <div class="d-flex p-0 m-0">
                                <i class="fa-solid fa-star" style="color:yellow" v-for=" index in 5" :key="index"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <web-footer></web-footer>
</template>

<script setup>
import LogoDropDown from "../header/LogoDropDown.vue";
import BaseButton from "../ui/BaseButton.vue";
import WebFooter from "../footer/WebFooter.vue";
import ListItem from "../item/ListItem.vue";
import ModalCart from "../modal/ModalCart.vue";


import { computed, onMounted, watch } from "vue"
import { useStore } from "vuex"
import { useRoute, useRouter } from "vue-router"
const store = useStore()
const route = useRoute()
const router = useRouter()


onMounted(async () => {
    await store.dispatch("product/getProductData")
    await store.dispatch("product/getProductDetail", route.params.id)

})
const productDetail = computed(() => {
    return store.state.product.productDetail
})

const newProduct = computed(() => {
    return store.state.product.products.slice(10, 16)
})

const id = computed(() => {
    return route.params.id
})

watch(id, async (newVal, oldVal) => {
    await store.dispatch("product/getProductDetail", route.params.id)
})

const addCartData = (data) => {
    store.dispatch('cart/addToCart', data)
}

const choosePage = (data) => {
    if (data === 'shooping') {
        router.push("/allitem")
    } else {
        router.push('/datacart')
    }
}

const checkOutItem = (data) => {
    store.dispatch('checkout/addToCheckOut', data)
}
</script>