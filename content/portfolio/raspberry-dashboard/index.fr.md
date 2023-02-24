---
title: "Raspberry Dashboard"
tags: ["nodejs", "web"]
sourceCode: "https://github.com/Bubulleux/Raspberry-Dashboard"
thumbnail: "/screenshot_1.png"
description: "Un dashboard dans le but de monitorer un Raspberry Pi"
---

# Presentation

Raspberry Dashboard est une interface web a la base conçue pour monitoer un 
Raspberry Pi, même si l'interface peut facilement être porter sur n'importe quelle linux.
L'interface est fait avec nodejs et quelque packet npm.

## Dashboard
Le premier menu est simplement un tableaux d'informations. Il affiche certain 
informations éssentiel comme le Model du Raspberry, sont système d'explotation, 
la température et la charge du CPU. Il permet aussi d'éteindre ou de redémarer 
le Raspberry.

![Page d'informations](./screenshot_1.png)

## File Explorer
Ce panneaux est a mon avis le plus utilse et le mieux réussie. Le menu File Explorer 
implémente un gestionaire de fichier a l'interieux du navigateur. On peut y 
faire toute les actione basique et éssentiel d'un explorateur de fichier (Ajouter un dossier, 
renomer un fichier, suprimer, couper, copier, coller). L'on peut également Télécharger 
et Uploader des fichier. La dernière fonctionaliter c'est la possibiliter de crée des raccourcie.

![Page d'informations](./screenshot_3.png)

## Console
Le dernier menu est une tentative d'implement un terminal dans un navigateur.
Même si l'on peut faire quelque commande basique sont utilisation reste asser 
compliquer il est donc préferable d'utiliser le SSH.

![Page d'informations](./screenshot_2.png)

