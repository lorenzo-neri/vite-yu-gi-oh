<script>

export default {
    name: 'Card',
    props: {
        cardImage: String,
        cardTitle: String,
        cardArchetype: String,
        cardFound: Number,
    },
    data() {
        return {
        }
    },

}
</script>

<template>
    <div class="col p-2">
        <div class="card text-center">
            <img :src="cardImage" alt="cardTitle">
            <div class="body-card d-flex flex-column align-items-center justify-content-center p-3">
                <div class="title text-white text-uppercase">
                    {{ cardTitle }}
                </div>
                <div>{{ cardArchetype }}</div>
            </div>
        </div>
        <!-- /.card -->
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/Card.scss' as *;
</style>