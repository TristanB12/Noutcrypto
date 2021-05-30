<template>
    <div id="farmsPage">
        <div class="wrapper">
            <div class="container">
                <h1>Les différents projets de fermes de minage sur l'île</h1>
                <img src="@/assets/CarteFermes.png" alt="">
            </div>
        </div>
        <FarmPreview :key="farm._id" v-for="farm in farms" :data="farm" />
        <div id="popup" v-if="!$store.state.popupDone">
            <div class="popup-wrap">
				<img src="@/assets/popup.png" alt="">
                <div class="actions">
                    <a href="#ferme_sainte_suzanne.jpg" @click="closePopup"><button class="contribute main-btn">contribuer</button></a>
                    <button class="close main-btn" @click="closePopup">fermer</button>
                </div>
            </div>
        </div>
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
                axios.get('/api/farm/')
                    .then(response => this.farms = response.data)
                    .catch(err => console.log(err))
            },
            closePopup() {
                const popup = document.getElementById('popup')

                popup.style.display = 'none'
                this.$store.dispatch('setPopup', true)
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

    img {
        width: 900px;
    }
}
.container {
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
}
#farmsPage {
    margin: auto;
    margin-top: 10vh;
}

h1 {
    text-align: center;
    font-size: 3em;
}

#popup {
    width: 70vw;
    height: 90vh;
    position: fixed;
    top: 5vh;
    left: 15vw;
    border-radius: 10px;
    background: linear-gradient(#f7b731, #fd9644);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 20px black;
    img {
        width: 600px;
    }
    button {
        font-size: 17px;
        font-weight: 800;
        padding: 17px 20px;
        color: white;
    }
    .close {
        background-color: #eb3b5a;
    }
    .contribute {
        background-color: #20bf6b;
    }
}
.actions {
    display: flex;
    justify-content: space-between;
}

@media screen and (max-width: 768px){
    #popup {
        padding: 5px;
        text-align: center;
        img {
            width: 300px;
        }
    }
    .container {
        flex-direction: column;
        h1 {
            font-size: 1.6em;
        }
        img {
            width: 300px;
        }
    }
}
</style>