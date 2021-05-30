<template>
    <div>
        <div class="main-infos">
            <div class="content">
                <img :src="require('@/assets/' + data.imagePath)" alt="">
                <div class="infos">
                    <h2> {{data.name}} </h2>
                    <p> {{data.description}} </p>
                    <div class="progress-container">
                        <div class="progress"><span class="funding" id="funding"></span></div>
                        <span class="progress-text">
                            {{ data.funding }} / {{ data.fundingGoal }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="technos">
            <h2>Réalisation</h2>
            <div class="energies">
                <img :src="require('@/assets/' + data.energy1ImagePath)" alt="">
                <p>{{data.energyDescription}}</p>
                <img :src="require('@/assets/' + data.energy2ImagePath)" alt="">
            </div>
        </div>
        <div class="actions-wrapper">
            <div class="actions">
                <h2>Investir</h2>
                <div class="investigate">
                    <input type="number" name="" id="" v-model="number_input">
                    <button class="main-btn" @click="putFarm">C'est parti</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                data: this.$route.params.data,
                number_input: ''
            }
        },
        methods: {
            initFundingBar() {
                const fundingBar = document.getElementById('funding')
                const width = (this.data.funding * 100) / this.data.fundingGoal

                fundingBar.style.width = `${width}%`
            },
            putFarm() {
                this.data.funding += parseInt(this.number_input, 10)
                axios.put('http://localhost:8081/api/farm/' + this.data._id, {
                    ...this.data
                }).then(res => console.log(res))
                .catch(err => console.log(err))
                this.$router.push({name: "Farms"})
            }
        },
        mounted () {
            this.initFundingBar();
        },
    }
</script>

<style lang="scss" scoped>
.main-infos {
    height: 60vh;
    margin-top: 10vh;
    background: linear-gradient(#5688ff, #6238d6);
    border-radius: 0px 0px 300px 0px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 20px black;
}

img {
    width: 500px;
    border-radius: 70px;
}

.content {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;

    h2 {
        font-size: 3em;
    }
    p {
        margin-top: 10px;
        font-size: 1.2em;
    }
}

.progress-container {
	position: absolute;
	top: 450px;
	right: 300px;
	text-align: right;
	width: 40%;
}

.progress {
	background-color: #ddd;
	border-radius: 3px;
	height: 20px;
	width: 100%;
}

.funding {
	border-radius: 3px;
	background-color: #2A265F;
	position: absolute;
	top: 0;
	left: 0;
	height: 20px;
}

.progress-text {
	font-size: 20px;
	opacity: 0.6;
	letter-spacing: 1px;
}

.technos {
    width: 90%;
    height: 50vh;
    margin: auto;
    margin-top: 50px;

    h2 {
        font-size: 2.5em;
    }
}
.energies {
    width:  100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    p {
        width:  40%;
        font-size: 1.5em;
    }
    img {
        width:  500px;
    }
}
.actions-wrapper {
    background: linear-gradient(#f7b731, #fd9644);
    border-radius: 300px 0px 0px 0px;
    height: 35vh;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 15px grey;
}

.actions {
    h2 {
        font-size: 4em;
    }
    input {
        background-color: #eee;
        border: none;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
    }
    button {
        background-color: white;
        padding: 10px 10px;
        font-size: 1.6em;
    }
}
@media screen and (max-width: 768px){
    img {
        display: none;
    }
    .main-infos {
        margin-top: 2vh;

        h2 {
            font-size: 2em;
        }
    }
    .progress-container {
        top: 80px;
        left: 100px;
    }
    .progress-text {
        font-size: .6em;
    }
    .energies p {
        width: 100%;
    }
    .actions {
        width: 50%;
        h2 {
            font-size: 2em;
        }
    }
}
</style>