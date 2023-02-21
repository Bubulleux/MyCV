---
title: "Raycaster-C"
tags: ["C"]
sourceCode: "https://github.com/Bubulleux/Raycast-C"
thumbnail: "/screenshot_3.png"
lang: fr
---
[MLX]: https://github.com/42Paris/minilibx-linux
[42]: https://fr.wikipedia.org/wiki/42_(%C3%A9coles) 
[X11]: https://fr.wikipedia.org/wiki/X_Window_System
[Raycasting]: https://fr.wikipedia.org/wiki/Raycasting
[Wolfenstein 3D]: https://fr.wikipedia.org/wiki/Wolfenstein_3D
[Doom]: https://fr.wikipedia.org/wiki/Doom_64

# Presentation

Raycaster-C est une petit demo d'un moteur 3D. Le programe est entièrement
écrit en C. Pour rendre les images il utilise le principe de raycasting et pour
m'aider dans ma tache j'ai utiliser la librerie [MLX].  

Le programe n'a pas vraiment de but vous êtes simplement dans un monde a ciel
ouvert avec des mure qui vous entoure de différent type. 

## Fonctionement

Le moteur fonctione sur le principe de [Raycasting] ce qui la methode utiliser
dans le premier doom et utiliser la premier fois dans [Wolfenstein 3D] il est 
cepandent plus connue comme étant le moteur de [Doom]. Le
principe est simple. L'on vas crée un plan composer de segement qui
représentera nos mure. Par la suite l'on vas lancer des Rayon pour chaque colone de
pixel de notre écran. Puis l'on calcule les segement avec lesquelle
le rayon intersect. En connaisent ce point l'on peut par la
suite calculer pour chaque colone de l'écrant la proportion de mur a afficher
sur l'hauter de l'écrant et la texture a afficher. 

Il sufis par la suite de rajouter la prise en charge du clavier et de la sourie
pour déplacer la caméra. 

Le brouillard est simplement rajouter en faisent une interpolation linéaire
entre le pixel a afficher et la couleurs du brouillard en fonction de la
distance entre le point d'intersection et la caméra.

## MLX

[MLX] autrement appeler Mini Lib X est une simple librerie permetent de
facilment crée une fênetre dans laquelle nous pourons par la suite afficher des
chose et récupérer les entrer clavier et souris. Elle a été crée par par des
personne de l'école [42] c'est une librerie minimaliste de la très connue
librerie [X11] qui permet de crée des fenetre mais de façon beaucoup plus
complete.


# Limitation

A cause du fonctionement du moteur le joueur ne peut pas modifier la hauter de
la caméra il ne peut donc ni sauter ni bouger sa caméra verticalement.

# Ce que j'en

Ce projet n'a pour nule intérais de crée un outil de developement de jeux
vidéo. Mais simplement me challenger. Il ma permis d'apprendre a utiliser le C
qui est un language très bas niveau et qui permet d'en apprendre plus sur le
fonctionement d'un ordinateur. Il ma aussi permis d'en apprendre plus sur le
rendu graphique qui est un sujet très vaste.

# Screenshot

{{<gallery 
    "./screenshot_7.png"
    "./screenshot_3.png"
    "./screenshot_4.png"
    "./screenshot_5.png"
    "./screenshot_6.png"
    "./screenshot_1.png"
    "./screenshot_8.png"
>}}
