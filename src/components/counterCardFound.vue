<script>
import { store } from '../store';

export default {
    name: 'counteCardFound',

    data() {
        return {
            store
        }
    },
}
</script>
<template>
    <div>
        <div>Found: {{ store.cards.length }} cards</div>
    </div>
</template>

<style lang="scss" scoped></style>