<template>
    <logo-drop-down>
        <navigation @searchItem="cariHuruf"></navigation>
    </logo-drop-down>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-sm-12">
               <user-menu @changeComponent="$router.push($event)"></user-menu>
            </div>
            <div class="col-lg-9 col-sm-12">
                <div>
                   <component :is="components[getRoute]"></component>
                </div>
            </div>
        </div>
    </div>   
</template>
<script setup>
import LogoDropDown from '../header/LogoDropDown.vue';
import Navigation from '../header/Navigation.vue';
import UserMenu from './UserMenu.vue';
import UserProfil from './UserProfil.vue';
import UserCheckPass from './UserCheckPass.vue';
import UserHistory from './UserHistory.vue';

import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route=useRoute()
const components={
    "user-profil":UserProfil,
    "user-check-pass":UserCheckPass,
    "user-history":UserHistory
}

const getRoute=computed(()=>{
    return route.params.component
})
</script>