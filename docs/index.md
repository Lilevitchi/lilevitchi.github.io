# :material-tools:{ .orange-icon } Bienvenue dans le Nexus de Lilevitchi

**Plongez au cœur de l'excellence du modding.** Que vous soyez ici pour stabiliser votre jeu, transformer son visuel ou vivre une aventure totalement nouvelle sur les terres désolées, vous êtes au bon endroit. 

Ici, pas de blabla inutile : uniquement des guides précis, testés et approuvés pour garantir une expérience de jeu ultime. Choisissez votre univers et commencez la transformation.

---

<style>
    /* 1. Grille intelligente : s'adapte à la largeur de l'écran */
    .game-grid {
        display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
        gap: 20px; 
        margin: 40px 0;
    }

    /* 2. Format des cartes : finit les carrés géants sur mobile */
    .game-card {
        position: relative;
        height: 200px; /* Hauteur fixe pour mobile */
        border-radius: 12px;
        overflow: hidden;
        border: 3px solid #ff5722;
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
        background: #1a1a1a;
        text-decoration: none !important;
    }

    /* Taille plus grande pour le confort sur PC */
    @media screen and (min-width: 60em) {
        .game-card { height: 280px; }
    }

    .game-card:hover {
        transform: scale(1.05);
        box-shadow: 0 0 25px rgba(255, 87, 34, 0.7);
    }

    .game-card-bg {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        filter: blur(6px);
        transition: filter 0.5s ease;
    }

    .game-card:hover .game-card-bg {
        filter: blur(0px);
    }

    .game-card-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 10px;
    }

    /* 3. Correction du texte (Minuscules et centrage) */
    .game-card h2 {
        color: #fff !important;
        text-transform: none !important; 
        font-size: 1.5rem !important;
        font-weight: 900;
        letter-spacing: 1px;
        text-shadow: 2px 2px 15px #000;
        border: none !important;
        margin: 0 !important;
    }

    /* Style du bouton Ko-fi */
    .kofi-button {
        background-color: #ff5722;
        color: white !important;
        padding: 15px 30px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: bold;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        transition: 0.3s;
        border: 2px solid transparent;
    }
    .kofi-button:hover {
        background-color: #1a1a1a;
        border-color: #ff5722;
        box-shadow: 0 0 15px #ff5722;
    }
</style>

<div class="game-grid">
    <a href="fallout4/" class="game-card">
        <div class="game-card-bg" style="background-image: url('assets/fo4.jpg');"></div>
        <div class="game-card-overlay"><h2>Fallout 4</h2></div>
    </a>
    <a href="fallout-london/" class="game-card">
        <div class="game-card-bg" style="background-image: url('assets/london.jpg');"></div>
        <div class="game-card-overlay"><h2>Fallout London</h2></div>
    </a>
    <a href="fnv/" class="game-card">
        <div class="game-card-bg" style="background-image: url('assets/fnv.jpg');"></div>
        <div class="game-card-overlay"><h2>New Vegas</h2></div>
    </a>
    <a href="ttw/" class="game-card">
        <div class="game-card-bg" style="background-image: url('assets/ttw.jpg');"></div>
        <div class="game-card-overlay"><h2>TTW</h2></div>
    </a>
    <a href="cyberpunk/" class="game-card">
        <div class="game-card-bg" style="background-image: url('assets/cyberpunk.jpg');"></div>
        <div class="game-card-overlay"><h2>Cyberpunk 2077</h2></div>
    </a>
</div>

---

## :material-lightbulb-outline:{ .orange-icon } Le Conseil de Lile-Bot

<div class="bot-advice">
    <img src="assets/lile-bot.png" width="80">
    <div>
        <strong id="lile-bot-title">Chargement...</strong><br>
        <span id="lile-bot-tip">Lile-Bot réfléchit à une astuce...</span>
    </div>
</div>

---

## :material-coffee:{ .orange-icon } Soutenir le Travail
Si mes guides vous font gagner du temps et du plaisir de jeu, n'hésitez pas à soutenir le projet. Chaque don permet d'améliorer la qualité des contenus et de maintenir les serveurs.

<a href="https://ko-fi.com/lilevitchi" target="_blank" class="kofi-button">
    :simple-kofi: Soutenir sur Ko-fi
</a>

---

## :material-link:{ .orange-icon } Liens Utiles

[:fontawesome-brands-youtube:{ .orange-icon } YouTube](https://www.youtube.com/@Lilevitchi){ target="_blank" } | [:fontawesome-brands-twitch:{ .orange-icon } Twitch](https://twitch.tv/lilevitchi){ target="_blank" } | [:fontawesome-brands-discord:{ .orange-icon } Discord](https://discord.gg/aFJxsPC){ target="_blank" }
