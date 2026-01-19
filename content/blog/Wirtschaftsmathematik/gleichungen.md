---
title: "Gleichungen"
excerpt: "Eine Einführung in Gleichungen"
date: "2024-11-06"
tags: ["Mathe", "Gleichungen", "1. Semester"]
readTime: "10 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
---

###### **Gleichungen**

- Eine Gleichung ist eine Aussage der Form $T_1 = T_2$, wobei $T_1$ und $T_2$ Terme sind.
- **Äquivalenzumformungen:**
	- **Addition:** $T_1 = T_2 \Leftrightarrow T_1 + T_3 = T_2 + T_3$
	- **Subtraktion:** $T_1 = T_2 \Leftrightarrow T_1 - T_3 = T_2 - T_3$
	- **Multiplikation:** $T_1 = T_2 \Leftrightarrow T_1 \times T_3 = T_2 \times T_3$
	- **Division:** $T_1 = T_2 \Leftrightarrow T_1 : T_3 = T_2 : T_3$ (für $T_3 \neq 0$)
	- **Exponentialbildung:** $T_1 = T_2 \Leftrightarrow x^{T_1} = x^{T_2}$ (für $x \in \mathbb{R^+} \setminus \{1\}$)
	- **Logarithmieren:** $T_1 = T_2 \Leftrightarrow \log_x(T_1) = \log_x(T_2)$ (mit $T_1, T_2 > 0$ und $x \in \mathbb{R^+} \setminus \{1\}$)
	- **Potenzieren:**
		- $T_1 = T_2 \Leftrightarrow T_1^n = T_2^n$ (für ungerades $n \in \mathbb N$)
		- $T_1^n = T_2^n \Leftrightarrow T_1 = T_2 \vee T_1 = -T_2$ (für gerades $n \in \mathbb N$)
	- **Wurzelziehen:**
		- $T_1 = T_2 \Leftrightarrow \sqrt[n]{T_1} = \sqrt[n]{T_2}$ (für ungerades $n \in \mathbb N$)
		- $T_1 = T_2 \Leftrightarrow \sqrt[n]{T_1} = \sqrt[n]{T_2} \vee \sqrt[n]{T_1} = -\sqrt[n]{T_2}$ (für gerades $n \in \mathbb N$)
- **Lineare Gleichungen:**
	- **Form:** $a_1x + b_1y = c_1$ und $a_2x + b_2y = c_2$
	- **Verfahren zur Lösung:**
		- Additionsverfahren
		- Gleichsetzungsverfahren
		- Einsetzungsverfahren
- **Quadratische Gleichungen:**
	- **Form:** $ax^2 + bx + c = 0$ mit $a \neq 0$
	- **Verfahren zur Lösung:**
		- **Diskriminante $D$:**
			- $D > 0$: zwei reelle Lösungen
			- $D = 0$: eine reelle Lösung
			- $D < 0$: keine reelle Lösung
		- **Normalform:** $x^2 + px + q = 0$, wobei $p = \frac{b}{a}$ und $q = \frac{c}{a}$
		- **abc-Formel:** $x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
			- Diskriminante: $D = b^2 - 4ac$
		- **pq-Formel:** $x_{1,2} = -\frac{p}{2} \pm \sqrt{\left(\frac{p}{2}\right)^2 - q}$
			- Auf Normalform bringen durch Division durch $a$
			- Diskriminante: $D = \left(\frac{p}{2}\right)^2 - q$
		- **Quadratische Ergänzung:**
			- 1. Auf Normalform bringen durch Division durch $a$
			- 2. $(\frac{p}{2})^2$ auf beiden Seiten addieren
			- 3. Binomische Formeln anwenden und nach $x$ auflösen
- **Gleichungen n-ten Grades:**
	- **Verfahren zur Lösung:**
		- Auf einen Grad $n - 1$ reduzieren
		- **Polynomdivision:**
			- 1. Divisor finden (kleine Werte für $x$ einsetzen, bis $0 = 0$ stimmt)
			- 2. Divisor als $(x + (-1) \times \text{gefundene Zahl})$ festlegen
			- 3. Ersten Term der Gleichung mit Divisor multiplizieren
			- 4. Ergebnis von der Gleichung subtrahieren
			- 5. Wiederholen, bis kein $x$ mehr übrig ist
			- 6. Rest als $\frac{\text{Rest}}{\text{Divisor}}$ zum Ergebnis hinzufügen
		- Weitere Methoden: Regula falsi, Newton-Verfahren





