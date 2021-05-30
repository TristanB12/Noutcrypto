<template>
    <div id="headerBar">
        <div class="header-bar-wrapper">
            <div class="logo-container">
                <img src="@/assets/logo.png" class="logo" alt="">
                <h1><router-link :to="{name: 'LandingPage'}">NoutCrypto</router-link></h1>
            </div>
            <nav class="nav-links" @click="disableNavigation">
                <ul>
                    <li><router-link :to="{name: 'LandingPage'}">Accueil</router-link></li>
                    <li><router-link :to="{name: 'Farms'}">Fermes</router-link></li>
                    <li></li>
                </ul>
            </nav>
            <button v-if="!$store.state.user" class="main-btn" @click="goToAuth">CONNEXION</button>
            <button v-else class="main-btn"> {{ $store.state.user.name }} </button>
            <div class="burger" @click="activeNavigation">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            goToAuth() {
                this.$router.push({name: 'Auth'})
                this.disableNavigation()
            },
            activeNavigation() {
                const nav = document.querySelector('.nav-links')
                const burger = document.querySelector('.burger')

                nav.classList.toggle('nav-active')
                burger.classList.toggle('toggle')
            },
            disableNavigation() {
                const nav = document.querySelector('.nav-links')
                const burger = document.querySelector('.burger')

                nav.classList.remove('nav-active')
                burger.classList.remove('toggle')
            }
        },
    }
</script>

<style lang="scss" scoped>
.logo-container {
    display: flex;
    align-items: center;
}
.logo {
    width: 50px;
}
#headerBar {
    width: 100%;
    position: fixed;
    background-color: #5688ff;
    left: 0;
    top: 0;
    z-index: 1000;
}
.header-bar-wrapper {
    height: 10vh;
    width: 80%;
    margin: auto;
    color: white;
    font-family: 'Lato', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h1 {
    font-size: 1.5em;
}

nav {
    width: 70%;
    display: flex;
    justify-content: space space-between;
}
ul {
    width: 50%;
    display: flex;
    justify-content: space-around;
    list-style: none;

    li:hover {
        text-decoration: underline;
        cursor: pointer;
    }
}

button {
    color: #5848D2;
    font-family: 'Lato', sans-serif;
    font-weight: 800;
    background-color: white;
    padding: 10px 14px;
}

.burger {
    display: none;
    align-self: center;

    div {
        width: 28px;
        height: 4px;
        background: white;
        margin: 6px;
        transition: all 0.3s ease-out;
    }
}

@media screen and (max-width: 768px){
    .nav-links {
        position: absolute;
        right: 0px;
        top: 8vh;
        height: 92vh;
        width: 100vw;
        background-color: #5688ff;
        transform: translateX(100%);
        transition: transform 0.5s ease-in;

        ul {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            li {
                text-align: center;
            }
        }
    }
    .burger {
        display: block;
        cursor: pointer;
    }
    .nav-active {
        transform: translateX(0);
    }
    .toggle {
        .line1 {
            transform: rotate(-45deg) translate(-8px, 6px);
        }
        .line2 {
            opacity: 0;
        }
        .line3 {
            transform: rotate(45deg) translate(-8px, -6px);
        }
    }
    .logo {
        width: 30px;
    }

    h1 {
        font-size: 1.2em;
    }
    button {
        font-size: .5em;
    }
}
</style>