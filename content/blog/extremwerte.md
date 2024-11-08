---
title: "Extremwerte"
excerpt: "Eine Einführung in Extremwerte"
date: "2024-11-07"
tags: ["Mathe"]
readTime: "8 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
---

**Bestimmung von Maxima oder Minima**
Betriebsoptimum oder Betriebsminimum, Maximierung des Umsatzes, Maximierung des Gewinns

**Minimum/Maximum**
- Notwendige Bedingung für Extremwert an der Stelle $x^*$: $f^{'}(x^*) = 0$
- Hinreichende Bedingung
	- Minimum: $f^{''}(x^*) > 0$
	- Maximum: $f^{''}(x^*) < 0$

- **Vorgehen**
	- Erste und zweite  Ableitung von $f$ berechnen
	- Nullsetzen der 2. Ableitung und Ermittlung der Nullstellen
	- Nachprüfen, ob Nullstellen im ökonomisch sinnvollen Definitionsbereich liegen
	- Einsetzen der nach Schritt 3 verbliebenen Nullstellen in die 2. Ableitung und Prüfung, ob Minima oder Maxima
	- Einsetzen des Wertes aus Schritt 4 in die Grundfunktion zur Bestimmung des $y$-Wertes der Funktion

**Wendepunkt**
- Notwendige Bedingung für Wendepunkt an der Stelle $x_w$: $f^{''}(x_w) = 0$
- Hinreichende Bedingung für Wendepunkt an der Stelle $x_w$: $f^{'''}(x_w) \neq 0$

- **Vorgehen**
	- Zweite und Dritte Ableitung von $f$ berechnen
	- Nullsetzen der 2. Ableitung und Ermittlung der Nullstellen
	- Nachprüfen, ob Nullstellen im ökonomisch sinnvollen Definitionsbereich liegen
	- Einsetzen der nach Schritt 3 verbliebenen Nullstellen in die 3. Ableitung und Prüfung, ob es sich um Wendepunkte handelt
	- Einsetzen des Wertes aus Schritt 4 in die Grundfunktion zur Bestimmung des $y$-Wertes der Funktion

**Newton-Verfahren**
- Dient zur Bestimmung von Nullstellen von höhergradigen Polynomfunktionen

- **Formeln**
	- Startpunkt: $(x_{1}, f(x_{1}))$
	- Steigungsdreieck: $f^{'}(x_1) = \frac{f(x_1)}{x_1 - x_2} \Leftrightarrow x_2 = x_1 - \frac{f(x_1)}{f^{'}(x_1)}$
	- Schritt $j$: $x_{j+1} = x_j - \frac{f(x_j)}{f^{'}(x_j)}$ für $j = 1, 2, 3, \dots$
