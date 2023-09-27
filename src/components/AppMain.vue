<script>
import { store } from '../store.js';
import Card from './Card.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    components: {
        Card,
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
                    <Card v-for="card in store.cards" :cardImage="card.card_images[0].image_url" :cardTitle="card.name"
                        :cardArchetype="card.archetype" :cardFound="store.cards.length" />
                </div>
                <!-- /.row -->

            </div>
        </div>
        <!-- /.container -->

        <div v-else>Loading</div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/AppMain.scss' as *;
</style>