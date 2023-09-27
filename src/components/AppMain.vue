<script>
import { store } from '../store.js';
import Card from './Card.vue';
import filterList from './filterList.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    components: {
        Card,
        filterList,
    },
    created() {

        store.fetchData(this.store.base_url)
    },
    methods: {
        searchArcherype() {
            const archetypeUrl = this.store.base_url + `?archetype=${this.store.archetypeSelected}`;
            console.log(archetypeUrl);
            this.store.fetchData(archetypeUrl);
        }
    }
}
</script>

<template>
    <main class="p-3">
        <div v-if="store.cards" class="container">
            <filterList @search-Filter="searchArcherype()" />
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