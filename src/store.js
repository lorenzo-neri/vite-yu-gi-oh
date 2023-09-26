import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    cards: null,

    fetchData() {

        console.log(this, this.base_url);
        axios
            .get(this.base_url)
            .then(response => {
                console.log(response);
                this.cards = response.data.data
                /*                 this.type = response.data.type
                                this.desc = response.data.desc
                                this.archetype = response.data.archetype
                                this.card_images = response.data.card_images */
            })



            .catch(error => {
                console.log('Error:');
                console.error(error);
            })
    }
})