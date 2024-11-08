---
title: "Investitionsrechnung"
excerpt: "Eine Einführung in Investitionsrechnung"
date: "2024-11-07"
tags: ["Mathe", "Wirtschaft", "Investition", "1. Semester"]
readTime: "5 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
---

- Dient zur Beurteilung von Investitionen
- Zahlenmäßige Darstellung, ob, wie viel und wann sich eine Investition "rechnet".
- Gilt nicht für Abschreibungen
- Interessiert nur die Einzahlungen und Auszahlungen
- Zahlungen werden einfachheitshalber als jährlich und nachschüssig betrachtet
- Unterstellung eines einheitlichen Kalkulationszinssatzes
- **Formeln**
	- Endwert (**EW**) = $\sum_{t=0}^n e_t \times q^{n-t}$
	- Kapitalwert / Nettobarwert (**NBW**) = $\sum_{t=0}^n e_t \times q^{-t}$
	- Es gilt:
		- **EW** = $q^n \times NBW$
		- **NBW** = $EW \times q^{-n}$
	- **äquivalente Annuität**
		- $A = NBW \times \frac{1}{RBF(n;i)}$
	- **Amortisationsdauer** $t^*$
		- Bis wann es sich "rechnet"
		- $\stackrel{\text{NBW bis }t^*-1}{\sum_{t=0}^{t^*-1} e_t \times q^{-t}} \leq 0 < \stackrel{\text{NBW bis } t^*}{\sum_{t=0}^{t^*} e_t \times q^{-t}}$
	- **interner Zinsfuß** $i^*$
		- $NBW(i^*) = \sum_{t=0}^n e_t \times (1+i^*)^{-t} = 0$
		- Nullstelle des Kapitalwerts des Kalkulationszinssatzes
		- Nur für Normal-Investitionen nützlich

