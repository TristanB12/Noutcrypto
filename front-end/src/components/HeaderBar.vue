<template>
    <div id="headerBar">
        <div class="header-bar-wrapper">
            <h1>NoutCrypto</h1>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Fermes</li>
                    <li>Dashboard</li>
                </ul>
            </nav>
            <button class="main-btn" @click="goToAuth">CONNEXION</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            goToAuth() {
                this.$router.push({name: 'Auth'})
            }
        },
    }
</script>

<style lang="scss" scoped>
#headerBar {
    width: 100%;
    position: fixed;
    background-color: #5688ff;
    left: 0;
    top: 0;
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
}

button {
    color: #5848D2;
    font-family: 'Lato', sans-serif;
    font-weight: 800;
    background-color: white;
    padding: 10px 14px;
}
</style>