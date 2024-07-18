<template>
    <logo-drop-down>
        <navigation></navigation>
    </logo-drop-down>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-sm-6">
                    <div>
                        <p>Order</p>
                        <div class="mb-3" v-for="(checkout, index) in dataCheck" :key="index">
                            <div class="d-flex">
                                <div class="me-3">
                                    <img :src="checkout.image" style="width:150px" />
                                </div>
                                <div class="align-content-center">
                                    <p class="m-0">{{ checkout.name }}</p>
                                    <p>8/M</p>
                                    <div class="d-flex">
                                        <div class="me-3">
                                            <p>
                                                <b>Rp{{ checkout.price }}</b>
                                            </p>
                                        </div>
                                        <div>
                                            <p>x{{ checkout.qty }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 my-3 rounded-2" style="background-color:aliceblue">
                        <p>Address</p>
                        <div class="d-flex align-content-center p-3 border border-1">
                            <div class="me-3 fs-1"><i class="fa-solid fa-location-dot"></i></div>
                            <div>
                                <h6>PT Timedoor Indonesia</h6>
                                <p>No. 46 Jl. Tukad Yeh Aya Ix 80226 South Denpasar Bali</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 my-3 rounded-2" style="background-color:aliceblue">
                        <p>Delivery details</p>
                        <div class="d-flex align-content-center p-3 border border-1">
                            <div class="me-3 fs-1"><i class="fa-solid fa-file-shield"></i></div>
                            <div>
                                <h6>Fedex express shipping</h6>
                                <p class="mb-0">Rp20000</p>
                                <div class="d-flex justify-content-center">
                                    <div><i class="fa-regular fa-clock me-2"></i></div>
                                    <div>
                                        <p>Home delivery in 1-3 working days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 my-3 rounded-2" style="background-color:aliceblue">
                        <p>Payment methods</p>
                        <div class="d-flex align-content-center p-3 border border-1">
                            <div class="me-3 fs-1"><i class="fa-solid fa-file-shield"></i></div>
                            <div>
                                <h6>083456713456</h6>
                                <div class="d-flex">
                                    <p class="mb-0">Rp23/12</p>
                                    <p>123</p>
                                </div>
                                
                                <div class="d-flex justify-content-center">
                                    <div><i class="fa-solid fa-money-check-dollar me-2"></i></div>
                                    <div>
                                        <p>I Made Juniandika</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="px-3 py-3 border rounded">
                        <div class="px-2 pt-3">
                            <h6>Order Summary</h6>
                        </div>
                        <hr />
                        <div class="px-2 pt-3 d-flex justify-content-between">
                            <p>Order</p>
                            <p>Rp{{ totalPrice }}</p>
                        </div>
                        <div class="px-2 pt-3 d-flex justify-content-between">
                            <p>Protection fee</p>
                            <p>Rp{{ rincian.protect }}</p>
                        </div>
                        <div class="px-2 pt-3 d-flex justify-content-between">
                            <p>Shipping fee</p>
                            <p>Rp{{ rincian.shipping }}</p>
                        </div>
                        <div class="px-2 pt-3 d-flex justify-content-between">
                            <h6>Total to pay</h6>
                            <h6>Rp{{ totalPrice + rincian.protect + rincian.shipping }}</h6>
                        </div>
                       <modal-order @push="order" @addItem="addHistoryData(dataCheck)"></modal-order>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <web-footer></web-footer>
</template>
<script setup>
import LogoDropDown from "../header/LogoDropDown.vue";
import Navigation from "../header/Navigation.vue";
import BaseButton from "../ui/BaseButton.vue";
import WebFooter from "../footer/WebFooter.vue";
import ModalOrder from "../modal/ModalOrder.vue";

import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";


const store = useStore();
const router = useRouter();

const rincian = {
    protect: 20000,
    shipping: 15000
}

const dataCheck = computed(() => {
    console.log('ini adalah list checkout', store.state.checkout.checkOutItem)
    return store.state.checkout.checkOutItem
})

const totalPrice = computed(() => {
    return store.state.checkout.checkOutItem.reduce((a, b) => a + b.qty * b.price, 0)
})
const addHistoryData = (data) =>{
     store.dispatch("history/addToHistory",data)
     store.dispatch("checkout/removeAll",data)
     store.dispatch("cart/removeAllCart",store.state.checkout.checkOutItem)
     
}

const order=(data)=>{
    if (data === 'shooping') {
        router.push("/allitem")
    }else{
        router.push("/user/user-history")
    }
}

</script>