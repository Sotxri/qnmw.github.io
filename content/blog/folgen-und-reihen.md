---
title: "Folgen und Reihen"
excerpt: "Eine Einführung in Folgen und Reihen"
date: "2024-11-06"
tags: ["Mathe", "Folgen", "Reihen", "1. Semester"]
readTime: "5 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
---

###### **Folgen und Reihen**

- **Arithmetisch (Addition/Subtraktion)**

	- **Arithmetische _Folge_:**
		- $a_t = a_1 + (t - 1) \times d$ wobei $t \geq 1$
		- **Berechnen:** 
			- $a_{\text{Position}} = a_1 + (\text{Position} - 1) \times \text{Differenz}$

	- **Arithmetische _Reihe_:**
		- $s_n = \sum_{t=1}^{n} a_t$
		- **Berechnen:** 
			- $S_n = d \times \frac{n \times (n + 1)}{2} + (a_1 - d) \times n$

- **Geometrisch (Multiplikation/Division)**

	- **Geometrische _Folge_:**
		- $g_t = g_1 \times q^{t - 1}$
		- **Berechnen:** 
			- $Wert_{\text{Position}} = Wert_1 \times \text{Faktor}^{\text{Position} - 1}$

	- **Geometrische _Reihe_:**
		- $s_n = \sum_{t=1}^{n} g_t$
		- **Berechnen:** 
			- $S_n = Wert_1 \times \frac{Faktor^n - 1}{Faktor - 1}$

	- **Sonderfall** $0 < q < 1$:
		- $\lim_{n \to \infty} s_n = g_1 \times \frac{1}{1 - q}$
