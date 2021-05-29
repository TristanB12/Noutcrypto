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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: this.$route.params.data
            }
        },
        methods: {
            initFundingBar() {
                const fundingBar = document.getElementById('funding')
                const width = (this.data.funding * 100) / this.data.fundingGoal

                fundingBar.style.width = `${width}%`
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
</style>