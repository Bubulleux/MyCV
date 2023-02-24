---
title: "Connect 4 IA"
tags: ["C++"]
sourceCode: "https://github.com/Bubulleux/Connect4-ia-Cpp"
thumbnail: "/screenshot_1.png"
---

[minimax]: https://fr.wikipedia.org/wiki/Algorithme_minimax

# Presentation
Connect 4 ai est un petit projet écrit en C++. Comme dit dans le titre
le projet est une IA de du jeux puissance 4. Elle est baser sur l'algoritme
[minimax].

# Le fonctionnement

Le programme vas premièrement calculer tout les coup possbile après un certain nombre
de coup ce qui représent très vite une grande quantiter de coup. Par exemple
pour 7 coup jouer le nombre de jeux disponible est de 7⁷ sois envrion 800 000
jeux.

La deuxième étape vas être de déterminer quel est le meilleur coup a 
en commencent par les coups le plus pronfond est en remontent dans l'arbre
en determinant a chaque coup qu'elle est le meileur pour le joueur qui joue.

# Comment améliorer le programe

Pour améliorer le programme et le rendre plus performant il nous êtes offer 
plusieur optimization possible.
- L'on peut premièrement rendre le programme multi-cœur cette amélioration est 
basique mais très compliquer a implémenter car l'on ne travaille par sur un 
problème avec données isoler. Ici l'on travaille avec un arbre de donner ou 
chaque nœux est relatif a sont parent.
- Le deuxième optimization viens du faite que l'on calcule souvent 2 fois le 
même état de jeu, car l'on peut facilement arriver a un même état en simplement jouent 
les coups dans un ordre différent. Pour cela on peut stocker chaqu'un des état
dans une Hash Map mais cela implique des problèmes si l'on doit en même temps
faire tourner le programme sur plusieur cœurs du proceceur.
- La dernière optimization est nullement négligable c'est le faite de selectionner
certain état de jeux qui parresse prometeur pour leur donner d'aventage de temps 
de calcule et éviter de passer trop de temps avec certain coups qui non aucun avenir.
Le probleme avec ça c'est que l'on ne peut pas savoir si un coups est prometeur ou non 
sans avoire prix de temps a le calculer. Certain coups parressent mauvais peuvent en réaliter 
être très bon et vis versa. Il font donc éliminer rapidement mais sans trop le faire.

# Fonctionnement de l'interface console

L'interface n'est pas très simple a lire mais voici quand même sont fonctionnement

```console
--------------------------
1: 1(635692)      <- Arbre du profondeur de deux avec:
        1: AW1(8)    {numéro du coups}: {score du coups}({sous coups calculer})
        2: 1(42005)
        3: 1(149319)
        4: 4(90353)
        5: 13(17433)
        6: 5(140476)
        7: 6(196097)
2: 4(1312803)
        1: 13(130250)
        2: 4(372542)
        3: 10(209344)
        4: 8(124829)
        5: AW3(378)
        6: 14(210312)
        7: 14(265147)
3: 2(847024)
        1: 10(123788)
        2: 2(54821)
        3: 6(114098)
        4: 4(121339)
        5: AW7(19576)
        6: 7(176620)
        7: 10(236781)
4: 5(458327)
        1: 13(67786)
        2: 6(32586)
        3: 5(115325)
        5: AW7(11981)
        6: 7(95471)
        7: 13(135177)
5: 5(1550175)
        1: 17(211360)
        2: 9(282291)
        3: 6(233110)
        4: 12(152768)
        5: 5(190480)
        6: 7(172247)
        7: 11(307918)
6: -1(1531072)
        1: 9(229142)
        2: -1(70914)
        3: 4(287985)
        4: 6(167285)
        5: 6(24132)
        6: 2(370765)
        7: 8(380848)
7: -3(1214824)
        1: 4(216216)
        2: -2(63877)
        3: -3(248030)
        4: 1(157800)
        5: 9(23036)
        6: 3(214817)
        7: -1(291047)

--------------------------
XXOXXO__OXOO___XOXX___XXOO____OOX____OX___ <- "Code" de l'état de jeux.
                                              Il sert a pouvoirs facilement identifer de coups.
    \/
|  |  |◯ |⬤ |  |  |  |      <- État du jeux le plus profond si tout le monde joue
|  |  |◯ |◯ |⬤ |  |  |         parfaitement.
|  |⬤ |⬤ |◯ |◯ |  |  |
|  |⬤ |◯ |⬤ |⬤ |  |  |
|  |◯ |⬤ |◯ |◯ |  |  |
|⬤ |⬤ |◯ |⬤ |⬤ |◯ |  |
 1  2  3  4  5  6  7
5, 5,1,
**La ligne si dessous montre le déroulement de jeux obtimal. 
{coups a jouer}:{score}({socre naife}**
4:5(3),     3:5(6),     5:5(-1),     5:5(0),     5:5(-6),     5:5(7),     5:5(-9),     3:5(3),     2:5(-2),     5
5: 5,   4: 5,   2: 4,   3: 2,   1: 1,   6: -1,   7: -3, <- Le score attendue pour chaqu'un des coups jouer
5 <- Score actuelle
6.69817 <- Temps de calcule en seconde
XXOX_O__OXO____XOX_____XO______O______X___

          \/
|  |  |  |⬤ |  |  |  |    <- Jeux actuelle
|  |  |  |◯ |  |  |  |
|  |  |⬤ |◯ |  |  |  |
|  |⬤ |◯ |⬤ |  |  |  |
|  |◯ |⬤ |◯ |  |  |  |
|⬤ |⬤ |◯ |⬤ |  |◯ |  |
 1  2  3  4  5  6  7
Board Score: 6
 Where do you play? 6
 ```
[Console entière](./console.txt)
