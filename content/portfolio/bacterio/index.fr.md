---
title: "Bacterio"
tags: ["Unity", "Csharp"]
sourceCode: "https://github.com/Bubulleux/Bacterio"
download: "https://github.com/Bubulleux/Bacterio/releases/latest"
thumbnail: "/screenshot_2.png"
description: "Un petit jeux fait en 48H qui reprend les code des jeux .IO"
---

[Unity]: https://fr.wikipedia.org/wiki/Unity_(moteur_de_jeu)
[Tuto Unity FR]: https://www.tutounity.fr/index.php

# Présentation

Bacterio c'est un petit jeu crée sous [Unity] en 48h à location de la Game Jam
2020 de [Tuto Unity FR].

## Le principe du jeu

Le thème de la Game Jam était: "**Vous ne commencez avec rien**"

J'ai donc décidé de faire un jeu style ".io" où le joueur est une bactérie et
doit évoluer en tuent d'autre bactérie. Le joueur apparait donc dans un monde
vu de haut où des cubes verts sont réparties sur le sol. Ces cubes verts
représentent de l'expérience pour le joueur et lui permet d'améliorer sa
bactérie de façon à tuer des bactéries pour avoir plus d'expérience et pouvoir
tuer encore plus de bactérie.

À cause du temps limiter de 48h et de faite que j'étais seule sur le jeu. Je
n'ai pas eu le temps d'implémenter un multijoueur donc les autres bactéries du
monde sont jouer par des robots qui ont plusieurs comportements possibles sois
ils vont venir au contact du joueur, mais ils auront maximisé leur vie. Soit
ils seront plutôt à long distance et dans ce cas-là ils auront maximisé leur
attaque et leur vitesse.

# Captures d'écran

{{<gallery
    "./screenshot_1.png"
    "./screenshot_2.png"
>}}

{{< video "./gameplay.mp4" >}}
