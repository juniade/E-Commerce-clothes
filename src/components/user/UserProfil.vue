<template>
    <div class="border">
        <div class="p-3">
            <p>Edit Profile</p>
            <div></div>
            <hr>
            <div>
                <p><b>Full name</b></p>
                <div class="px-2 border border-2 rounded-pill"> <p class="my-1">{{ userData.fullname }}</p></div>   
            </div>
            <div>
                <p><b>Username</b></p>
                 <div class="px-2 border border-2 rounded-pill"> <p class="my-1">{{ userData.username }}</p></div>
            </div>
            <div>
                <p><b>Email</b></p>
                 <div class="px-2 border border-2 rounded-pill"> <p class="my-1">{{ userData.email }}</p></div>
            </div>
            <div class="d-flex justify-content-end mt-4">
                <base-button class="btn-primary">Update Profil</base-button>
            </div>
        </div>
    </div>

</template>
<script setup>
import BaseButton from '../ui/BaseButton.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore()

const userData=computed(()=>{
    return store.state.auth.userLogin
})
</script>