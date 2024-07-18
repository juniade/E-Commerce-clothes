<template>
    <div>
        <label :for="identity" class="fw-semibold">{{ label }}<span style="color: #cb3a31">*</span>
            <slot></slot>
        </label>
        <div class="input-group mb-3">
            <input :class="['form-control']" :type="type" :id="identity" :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)" @keyup="$emit('keyInput',$event.target.value)">
            <span v-if="type === 'password'"  class="input-group-text bg-white" ><i class="fa-regular fa-eye"></i></span>
        </div>

    </div>
</template>

<script setup>
defineProps({
    type: { type: String, require: true },
    label: { type: String, require: true },
    identity: { type: String, require: true },
    placeholder: { type: String, require: false },
    modelValue:{type:[String,Number]},
})
</script>
<style scoped></style>