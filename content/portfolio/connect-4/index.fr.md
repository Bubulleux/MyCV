---
title: "Connect 4 IA"
tags: ["C++"]
sourceCode: "https://github.com/Bubulleux/Connect4-ia-Cpp"
thumbnail: "/screenshot_1.png"
description: "Une IA qui joue au Puissance 4"
---

[Minimax]: https://fr.wikipedia.org/wiki/Algorithme_minimax
[Table de hachage]: https://fr.wikipedia.org/wiki/Table_de_hachage
[Puissance 4]: https://fr.wikipedia.org/wiki/Puissance_4

# Présentation

Connect 4 AI est un petit projet écrit en C++. Comme dit dans le titre le
projet est une IA qui joue au jeu du [Puissance 4]. Le Puissance 4 se jouent en
un contre un, les deux joueurs joue chacun leur tour en faisant tomber un jeton
dans une colonne du tableau de jeux. La première personne qui arrive a aligné 4
jetons gagne. 

![Image d'un tableau de Puissance 4](./connect_4_ilustration.png)

*Image venant de Wikipedia.*

Le fonctionnement du programme est basée sur l'algorithme [Minimax].

# Le fonctionnement de Minimax

Le programme va premièrement calculer touts les coups possibles après un
certain nombre de coup ce qui représente très vite une grande quantité de coup.
Par exemple pour 7 coups jouer le nombre de jeux disponible est de 7⁷ sois
environ 800 000 jeux.

La deuxième étape va être de déterminer quel est le meilleur coup a en
commencent par les coups le plus profond est en remontent dans l'arbre en
déterminant a chaque coup qu'elle est le meilleur pour le joueur qui joue.

# Comment améliorer le programme

Pour améliorer le programme et le rendre plus performant il nous est offert
plusieurs optimisations possibles.

- L'on peut premièrement rendre le programme multi-cœur cette amélioration est
  basique mais très compliqué a implémenté, car l'on ne travaille pas sur un
  problème avec données isoler. Ici l'on travaille avec un arbre de donner ou
  chaque nœud est relatif a sont parents.

- La deuxième optimisation vient du faîte que l'on calcule souvent 2 fois le
  même état de jeu, car l'on peut facilement arriver a un même état en
  simplement jouent les coups dans un ordre différent. Pour cela on peut
  stocker chacun des états dans une [Table de hachage] mais cela implique des
  problèmes si l'on doit en même temps faire tourner le programme sur plusieurs
  cœurs du processeur.

- La dernière optimisation est nullement négligeable c'est le faîte de
  sélectionner certain état de jeux qui paraissent prometteurs pour leur donner
  davantage de temps de calcul et éviter de passer trop de temps avec certain
  coups qui non aucun avenir. Le problème avec ça c'est que l'on ne peut pas
  savoir si un coup est prometteur ou non sans avoir pris de temps a le
  calculer. Certain coups paraissent mauvais peuvent en réalité être très bons
  et vice versa. Ils font donc éliminer rapidement mais sans trop le faire.

# Démonstration

L'interface console n'est pas du tout fini est et surtout le pour le débogage.
Mais voici a quoi ressemble une partie contre l'IA: 
[Fichier console](./console.txt)
