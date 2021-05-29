<template>
    <div id="landingPage">
        <div class="main-content-wrapper">
            <div class="main-content">
                <div class="content">
                    <h2>La Réunion a besoin de vous</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus rerum et expedita qui fugiat iusto animi voluptates optio iure reiciendis! Rerum atque quibusdam tenetur veritatis animi dignissimos quasi quis nostrum!</p>
                    <button class="main-btn">VOIR PLUS</button>
                </div>
                <img src="@/assets/CarteDodoCoin.png" alt="">
            </div>
        </div>
        <div class="secondary-content-wrapper">
            <div class="secondary-content">
                <img src="@/assets/CryptoIllustration.jpg" alt="">
                <div class="content">
                    <h3>QUOI</h3>
                    <h2>Qu'est ce que la cryptomonnaie</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus rerum et expedita qui fugiat iusto animi voluptates optio iure reiciendis! Rerum atque quibusdam tenetur veritatis animi dignissimos quasi quis nostrum!</p>
                    <button class="main-btn">VOIR PLUS</button>
                </div>
            </div>
        </div>
        <div class="last-content-wrapper">
            <div class="last-content">
                <div class="content">
                    <h3>QUOI</h3>
                    <h2>Qu'est ce que la cryptomonnaie</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus rerum et expedita qui fugiat iusto animi voluptates optio iure reiciendis! Rerum atque quibusdam tenetur veritatis animi dignissimos quasi quis nostrum!</p>
                    <button class="main-btn">VOIR PLUS</button>
                </div>
                <img src="@/assets/CryptoIllustration.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
#landingPage {
    font-family: 'Lato', sans-serif;
}

.main-content-wrapper {
    height: 90vh;
    background: linear-gradient(#6291ff, #6238d6);
    border-radius: 0px 0px 300px 0px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-content {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .content {
        width: 40%;
        * {
            margin-bottom: 50px;
        }
        h2 {
            font-size: 3em;
        }
        button {
            padding: 13px 30px;
            font-weight: 900;
            color: #5848D2;
        }
    }
    img {
        width: 100%;
        max-width: 700px;
        height: auto;
    }
}

.secondary-content-wrapper {
    height: 90vh;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.secondary-content {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .content {
        width: 40%;
        h3 {
            letter-spacing: 1em;
            color: #9f53e6;
        }
        h2 {
            font-size: 3em;
            margin-bottom: 50px;
        }
        p {
            margin-bottom: 50px;
        }
        button {
            padding: 13px 30px;
            font-weight: 900;
            color: black;
            margin-bottom: 50px;
            background-color: #f7b731;
        }
    }
    img {
        width: 100%;
        max-width: 700px;
        height: auto;
    }
}

.last-content-wrapper {
    background: linear-gradient(#f1f3f6, #f1f3f6);
    border-radius: 300px 0px 0px 0px;
    height: 90vh;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.last-content {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .content {
        width: 40%;
        h3 {
            letter-spacing: 1em;
            color: #9f53e6;
        }
        h2 {
            font-size: 3em;
            margin-bottom: 50px;
        }
        p {
            margin-bottom: 50px;
        }
        button {
            padding: 13px 30px;
            font-weight: 900;
            color: black;
            margin-bottom: 50px;
            background-color: #f7b731;
        }
    }
    img {
        width: 100%;
        max-width: 700px;
        height: auto;
    }
}
</style>