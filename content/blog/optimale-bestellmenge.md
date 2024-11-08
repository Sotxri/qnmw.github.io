---
title: "Optimale Bestellmenge"
excerpt: "Eine Einführung in die optimale Bestellmenge"
date: "2024-11-06"
tags: ["Mathe", "Wirtschaft", "1. Semester"]
readTime: "2 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
abbreviations:
  - category: "Allgemeine Variablen"
    items:
      - symbol: "B"
        meaning: "Jahresbedarf [ME/Jahr]"
      - symbol: "l"
        meaning: "Lagerstückkosten pro Jahr [GE/Stück und Jahr](= Zins- und Lagerkostensatz mal Stückpreis)"
      - symbol: "K_f"
        meaning: "Fixe Bestellkosten pro Bestellung [GE/Bestellung]"
      - symbol: "Q"
        meaning: "Bestellmenge"
      - symbol: "Q^*"
        meaning: "Optimale Bestellmenge"
      - symbol: "z"
        meaning: "Anzahl der Bestellungen pro Jahr"
      - symbol: "K"
        meaning: "Gesamtkosten pro Jahr]"
---

Neben Beschaffungskosten gibt es
- _Bestellfixe_ Kosten:
	- variieren **nicht** mit Bestellmenge sondern **Anzahl** der Bestellvorgänge
- _Lagerkosten_: 
	- Hängen von **mengen-** und **wertmäßgen** Lagerbestand/-Dauer ab. 
Beide Kostenarten stehen im Konflikt miteinander

**Formeln**
- **Kostenfunktion** = $l \times \frac{Q}{2} + K_f \times z$ 
  - Es gilt: 
    - $B = z \times Q$
    - $z = \frac{B}{Q}$
    - $K$ ist eine Funktion von $Q$ 
  - Notwendige Bedingung für **Minimum**: $K'(Q) = \frac{l}{2} - \frac{K_f \times B}{Q^2} = 0$ 
- **Andler'sche Bestellmengenformel**
  - $Q^* = \sqrt{\frac{2 \times K_f \times B}{l}}$

