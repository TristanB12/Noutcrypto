<template>
    <div class="farm-container">
        <div class="farm">
            <div class="farm-preview">
                <img src="@/assets/mafate.jpg" alt="">
            </div>
            <div class="farm-info">
                <h2> {{data.name}} </h2>
                <h6> {{data.description}} </h6>
                <div class="progress-container">
                    <div class="progress"><span class="funding" :id="data._id"></span></div>
                    <span class="progress-text">
                        {{ data.funding }} / {{ data.fundingGoal }}
                    </span>
                </div>
                <button class="main-btn">Détails</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            data: {
                type: Object,
                default: () => {}
            },
        },
        methods: {
            initFundingBar() {
                const fundingBar = document.getElementById(this.data._id)
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

img {
    width: 100px;
}


.farm {
	width: 90%;
    height: 300px;
    margin: auto;
    margin-bottom: 20px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
	display: flex;
    justify-content: space-between;
}

.farm h6 {
	opacity: 0.6;
	margin: 0;
    font-size: 1.4em;
	letter-spacing: 1px;
    width: 70%;
}

.farm h2 {
    font-size: 1.8em;
	letter-spacing: 1px;
	margin: 10px 0;
}

.farm-preview {
	padding: 30px;
}

.farm-preview a {
	color: #fff;
	display: inline-block;
	font-size: 12px;
	opacity: 0.6;
	margin-top: 30px;
	text-decoration: none;
}

.farm-info {
	padding: 30px;
	position: relative;
	width: 100%;
}

.progress-container {
	position: absolute;
	top: 200px;
	left: 30px;
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

button {
	background-color: #f7b731;
	color: black;
	font-size: 16px;
    font-weight: 600;
	padding: 12px 25px;
	position: absolute;
	bottom: 30px;
	right: 30px;
	letter-spacing: 1px;
}

@media screen and (max-width: 768px){
.farm h2 {
        font-size: 1em;
    }
}
</style>