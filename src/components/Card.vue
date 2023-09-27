<script>

export default {
    name: 'Card',
    props: {
        cartData: Object
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
            <img :src="cardData.card_images[0].image_url" alt="">
            <div class="body-card d-flex flex-column align-items-center justify-content-center p-3">
                <div class="title text-white text-uppercase">
                    {{ cardData.name }}
                </div>
                <div>{{ cardData.archetype }}</div>
            </div>
        </div>
        <!-- /.card -->
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/AppMain.scss' as *;
</style>