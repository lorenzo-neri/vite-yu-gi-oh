<script>
import { store } from '../store.js';
import Card from './Card.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            cardData,
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
                <Card v-for="card in store.cards" :cardData="card" />
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->

        <div v-else>Loading</div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/AppMain.scss' as *;
</style>