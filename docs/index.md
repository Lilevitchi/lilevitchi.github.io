# 🛠️ Bienvenue sur le portail de Lilevitchi

Bienvenue sur mon portail de modding. Sélectionnez un univers pour accéder aux guides.

---

<style>
    /* Effet de flou et bordures Nexus Orange */
    .game-card {
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        border: 2px solid #ff5722; /* Bordure orange constante style Nexus */
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        background: #1a1a1a;
        cursor: url('assets/curseur.png'), pointer; /* Ton curseur robot */
    }

    .game-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 20px rgba(255, 87, 34, 0.6);
    }

    .game-card-bg {
        width: 100%;
        height: 180px;
        background-size: cover;
        background-position: center;
        filter: blur(4px); /* Flou par défaut */
        transition: filter 0.4s ease;
    }

    .game-card:hover .game-card-bg {
        filter: blur(0px); /* Devient net au survol */
    }

    .game-card-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
    }

    .game-card:hover .game-card-overlay {
        background: rgba(0, 0, 0, 0.1);
    }

    .game-card h2 {
        color: #fff;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 2px;
        text-shadow: 2px 2px 10px rgba(0,0,0,0.9);
        border: none !important;
        margin: 0 !important;
    }
</style>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 30px 0;">

    <a href="fallout4/intro/" class="game-card" style="text-decoration: none;">
        <div class="game-card-bg" style="background-image: url('assets/fo4.jpg');"></div>
        <div class="game-card-overlay">
            <h2>Fallout 4</h2>
        </div>
    </a>

    <a href="fallout-london/" class="game-card" style="text-decoration: none;">
        <div class="game-card-bg" style="background-image: url('assets/london.jpg');"></div>
        <div class="game-card-overlay">
            <h2>Fallout London</h2>
        </div>
    </a>

    <a href="fnv/" class="game-card" style="text-decoration: none;">
        <div class="game-card-bg" style="background-image: url('assets/fnv.jpg');"></div>
        <div class="game-card-overlay">
            <h2>New Vegas</h2>
        </div>
    </a>

    <a href="ttw/" class="game-card" style="text-decoration: none;">
        <div class="game-card-bg" style="background-image: url('assets/ttw.jpg');"></div>
        <div class="game-card-overlay">
            <h2>TTW</h2>
        </div>
    </a>

    <a href="cyberpunk/" class="game-card" style="text-decoration: none;">
        <div class="game-card-bg" style="background-image: url('assets/cyberpunk.jpg');"></div>
        <div class="game-card-overlay">
            <h2>Cyberpunk 2077</h2>
        </div>
    </a>

</div>

---

## 💡 Le Conseil de Lile-Bot

!!! tip ""
    <div style="display: flex; align-items: center; gap: 20px;">
        <img src="assets/lile-bot.png" width="80" style="border-radius: 10px;">
        <div>
            <strong>Salut l'ami moddeur !</strong><br>
            Je suis là pour te donner les meilleurs tuyaux. Clique sur une tuile pour commencer ton aventure, et n'oublie pas de vérifier mes vidéos YouTube pour les étapes les plus délicates !
        </div>
    </div>

---

## 🔗 Liens Utiles
* [📺 YouTube](https://www.youtube.com/@Lilevitchi) | [🎮 Twitch](https://twitch.tv/lilevitchi) | [💬 Discord](https://discord.gg/aFJxsPC)
