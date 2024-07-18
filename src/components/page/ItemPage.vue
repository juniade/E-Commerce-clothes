<template>
    <!-- jalankan emit searhItem yang telah dibuat dari Navigation.vue 
    lalu jalankan fungsi cariHuruf.inget emait serachItem ini akan berisikan data $event 
    yang dimana data $event ini di dapat dari emit search -->
    <logo-drop-down>
        <navigation @searchItem="cariHuruf"></navigation>
    </logo-drop-down>
    <div class="container">
        <h4>Items</h4>
        <div class="row">
            <template v-if="filteredList.length != 0">
                <div class="col-lg-2 col-sm-6" v-for="item in filteredList" :key="item">
                    <list-item :products_item="item"></list-item>
                </div>
            </template>
            <template v-else>
                <div class="mx-auto d-flex justify-content-center  mb-3">
                    <img src="../../assets/empty.png">
                </div>
            </template>
        </div>
    </div>
    <web-footer></web-footer>
</template>
<script setup>
import LogoDropDown from '../header/LogoDropDown.vue';
import WebFooter from '../footer/WebFooter.vue';
import ListItem from '../item/ListItem.vue';
import Navigation from '../header/Navigation.vue';


import { ref, computed, onMounted } from "vue"
import { useStore } from "vuex"


const store = useStore()

onMounted(async () => {
    await store.dispatch("product/getProductData")
})

const allProduct = computed(() => {
    return store.state.product.products
})

const nilai = ref('')
// inisalisasi var nilai dengan data yang diperoleh dari emit serachItem
// input merupakan variabel yang beriskan data yang diperoleh dari emit serachItem
function cariHuruf(input) {
    nilai.value = input.trim()
}
// fungsi search
const filteredList = computed(() => {
    return allProduct.value.filter((item) =>
        item.name.toLowerCase().includes(nilai.value.toLowerCase())
    );
})
</script>