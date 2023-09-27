import { reactive } from 'vue';
import axios from 'axios';

export const archetype = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    listsArchetype: null,
    archetypeSelected: '',


    fetchData() {
        axios.get(this.base_url, {

            params: {
                offset: 0,
                num: 10,
                // archetype: "Blue-Eyes" // questo quando lo dobbiamo aggiungere?
            }
        }
            .then(response => {
                console.log(response.data);

                this.listsArchetype = response.data;

            })

            .catch(error => {
                console.log(error);
            })
        )
    }

})

