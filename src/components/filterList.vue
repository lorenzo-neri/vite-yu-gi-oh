<script>
import { store } from '../store.js'
import { archetype } from '../archetype.js';
import selectArchetype from './selectArchetype.vue';

export default {
    name: 'filterList',
    emits: ['searchFilter'],

    components: {
        selectArchetype,
    },

    data() {
        return {
            store,
            archetype,
        }
    },

    created() {
        store.fetchData();
        archetype.fetchData();
    }

}
</script>

<template>
    <div class="pb-3">
        <select name="choose_archetype" id="choose_archetype" @change="$emit('searchFilter')"
            v-model="store.archetypeSelected">
            <option value="" disabled selected>Choose the archetype</option>
            <selectArchetype v-for="filter in archetype.listsArchetype" :type="filter.archetype_name" />
        </select>
    </div>
</template>


<style lang="scss" scoped></style>