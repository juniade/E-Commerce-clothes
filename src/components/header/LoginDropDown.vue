<template>
    <div class="dropdown">
        <div class="dropdown-toggle align-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://i.pinimg.com/736x/7b/94/3f/7b943f0ae3902473c07b3b05a6ee8778.jpg"
                                class="rounded-circle" style="width:30px;height:30px">
        </div>
        <ul class="dropdown-menu">
            <router-link to="/user/user-profil" class="text-decoration-none"><button class="dropdown-item" type="button"><i class="fa-regular fa-user me-1"></i>Profil</button></router-link>
            <router-link to="/allitem" class="text-decoration-none" ><button class="dropdown-item" type="button"><i class="fa-solid fa-file-invoice me-1"></i>Order</button>
            </router-link>
            <li @click="logout"><button class="dropdown-item" type="button"><i
                        class="fa-solid fa-right-from-bracket me-1"></i>Logout</button></li>
        </ul>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store=useStore()
const router=useRouter()

const logout=()=>{
    store.commit("auth/setUserLogout")
    router.push("/")
}
</script>