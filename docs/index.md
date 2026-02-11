# 🛠️ Bienvenue sur le portail de Lilevitchi

Bienvenue sur mon portail de modding. Sélectionnez un univers pour accéder aux guides.

---

<style>
    /* Styles pour l'effet flou/net */
    .game-card-bg {
        filter: blur(5px); /* Image floue par défaut */
        transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
        transform: scale(1);
    }
    .game-card:hover .game-card-bg {
        filter: blur(0px); /* Image nette au survol */
        transform: scale(1.05); /* Zoom léger */
    }
    .game-card {
        border-radius: 12px;
        overflow: hidden; /* Cache le débordement de l'image au zoom */
        position: relative;
        cursor: url('assets/lilebot_cursor.png'), auto; /* CURSEUR PERSONNALISÉ */
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }
    .game-card-content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: rgba(0,0,0,0.4); /* Gradient noir pour la lisibilité du texte */
        transition: background 0.3s ease-in-out;
    }
    .game-card:hover .game-card-content {
        background: rgba(0,0,0,0.2); /* Moins sombre au survol */
    }
    .game-card h2 {
        color: white;
        border: none;
        margin: 0;
        font-size: 1.8em;
        text-shadow: 2px 2px 8px #000;
        z-index: 1;
    }
</style>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 30px 0;">

    <a href="fallout4/intro/" class="game-card" style="text-decoration: none;">
        <div class="game-card-bg" style="background: url('assets/fo4.jpg'); background-size: cover; background-position: center; height: 180px;"></div>
        <div class="game-card-content" style="border: 2px solid #ff5722;">
            <h2>FALLOUT 4</h2>
        </div>
    </a>

    <a href="fallout-london/" class="game-card" style="text-decoration: none;">
        <div class="game-card-bg" style="background: url('assets/london.jpg'); background-size: cover; background-position: center; height: 180px;"></div>
        <div class="game-card-content" style="border: 2px solid #22ff57;">
            <h2>FALLOUT LONDON</h2>
        </div>
    </a>

    <a href="fnv/" class="game-card" style="text-decoration: none;">
        <div class="game-card-bg" style="background: url('assets/fnv.jpg'); background-size: cover; background-position: center; height: 180px;"></div>
        <div class="game-card-content" style="border: 2px solid #ffcc22;">
            <h2>FALLOUT: NEW VEGAS</h2>
        </div>
    </a>

    <a href="ttw/" class="game-card" style="text-decoration: none;">
        <div class="game-card-bg" style="background: url('assets/ttw.jpg'); background-size: cover; background-position: center; height: 180px;"></div>
        <div class="game-card-content" style="border: 2px solid #5722ff;">
            <h2>TTW</h2>
        </div>
    </a>

    <a href="cyberpunk/" class="game-card" style="text-decoration: none;">
        <div class="game-card-bg" style="background: url('assets/cyberpunk.jpg'); background-size: cover; background-position: center; height: 180px;"></div>
        <div class="game-card-content" style="border: 2px solid #fdf500;">
            <h2>CYBERPUNK 2077</h2>
        </div>
    </a>

</div>

---

## 🔗 Liens Utiles
* [📺 YouTube](https://www.youtube.com/@Lilevitchi) | [🎮 Twitch](https://twitch.tv/lilevitchi) | [💬 Discord](https://discord.gg/aFJxsPC)
