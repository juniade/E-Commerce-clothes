<template>
    <logo-drop-down>
        <navigation></navigation>
    </logo-drop-down>
    <div class="container">
        <div class="row">
            <div v-if="dataFavorite.length === 0">
                <div class="col-12">
                    <empty-favorite-page></empty-favorite-page>
                </div>
            </div>
            <div v-else>
                <h5>Favorite Items</h5>
                <div class="row">
                    <div class="col-lg-2 col-sm-6" v-for="item in dataFavorite" :key="item">
                        <list-item :products_item="item"></list-item>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <web-footer></web-footer>
</template>
<script setup>
import LogoDropDown from '../header/LogoDropDown.vue';
import Navigation from '../header/Navigation.vue';
import WebFooter from '../footer/WebFooter.vue';
import ListItem from '../item/ListItem.vue';
import { useStore } from 'vuex';
import { computed } from "vue"
import EmptyFavoritePage from '../page/EmptyFavoritePage.vue';

const store = useStore()

const dataFavorite = computed(() => {
    console.log("ini favorite:", store.state.favorite.dataFavorite)
    return store.state.favorite.dataFavorite
})
</script>