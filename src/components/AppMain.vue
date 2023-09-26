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

<template></template>

<style lang="scss" scoped></style>