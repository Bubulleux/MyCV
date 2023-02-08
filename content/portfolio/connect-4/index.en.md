---
title: "Connect 4 IA"
tags: ["C++"]
sourceCode: "https://github.com/Bubulleux/Connect4-ia-Cpp"
thumbnail: ""
---

# Presentation
Connect 4 ai est un petit projet écrit en c++. Comme dit dans le titre
le projet est une IA de du jeux puissance 4. Elle est baser sur l'algoritme
[minimax](https://fr.wikipedia.org/wiki/Algorithme_minimax).

# Le principe
L'ia vas premièrement calculer tout les coup possbile après un certain nombre
de coup ce qui représent très vite une grande quantiter de coup. Par exemple
pour 7 coup jouer le nombre de jeux disponible est de 7^7 (envrion 800 000)
jeux. La deuxième étape vas être de déterminer quel est le meilleur coup a 
en commencent par les cout le plus pronfond est en remontent dans l'arbre
en determinant a chaque coup qu'elle est le meileur pour le joueur qui joue.

# Comment améliorer le programe
Les façon d'améliter le programe sont multiple mais les principaux sont:
- l'omtimisation basique la ram utiliser par le programe a été plus que 
diviser par deux après avoire réglé tout les problème de fuite de mémoire et
avoir changer tout les varible en intéger en des type qui demande moins de ram
comme des short ou des char.
- L'autre amélioration est de favoriser les coup les plus prometeur. Car cela
ne sert a rien de continuer a calculer un coup qui ne menera a rien. Tout le 
souci de cetter amélioration c'est qui le ne faut pas éliminer des coup qui 
parresse mauvais alors qu'il sont finalement très bon mais il ne faut pas 
non plus garder des coup mauvais trop longtemps.
- Une autre amélioration majeur est de threader le programe pour éviter qu'il 
ne tourne que sur un seul coeur de proceceur.
