<template>
    <div v-if="dataHistory.length === 0">
        <div class="border rounded-3 pb-3" style="background-color:azure">
            <div class="p-3">
                <p>My Order</p>
                <div class=" d-flex justify-content-center">
                    <img src="../../assets/NoHistory.png">
                </div>
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <h3>No orders yet</h3>
                        <p class="px-5">When you buy an item, your order about it will appear here</p>
                        <router-link to="/allitem" class=" btn btn-success">Shop now</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <data-history :data="dataHistory"></data-history>
    </div>

</template>
<script setup>
import DataHistory from '../BuyItem/DataHistory.vue';

import { useStore } from 'vuex';
import { computed } from 'vue';


const store = useStore()

const dataHistory = computed(() => {
    console.log('data history:', store.state.history.historyData)
    return store.state.history.historyData
})
</script>