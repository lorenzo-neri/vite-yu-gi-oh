<script>
import { store } from '../store.js';

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    created() {
        store.fetchData()
    }
}
</script>

<template>
    <div v-for="card in store.cards">{{ card.name }}</div>
</template>

<style lang="scss" scoped></style>