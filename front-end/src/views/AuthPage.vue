<template>
    <div id="login">
        <div class="container" id="container">
            <div class="form-container sign-up-container">
                <div class="form">
                    <h1>Créer un compte</h1>
                    <input type="text" placeholder="Nom" v-model="sign_name_input" />
                    <input type="email" placeholder="Email"  v-model="sign_email_input"/>
                    <input type="password" placeholder="Mot de passe" v-model="sign_password_input" />
                    <span v-if="sign_error != ''"> {{ sign_error }} </span>
                    <button @click="signUp">Créer</button>
                </div>
            </div>
            <div class="form-container sign-in-container">
                <div class="form">
                    <h1>Se connecter</h1>
                    <input type="email" placeholder="Email" v-model="login_email_input"/>
                    <input type="password" placeholder="Mot de passe" v-model="login_password_input"/>
                    <span v-if="login_error != ''"> {{ login_error }} </span>
                    <button @click="login">Connexion</button>
                </div>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Déjà un compte ?</h1>
                        <p>connectez vous avec le bouton ci-dessous</p>
                        <button class="ghost" id="signIn">Se connecter</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Pas encore de compte ?</h1>
                        <p>Cliquez ci-dessous pour en créer un</p>
                        <button class="ghost" id="signUp">Créer un compte</button>
                    </div>
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
                sign_name_input:"",
                sign_email_input: "",
                sign_password_input: "",
                login_email_input: "",
                login_password_input: "",
                sign_error: "",
                login_error: ""
            }
        },
        methods: {
            login() {
                axios.post('/api/auth/login', {
                        email: this.login_email_input,
                        password: this.login_password_input
                    })
                    .then(response => {
                        this.$store.dispatch('setUser', response.data)
                        this.$router.push({name: "Farms"})
                    })
                    .catch(error => this.login_error = error.response.data.error)
                this.login_email_input = ""
                this.login_password_input = ""
            },
            signUp() {
                axios.post('/api/auth/signup', {
                        name: this.sign_name_input,
                        email: this.sign_email_input,
                        password: this.sign_password_input
                    })
                    .then(response => {
                        this.$store.dispatch('setUser', response.data.user)
						this.$router.push({name: "Farms"})
                    })
                    .catch(error => this.sign_error = error.response.data.error)
                this.sign_email_input = ""
                this.sign_password_input = ""
                this.sign_name_input = ""
            },
            animations() {
                const signUpButton = document.getElementById('signUp');
                const signInButton = document.getElementById('signIn');
                const container = document.getElementById('container');

                signUpButton.addEventListener('click', () => {
                    container.classList.add("right-panel-active");
                });

                signInButton.addEventListener('click', () => {
                    container.classList.remove("right-panel-active");
                });
            }
        },
        mounted () {
            this.animations();
        },
    }
</script>

<style lang="scss" scoped>
#login {
    height: 100vh;
    background: linear-gradient(#6291ff, #6238d6);
    display: flex;
    justify-content: center;
    align-items: center;
}

* {
	box-sizing: border-box;
}

h1 {
	font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #fd9644;
	background-color: #fd9644;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
    cursor: pointer;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

.form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
	background-color: #fff;
	border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25),
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 900px;
	max-width: 100%;
	min-height:  550px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}

	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background: #fed330;
	background: -webkit-linear-gradient(to right, #fd9644, #f7b731);
	background: linear-gradient(to right, #fd9644, #f7b731);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
    transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

@media screen and (max-width: 768px){
	h1 {
		font-size: 1.5em;
	}
	.container {
		min-height: 375px;
	}
	button {
		font-size: .5em;
		padding: 10px 10px;
	}
	form {
		padding: 0 20px;
	}
	input {
		padding: 5px 5px;
	}
}
</style>