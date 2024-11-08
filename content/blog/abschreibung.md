---
title: "Abschreibungen"
excerpt: "Eine Einführung in Abschreibungen"
date: "2024-11-06"
tags: ["Mathe", "Wirtschaft", "Abschreibungen"]
readTime: "2 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
abbreviations:
  - category: "Allgemeine Variablen"
    items:
      - symbol: "n"
        meaning: "Nutzungsdauer"
      - symbol: "t"
        meaning: "Zeitpunkt (t=1,2,3,...,n)"
  - category: "Abschreibungswerte"
    items:
      - symbol: "K_0"
        meaning: "Anschaffungswert"
      - symbol: "K_t"
        meaning: "Buchwert nach t Jahren"
      - symbol: "K_n"
        meaning: "Wert am Ende der Nutzungsdauer"
  - category: "Abschreibungsfaktoren"
    items:
      - symbol: "a"
        meaning: "Abschreibungssatz (z.B. 25% = 0.25)"
      - symbol: "d"
        meaning: "Degressionsbetrag bei arithmetisch-degressiver Abschreibung"
---

###### **Abschreibungen**

- **Formeln:**

	- **Geometrische-Degressive Abschreibung:**
		- Abschreibungsbetrag im Jahr $t$: $a_t = K_0 \times (1 - \alpha)^{t - 1} \times \alpha$
		- Restwert nach $t$ Jahren: $K_t = K_0 \times (1 - \alpha)^t$

	- **Lineare Abschreibung:**
		- Abschreibungsbetrag im Jahr $t$: $a_t = \frac{K_0}{n}$
		- Restwert nach $t$ Jahren: $K_t = K_0 - t \times a_t$

	- **Arithmetisch-Degressive Abschreibung:**
		- Abschreibungsbetrag im Jahr $t$: $a_t = (n - t + 1) \times \Delta d$
		- Degressionsbetrag: $\Delta d = \frac{\frac{K_0}{n \times (n + 1)}}{2}$
