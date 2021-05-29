<template>
    <div id="landingPage">
        <div class="main-content-wrapper">
            <div class="main-content">
                <div class="content">
                    <h2>Participez à l'économie réunionnaise</h2>
                    <p>La Réunion lance aujourd'hui sont projet de ferme de minage. <br> Grace à la plateforme NoutCrypto les citoyens Réunionais pourrons financer la construction de ferme sur l'île. Ces  fermes produiront la cryptomonnaie locale le DodoCoin. </p>
                    <a  href="#secondary-content-wrapper"><button class="main-btn">VOIR PLUS</button></a>
                </div>
                <img src="@/assets/Image1LandingPage.png" alt="">
            </div>
        </div>
        <div id="secondary-content-wrapper">
            <div class="secondary-content">
                <img src="@/assets/PresentationCryptoLangingPage.png" alt="">
                <div class="content">
                    <h3>QUOI</h3>
                    <h2>Qu'est ce que la cryptomonnaie ?</h2>
                    <p>On désigne par cryptomonnaie à la fois une monnaie cryptographique et un système de paiement de pair à pair. Ces monnaies numériques sont donc des monnaies virtuelles dans le sens où ces dernières sont caractérisées par une absence de support physique : ni pièces, ni billets.</p>
                    <p> Leur valeur n’est pas indexée sur le cours de l’or, ni régulées par un organe central ou des institutions financières. Et pourtant, sécurité et transparence sont leurs principaux atouts ! En effet la cryptographie sécurise les transactions qui sont toutes vérifiées et enregistrées dans un domaine public, assurant tout à la fois confidentialité et authenticité grâce à la technologie Blockchain. </p>
                    <a  href="#last-content-wrapper"><button class="main-btn">VOIR PLUS</button></a>
                </div>
            </div>
        </div>
        <div id="last-content-wrapper">
            <div class="last-content">
                <div class="content">
                    <h3>POURQUOI</h3>
                    <h2>Pourquoi financer un projet de ferme de minage a la Réunion ? </h2>
                    <p>En Finançant la construction de ferme de minage, vous permettez à l'économie réunionnaise de grandir. La Réunion possède aujourd'hui également sa cryptomonnais qui se nomme le "Dodo Coin", elle vaut aux alentours de 1,30$ (varie selon le cours).</p>
                    <p>La crise sanitaire fait chuter toute les plus grandes monnaies du monde. Seuls le dollar américain persiste mais risque fortement de s'éteindre, d'où l'intérêt d'implanter des fermes de minage à la Réunion pour produire du DodoCoin et concurrencer les autres cryptomonnais du monde tout en développement l'économie Réunionnaise.</p>

                    <p>En finançant un projet, une fois celui-ci terminé les premiers DodoCoin engendrés par la fermes vous seront reversé selon l'importance de votre donnation. Vous ne pouvez pas financer un projet au dela de 10% de l'objectif.</p>
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
    font-size: 1.4em;
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