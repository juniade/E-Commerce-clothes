<template>
     <div class="border">
        <div class="p-3">
            <p>Change Password</p>
            <hr>
            <div>
                <base-input type="password" label="Old Password" placeholder="Old Password"></base-input>
            </div>
            <div>
                 <base-input type="password" label="New Password" placeholder="New Password"></base-input>
            </div>
            <div>
                <base-input type="password" label="Confirmation Password" placeholder="Confirmation Password"></base-input>
            </div>
            <div class="d-flex justify-content-end">
                <base-button class="btn-primary">Save Changes</base-button>
            </div>
        </div>
    </div>
</template>
<script setup>
import BaseInput from '../ui/BaseInput.vue';
import BaseButton from '../ui/BaseButton.vue';
</script>