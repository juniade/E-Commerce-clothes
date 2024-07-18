<template>
    <div class="border rounded-3 pb-3">
        <div class="p-3">
            <p>My Order</p>
            <div class="p-3 border rounded-3 mb-4" v-for="(subArray, index) in data" :key="index">
                <div class="d-flex">
                    <div class="me-2"><i class="fa-solid fa-cart-shopping"></i></div>
                    <div>
                        <p class="me-2">Shooping</p>
                    </div>
                    <div>
                        <p class="px-2 border rounded rounded-pill" style="color:green">Done</p>
                    </div>
                </div>
                <div v-for="(item, idx) in subArray" :key="idx">
                    <div>
                        <div v-if="idx == 0">
                            <div class="row">
                                <div class="col-lg-3"><img :src="item.image" style="width:150px"></div>
                                <div class="col-lg-6">
                                    <p><b>{{ item.name }}-{{ item.color }}</b></p>
                                    <p>{{ item.qty }} product x {{ item.price }}</p>
                                </div>
                                <div class="col-lg-3">
                                    <p><b>Total Price</b></p>
                                    <p>{{ item.qty * item.price }}</p>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="idx === subArray.length - 1">+{{ idx }} items</div>
                    </div>
                </div>
                <hr>
                <div class="d-flex justify-content-end">
                    <router-link to="/allitem" class=" btn btn-success">Buy Again</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
     data:Array
})


</script>