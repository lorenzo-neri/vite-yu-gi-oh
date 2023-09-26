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
    <main class="p-5">
        <div class="container">
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 bg-white p-4">
                <div class="col p-2" v-for="card in store.cards">
                    <div class="card text-center">
                        <img :src="card.card_images[0].image_url" alt="">
                        <div class="body-card d-flex flex-column align-items-center justify-content-center p-3">
                            <div class="title text-white text-uppercase">
                                {{ card.name }}
                            </div>
                            <div>{{ card.archetype }}</div>
                        </div>
                    </div>
                    <!-- /.card -->
                </div>
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/AppMain.scss' as *;
</style>