<template>
    <logo-drop-down></logo-drop-down>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-6 col-sm-12">
                <div class="border p-5">
                    <div class="d-flex justify-content-between">
                        <h5>Sign up</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <p>Enter your details below</p>
                    <form @submit.prevent="register">
                        <div class="my-4"><base-input type="text" identity="text" placeholder="Enter your fullname"
                                label="Full name" v-model="signupData.fullname"></base-input>
                        </div>
                        <div class="my-4"><base-input type="username" identity="username"
                                placeholder="Enter your username" label="Username"
                                v-model="signupData.username"></base-input>
                        </div>
                        <div class="my-4"><base-input type="email" identity="email" placeholder="Enter your email"
                                label="Email" v-model="signupData.email"></base-input>
                        </div>
                        <div class="my-4"><base-input type="password" identity="password"
                                placeholder="Enter your password" label="Password" v-model="signupData.password"
                                @keyInput="passwordCheck"></base-input>
                            <p class="text-danger mt-1 fw-medium" style="font-size:11px"
                                :style="{ display: passwordStatusDisplay }">The password field must be at least 8
                                chracters
                            </p>
                        </div>
                        <div class="my-4"><base-input type="password" identity="confirmationPassword"
                                placeholder="Enter your password" label="Confrimation Password"
                                v-model="signupData.confirmationPassword"
                                @keyInput="confirmationPasswordCheck"></base-input>
                            <p class="text-danger mt-1 fw-medium" style="font-size:11px"
                                :style="{ display: confirmPasswordDoesNotMatch }">The password confirmation does not
                                match
                            </p>
                            <p class="text-success mt-1 fw-medium" style="font-size:11px"
                                :style="{ display: confirmPasswordMatch }">The password confirmation does match</p>
                        </div>
                        <div>
                            <modal-sign-up @register="register"></modal-sign-up>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import LogoDropDown from "../header/LogoDropDown.vue"
import BaseInput from "../ui/BaseInput.vue"
import ModalSignUp from "../modal/ModalSignUp.vue"
import BaseButton from "../ui/BaseButton.vue"

import { reactive, ref } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"

const store = useStore()
const router = useRouter()

const signupData = reactive({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmationPassword: "",
    isLogin: false
})

const passwordStatusDisplay = ref("none")
const confirmPasswordMatch = ref("none")
const confirmPasswordDoesNotMatch = ref("none")

const passwordCheck = () => {
    if (signupData.password.length < 8 && signupData.password.length > 0) {
        passwordStatusDisplay.value = "block"
    } else {
        passwordStatusDisplay.value = "none"
    }
}

const confirmationPasswordCheck = () => {
    if (signupData.confirmationPassword === "") {
        confirmPasswordDoesNotMatch.value = "none"
        confirmPasswordMatch.value = "none"
        return
    }
    if (signupData.password !== signupData.confirmationPassword) {
        confirmPasswordDoesNotMatch.value = "block"
        confirmPasswordMatch.value = "none"
        return
    }
    confirmPasswordDoesNotMatch.value = "none"
    confirmPasswordMatch.value = "block"
}

const register = async () => {
    if (signupData.password !== signupData.confirmationPassword || signupData.password.length < 8) {
        signupData.confirmationPassword = ""
        signupData.password = ""
        confirmPasswordDoesNotMatch.value = "none"
        confirmPasswordMatch.value = "none"
    } else {
        await store.dispatch("auth/getRegisterData", signupData)
        router.push("/")
    }
}

</script>

<style scoped>
.container {
    max-height: 100vh;
}
</style>
