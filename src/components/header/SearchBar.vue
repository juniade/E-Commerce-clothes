<template>
    <div class="col-lg-6 col-md-6 mb-sm-2 px-0 py-0 d-none d-sm-block">
        <div class="header__searchbar input-group align-items-center border rounded">
            <span>
                <i class="fa-solid fa-magnifying-glass ms-2 me-3"></i>
            </span>
            <!-- membuat emit bernama search yang beriskan data dari variabel input kemudian diteruskan ke file Navigation.vue -->
            <input type="text" class="form-control form-control-sm border-0 rounded-1" placeholder="Search Product" v-model="input" @input="$emit('search',input)">
        </div>
    </div>
    <div class="col-sm-5 d-block d-sm-none border-end text-end ">
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <slot></slot>
</template>
<script setup>
import { ref} from "vue"
const input=ref("")
</script>