<template>
    <h4>Settings</h4>
    <div>
        <button class=" btn" @click="menuClicked('user-profil')">Profil details</button>
        <button class=" btn" @click="menuClicked('user-check-pass')">Change Password</button>
        <nutton class=" btn"  @click="menuClicked('user-history')">Transaction History</nutton>
    </div>
</template>

<script setup>
const emit = defineEmits(['changeComponent'])
const menuClicked = option => {
    emit("changeComponent", option)
}
</script>