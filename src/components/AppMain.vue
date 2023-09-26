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
    <main class="p-3">
        <div v-if="store.cards" class="container">
            <select class="m-3 w-25" name="type" id="type">
                <option value="alien">Alien</option>
            </select>
            <div class="container px-0 bg-white">
                <div id="cards_found" class="p-2 text-white">
                    Found tot cards
                </div>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 p-4">
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
        </div>
        <div v-else>Loading</div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/AppMain.scss' as *;
</style>