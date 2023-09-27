import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({
    base_url: //'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
        'https://db.ygoprodeck.com/api/v7/cardinfo.php', //molte molte molte più carte
    cards: null,
    limit: 25,
    offset: 0,
    archetypeSelected: null,

    fetchData() {

        //console.log(this, this.base_url);
        axios
            .get(this.base_url, {
                params: {

                    archetype: this.archetypeSelected,

                    offset: this.offset,

                    num: this.limit,
                }
            }).then(response => {
                console.log(response);

                this.cards = response.data.data
            })

            .catch(error => {
                console.log('Error:');
                console.error(error);
            })
    }
})