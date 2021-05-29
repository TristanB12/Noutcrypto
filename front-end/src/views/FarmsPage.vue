<template>
    <div id="farmsPage">
        <div class="wrapper">
            <h1>Les différents projets de fermes de minage sur l'île</h1>
        </div>
        <FarmPreview :key="farm._id" v-for="farm in farms" :data="farm" />
    </div>
</template>

<script>
import FarmPreview from '@/components/FarmPreview.vue';
import axios from 'axios'
    export default {
        components: {
            FarmPreview,
        },
        data() {
            return {
                farms: []
            }
        },
        methods: {
            getFarms() {
                axios.get('http://localhost:8081/api/farm/')
                    .then(response => this.farms = response.data)
                    .catch(err => console.log(err))
            }
        },
        mounted () {
            this.getFarms();
        },
    }
</script>

<style lang="scss" scoped>
.wrapper {
    height: 90vh;
    background: linear-gradient(#6291ff, #6238d6);
    border-radius: 0px 0px 300px 0px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 20px black;
    margin-bottom: 15vh;
}
#farmsPage {
    margin: auto;
    margin-top: 10vh;
}

h1 {
    text-align: center;
    font-size: 3em;
}
</style>