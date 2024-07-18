<template>
    <!-- eamit dari SearchBar dijalankan, kemudian buat emit penghubung ke ItemPage.vue bernama searchItem 
    yang berisikan data $event. $event ini merupakan data yang diperoleh dari emit search. 
    Tujuan dibuatakn emit disini supaya bisa menghubungkan data dari SearchBar.vue ke ItemPage.vue -->
    <search-bar @search="$emit('searchItem',$event)"><component :is="components[menuComponent]"></component></search-bar>
</template>
<script setup>
import SearchBar from './SearchBar.vue'
import LoginSignUpBar from './LoginSignUpBar.vue'
import UserLogin from './UserLogin.vue'

import {computed,ref,watch} from "vue"
import {useStore} from "vuex"
import Cookies from 'js-cookie'
const store=useStore()
const menuComponent=ref('login-signup-bar')

const components={
    'login-signup-bar':LoginSignUpBar,
    'userLogin':UserLogin
}

const getToken=computed(()=>{
    return store.state.auth.token
})

if(!getToken.value){
    menuComponent.value="login-signup-bar"
}else{
    menuComponent.value="userLogin"
}

watch(getToken,(newValue,oldValue)=>{
    if(!newValue){
        menuComponent.value="login-signup-bar"
    }else{
        menuComponent.value="userLogin"
    }
})

</script>