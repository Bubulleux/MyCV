---
title: "Raycaster-C"
tags: ["C"]
sourceCode: "https://github.com/Bubulleux/Raycast-C"
thumbnail: "/screenshot_3.png"
description: "Une simple démo technique d’un moteur 3D similaire a celui de Doom 64."
---

[MLX]: https://github.com/42Paris/minilibx-linux
[42]: https://fr.wikipedia.org/wiki/42_(%C3%A9coles) 
[X11]: https://fr.wikipedia.org/wiki/X_Window_System
[Raycasting]: https://fr.wikipedia.org/wiki/Raycasting
[Wolfenstein 3D]: https://fr.wikipedia.org/wiki/Wolfenstein_3D
[Doom]: https://fr.wikipedia.org/wiki/Doom_64
[interpolation linéaire]: https://fr.wikipedia.org/wiki/Interpolation_lin%C3%A9aire
[Raycast-gif]: https://upload.wikimedia.org/wikipedia/commons/e/e7/Simple_raycasting_with_fisheye_correction.gif?uselang=fr

# Présentation

Raycaster-C est une petite démo d'un moteur 3D. Le programme est entièrement
écrit en C. Pour rendre les images il utilise le principe de [Raycasting] et
pour m'aider dans ma tache j'ai utilisé la librairie [MLX].  

Le programme n'a pas vraiment de but vous êtes simplement dans un monde à ciel
ouvert avec des murs qui vous entourent de différent type. Vous pouvez vous y
déplacer et regarder autour de vous.

## Fonctionnement

Le moteur fonctionne sur le principe de [Raycasting]. [Wolfenstein 3D] est
considéré comme le premier jeu ayant utilisé cette méthode de rendu mais le
[Raycasting] est plus connue pour avoir été utiliser dans le moteur de [Doom].  

Le principe est plutôt simple. L'on va créer un plan composer de segments qui
représenteront nos murs. Par la suite l'on va lancer des rayons dans la
direction vers laquelle on regarde pour chaque colonne de pixel de notre écran.
Puis l'on calcule le segment le plus proche avec lequel le rayon intersecte.
Par la suite l'on peut calculer a quelle distance est le mur de nous. Il suffit
par la suite d'un petit peu de trigonométrie pour calculer quelle taille doit
avoir le mur sur la colonne de pixel que l'on est en train de calculer, L'on va
par la suite répéter cette opération jusqu'à remplir l'écran. En fonction de la
direction du segment que l'on a intersecté l'on peut connaitre la quantité de
lumière qu'il reçoit l'on peut ensuite modifier la luminosité de la texture du
mur (assombrir ou éclaircir) pour encore rajouter un effet de 3D. Avec encore
plus de trigonométrie l'on peut ajouter une texture au sol. L'on peut aussi
facilement implémenter du brouillard en faisant une [interpolation linéaire]
entre la couleur que doit avoir le mur et la couleur du brouillard en fonction
de la distance de ce que l'on regarde.  

Avec tout c'est effet l'on obtient une impression de 3D assez satisfaisant.

![Exemple de Raycasting][Raycast-gif]

*Je ne suis pas à l'origine ce gif c'est un exemple il provient de Wikipedia*
https://commons.wikimedia.org/wiki/File:Simple_raycasting_with_fisheye_correction.gif

## MLX

[MLX] autrement appeler MiniLibX est une simple librairie permettant de
facilement créer une fenêtre dans laquelle nous pourrons par la suite afficher
des choses et récupérer les entrer clavier et souris. Elle a été créée par et
pour les étudiants de l'école [42]. Cette librairie est une version alléger de
la très connue librairie [X11] qui permet de créer des fenêtres au même titre
que [MLX] mais de façon beaucoup plus complète.

# Les limitations

À cause du fonctionnement du moteur le joueur ne peut pas modifier la hauteur
de la caméra il ne peut donc ni sauter ni bouger sa caméra verticalement.

Le second problème étant que le programme fonctionne entièrement sur le un seul
cœur processeur et non sur la carte graphique étant donné que c'était un de mes
tout premier projet écrit en C le programme n'est pas non plus très bien
optimisé. Il peut avoir quelques ralentissements sur certain ordinateur peu
puissant.

# Ce que ce projet m'a appris

Ce projet n'a pour nul intérêt de créer un outil de développement de jeux
vidéo. Mais simplement me challenger. Il m'a permis d'apprendre a utilisé le C
qui est un langage très bas niveau ce qui m'a fait comprendre beaucoup de chose
sur le fonctionnement d'un ordinateur. Il m'a aussi permis d'en apprendre plus
sur le rendu graphique qui est un sujet très vaste mais très intéressant.

# Captures d'écran

{{<gallery 
    "./screenshot_7.png"
    "./screenshot_3.png"
    "./screenshot_4.png"
    "./screenshot_5.png"
    "./screenshot_6.png"
    "./screenshot_1.png"
    "./screenshot_8.png"
>}}
