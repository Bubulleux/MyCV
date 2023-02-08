---
title: "Raspberry Dashboard"
tags: ["nodejs", "web"]
sourceCode: "https://github.com/Bubulleux/Raspberry-Dashboard"
thumbnail: ""
---

# Presentation

Raspberry Dashboard est une interface web a la base pour Raspberry Pi.
L'interface possède trois pannel:


- Un premier menu indiquand des information majeur sur le raspberry comme:
le model de celui ci, sont OS, sa charge CPU ou sa temperature. De boutton
permet aussi de stoper completemtn le Raspberry Pi ou de le redémarer.

- Le deuxième menu est le plus interessent, c'est un explorateur de ficher
basic mais avec toute les featurse principaux d'un explorateur de ficher comme:
la possibiliter de renomer, copier, coller, supprimer, ajouter des dossier,
uploder/downloader des fichiers ou des dossier et crée des raccourcie.

- Le dernière menu est un implément d'un terminal. L'émulation de terminal
étant compliquer et n'ayant aucune connaisence sur le sujet j'ai arreter le 
projet avant que le terminal marche corretement.

# Architecture

Le projet est assé basique il est entièrement écrit avec nodejs et fonctione 
principalement avec le socket pour la communication entre le server et le 
client.
