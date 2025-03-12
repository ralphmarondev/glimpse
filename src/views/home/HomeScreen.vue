<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const username = computed(() => store.state.username)
const setUsername = () => {
    store.commit('setUsername', 'Ralph Maron Eda')
}
</script>

<template>
    <div>Home</div>
    <div>Username: {{ username }}</div>
    <button @click="setUsername">Update Username</button>
</template>