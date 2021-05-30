<template>
    <div id="landingPage">
        <div class="main-content-wrapper">
            <div class="main-content">
                <div class="content">
                    <h2>Participez à l'économie réunionnaise</h2>
                    <p>La Réunion lance aujourd'hui son projet de fermes de minage de cryptomonnaie Dodocoin.</p>
                    <a  href="#secondary-content-wrapper"><button class="main-btn">EN SAVOIR PLUS</button></a>
                </div>
                <img src="@/assets/Image1LandingPage.png" alt="">
            </div>
        </div>
        <div id="secondary-content-wrapper">
            <div class="secondary-content">
                <img src="@/assets/PresentationCryptoLangingPage.png" alt="">
                <div class="content">
                    <h2>Qu'est ce que la cryptomonnaie ?</h2>
                    <p>La cryptomonnaie est une monnaie virtuelle dans le sens d'une absence de support physique : pas de pièces, ni de billets.</p>
                    <p>Leurs valeur n'est pas régulée par des institutions financières, et pourtant, sécurité et transparence sont leurs principaux atouts !</p>
                    <p>La cryptographie sécurise les transactions qui sont toutes vérifiées et enregistrées dans un domaine public, assurant tout à la fois confidentialité et authenticité grâce à la technologie Blockchain. </p>
                    <a  href="#last-content-wrapper"><button class="main-btn">EN SAVOIR PLUS</button></a>
                </div>
            </div>
        </div>
        <div id="last-content-wrapper">
            <div class="last-content">
                <div class="content">
                    <h2>Pourquoi financer un projet de ferme de minage a la Réunion ? </h2>
                    <p>Le contexte sanitaire ayant fait chuter toute les plus grandes monnaies du monde (à l'exception du dollar américain), l'intérêt d'implanter une monnaie propre à la Réunion prend tout son sens.</p>
                    <p>En finançant la construction d'une ferme de minage, vous permettez à l'économie réunionnaise de grandir. En échange, nous vous renversons une partie des DodoCoins engendrés.</p>
                    <p>Devenez dès aujourd'hui acteur de l'économie de demain, et parrainez vous aussi une ferme de minage à la Réunion !</p>
                   <router-link :to="{name: 'Farms'}"><button class="main-btn">Financez une ferme</button></router-link>
                </div>
                <img src="@/assets/Image3LandingPage.png" alt="">
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

p {
    font-size: 1em;
}

.main-content-wrapper {
    height: 90vh;
    background: linear-gradient(#6291ff, #6238d6);
    border-radius: 0px 0px 300px 0px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 20px black;
}

.main-content {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .content {
        width: 70%;
        * {
            margin-bottom: 50px;
        }
        h2 {
            font-size: 2.5em;
        }
        button {
            padding: 13px 30px;
            font-weight: 900;
            background-color: #f7b731;
        }
    }
    img {
        width: 100%;
        max-width: 900px;
        height: auto;
    }
}

#secondary-content-wrapper {
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

            a {
                color: black;
            }
        }
    }
    img {
        width: 100%;
        max-width: 700px;
        height: auto;
    }
}

#last-content-wrapper {
    background: linear-gradient(#f1f3f6, #f1f3f6);
    border-radius: 300px 0px 0px 0px;
    height: 90vh;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 15px grey;
}

.last-content {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .content {
        width: 50%;
        h3 {
            letter-spacing: 1em;
            color: #9f53e6;
        }
        h2 {
            font-size: 3em;
            margin-bottom: 50px;
        }
        p {
            margin-bottom: 20px;
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

@media screen and (max-width: 768px){
    #landingPage {
        margin-top: 10vh;
    }
    img {
        display: none;
    }
    h2 {
        font-size: 2em !important;
    }
    h3 {
        display: none;
    }
    .main-content .content {
        width: 100%;
    }
    .secondary-content .content {
        width: 100%;
    }
    .last-content .content {
        width: 100%;
    }
    #secondary-content-wrapper {
        height: auto;
    }
    #last-content-wrapper {
        height: auto;
    }
}
</style>