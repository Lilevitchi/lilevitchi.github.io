---
hide:
  - navigation
  - toc
---

<style>
  /* Force le curseur main sur tout ce qui est cliquable */
  .hub-button, .hub-button * {
    cursor: pointer !important;
  }
</style>

<div style="position: fixed; top: 48px; left: 0; width: 100vw; height: calc(100vh - 48px); overflow: hidden; display: flex; align-items: center; justify-content: center; background-color: #000;">

    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('../assets/fo4.jpg'); background-size: cover; background-position: center; filter: blur(8px) brightness(0.5); z-index: 1;"></div>

    <img src="../assets/lile-bot-fo4.png" style="position: absolute; width: 600px; height: auto; z-index: 2; pointer-events: none; top: 18%; filter: drop-shadow(0 0 20px rgba(0,0,0,0.7));">

    <div style="position: relative; z-index: 3; text-align: center; width: 100%; padding: 0 20px; margin-top: 120px;">
        
        <h1 style="color: white; border: none; font-size: 2.2rem; font-weight: 800; margin-bottom: 60px; text-transform: uppercase; letter-spacing: 1.5px; text-shadow: 2px 2px 10px rgba(0,0,0,1);">
            Bienvenue dans le Commonwealth Moddé
        </h1>

        <div style="display: flex; gap: 150px; justify-content: center; align-items: center; flex-wrap: wrap;">

            <a href="../intro/" class="hub-button" style="text-decoration: none;">
                <div style="width: 300px; padding: 25px 10px; background: #2c2c2c; border: 2px solid #ff5722; border-radius: 8px; box-shadow: 0 10px 20px rgba(0,0,0,0.6); transition: all 0.3s ease;" 
                     onmouseover="this.style.transform='scale(1.05)'; this.style.backgroundColor='#404040'; this.style.boxShadow='0 0 30px rgba(255, 87, 34, 0.5)';" 
                     onmouseout="this.style.transform='scale(1)'; this.style.backgroundColor='#2c2c2c'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.6)';">
                    <span style="color: #ffffff; font-size: 1.3rem; font-weight: bold; text-transform: uppercase;">Guide Écrit</span>
                </div>
            </a>

            <a href="https://youtube.com/votre-video" target="_blank" class="hub-button" style="text-decoration: none;">
                <div style="width: 300px; padding: 25px 10px; background: #8b0000; border: 2px solid #ff0000; border-radius: 8px; box-shadow: 0 10px 20px rgba(0,0,0,0.6); transition: all 0.3s ease;" 
                     onmouseover="this.style.transform='scale(1.05)'; this.style.backgroundColor='#b30000'; this.style.boxShadow='0 0 30px rgba(255, 0, 0, 0.5)';" 
                     onmouseout="this.style.transform='scale(1)'; this.style.backgroundColor='#8b0000'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.6)';">
                    <span style="color: #ffffff; font-size: 1.3rem; font-weight: bold; text-transform: uppercase;">Guide Vidéo</span>
                </div>
            </a>

        </div>
    </div>
</div>
