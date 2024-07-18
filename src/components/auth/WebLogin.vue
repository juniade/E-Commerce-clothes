<template>
    <logo-drop-down></logo-drop-down>
    <div class="container">
        <div class="container-fluid d-flex justify-content-center align-items-center">
            <div class="m-auto p-5 border">
                <h5>Login to Vintage</h5>
                <p>Enter your details below</p>
                <form @submit.prevent="login">
                    <div class="my-4"><base-input type="email" identity="email" placeholder="Enter your email"
                            label="Email" v-model="loginData.email"></base-input>
                    </div>
                    <div class="my-4"><base-input type="password" identity="password" placeholder="Enter your password"
                            label="Password" v-model="loginData.password"></base-input>
                    </div>
                    <base-button class="btn-success rounded-pill w-100">Login</base-button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import LogoDropDown from "../header/LogoDropDown.vue";
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";
import {reactive} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const store=useStore()
const router=useRouter()

const loginData=reactive({
    email:"",
    password:"",
    isLogin:true
})

const login=async()=>{
    await store.dispatch("auth/getLoginData",loginData)
    router.push("/")
}
</script>
