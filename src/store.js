import { reactive } from 'vue'
import axios from 'axios';

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',

    fetchData() {

        console.log(this, this.base_url);
        axios
            .get(this.base_url)
            .then(response => {
                console.log(response);
                this.characters = response.data.results
                this.info = response.data.info
            })
            .catch(error => {
                console.log('Error:');
                console.error(error);
            })
    }
})