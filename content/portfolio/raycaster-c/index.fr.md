---
title: "Raycaster-C"
tag: ["C"]
sourceCode: "https://github.com/Bubulleux/Raycast-C"
thumbnail: ""
---

# Presentation

Raycast-C est une simple demo d'un moteur 3D écrit en C. Le plugin utiliser
s'appelle (mxl)[https://github.com/42Paris/minilibx-linux] c'est une librerie
simplifier de X11 elle permet simplement de crée des fenetre et d'y imprimer
des pixel. 

# Fonctionement

Comme dit dans le titre du projet le moteur fonctione sur le principe de 
[Ratcasting](https://fr.wikipedia.org/wiki/Raycasting) ce qui la methode
utiliser dans le premier doom et utiliser la premier fois dans 
[Wolfenstein 3D](https://fr.wikipedia.org/wiki/Wolfenstein_3D).  
Le principe est simple. L'on vas crée une map composer de segement se qui
représentera nos mure. Ensuite l'on vas lancer des Rayon pour chaque colone
de pixel de notre écran. Puis l'on calcule le point d'intersection entre se 
rayon et le premier mur qu'il rencontre. En connaisent ce point l'on peut par 
la suite calculer pour chaque colone de l'écrant la proportion de mur a 
afficher sur l'hauter de l'écrant et la texture a afficher. 

Il sufis par la suite de rajouter la prise en charge du clavier et de la sourie
pour déplacer la caméra. 

Le brouillard est simplement rajouter en faisent une interpolation linéaire 
entre le pixel a afficher et la couleurs du brouillard en fonction de la 
distance entre le point d'intersection et la caméra.


# Limitation

A cause du fonctionement du moteur le joueur ne peut pas modifier la hauter
de la caméra il ne peut donc ni sauter ni bouger sa caméra verticalement.


# Screenshoot
