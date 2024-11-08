---
title: "Differentialrechnung - Eine Variable"
excerpt: "Eine Einführung in Differentialrechnung"
date: "2024-11-07"
tags: ["Mathe", "Wirtschaft", "Differentialrechnung", "1. Semester"]
readTime: "15 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
abbreviations:
  - category: "Abhängige Variablen"
    items:
      - symbol: "i"
        meaning: "Zinssatz"
      - symbol: "p"
        meaning: "Stückpreis"
      - symbol: "r"
        meaning: "Input"
      - symbol: "t"
        meaning: "Zeit"
  - category: "Unabhängige Variablen"
    items:
      - symbol: "x"
        meaning: "Output"
      - symbol: "k"
        meaning: "Stückkosten"
      - symbol: "U"
        meaning: "Umsatz"
      - symbol: "G"
        meaning: "Gewinn"
      - symbol: "K"
        meaning: "Gesamtkosten"
      - symbol: "N"
        meaning: "Nutzen"
      - symbol: "C"
        meaning: "Konsum"
      - symbol: "Y"
        meaning: "Einkommen"
---
- **Formeln**
	- **Ökonomische Funktionen**
		- Umsatz = Absatzmenge $\times$ Stückpreis
		- Gesamtkosten = Variable Kosten $\times$ Absatzmenge $+$ Fixkosten
		- Stückkosten = $\frac{\text{Gesamtkosten}}{\text{Absatz}}$
		- Gewinn = Umsatz $-$ Gesamtkosten
- **Eigenschaften**
	- **Monotonie**
		- $f(x)$ heißt _monoton steigend_, wenn für alle $x, y$: $x\leq y \Rightarrow f(x)\leq f(y)$
		- $f(x)$ heißt _streng monoton steigend_, wenn für alle $x, y$ gilt: $x<y \Rightarrow f(x)<f(y)$
		- $f(x)$ heißt _monoton fallend_, wenn für alle $x, y$ gilt: $x \leq y \Rightarrow f(x)\ge f(y)$
		- $f(x)$ heißt _streng monoton fallend_, wenn für alle $x,y$ gilt: $x<y \Rightarrow f(x)>f(y)$
	- **Symmetrie**
		- $f(x)$ heißt _achsensymmetrisch zur a-Achse_ gdw. sie der Bedingung $f(a-x) = f(a+x)$ genügt
			- a-Achse = auf der x-Achse verschobene y-Achse
		- $f(x)$ heißt _gerade_ gdw. $f(x)$ achsensymmetrisch zur y-Achse ist
		- $f(x)$ heißt _ungerade_ gdw. $f(x) = -f(-x)$ gilt
	- **Grenzwertverhalten**
		- Reele Zahl $g$ heißt _Grenzwert von_ $a_n$ (in Zeichen: $\lim_{n \to \infty } a_{n} = g$) gdw. es zu jeder reelen Zahl Epsilon>0 eine Natürliche Zahl N gibt, so dass $n > N \Rightarrow |g - a_n | < epsilon$
		- Hat eine Folge einen Grenzwert, so heißt die Folge _konvergent_. Hat sie keinen Grenzwert heißt sie _divergent_
	- **Beschränktheit**
		- Schwächerer Begriff als Konvergenz einer Funktion ist der Begriff der Beschränktheit
		- Es sei $f: D \rightarrow \mathbb{R}$ eine Funktion, $M \subset D$
			- $f$ heißt nach _unten beschränkt_ über $M$ gdw. es eine Zahl $S_u$ gibt, so dass für alle $x$ aus $M$ gilt: $f(x)\ge S_{u}$
			- $f$ heißt nach _oben beschränkt_ über $M$ gdw. es eine Zahl $S_o$ gibt, so dass für alle $x$ aus $M$ gilt: $f(x)\leq S_0$ 
			- $f$ heißt beschränkt über $M$ gdw. $f$ über $M$ nach unten und nach oben beschränkt ist
	- **Stetigkeit**
		- Stetig, wenn man den Graphen in "einem Zuge" ohne "Stift absetzen" zeichnen kann
		- Dann der Fall, wenn der Graph weder einen Pol noch eine Lücke oder Sprung besitzt
			- Pol = Parallele zur y-Achse für die die Funktion nicht definiert ist
			- Lücke = Stelle, an der die Funktion nicht definiert ist, an die sich die Funktion jedoch von rechts wie von links beliebig annähert
			- Sprung = Stelle, an der die Funktion nicht definiert ist, sowohl einen rechts als auch einen linksseitigen Grenzwert hat, diese beiden Werte jedoch nicht identisch sind
		- Eine Funktion $f:D \rightarrow \mathbb{R}$ ist stetig im Punkt $x_0$ aus $D$ gdw. $\lim_{ x \to x_{0} }f(x) = f(x_{0})$
		- Eine Funktion $f: D \rightarrow \mathbb{R}$ ist stetig auf $D$, wenn sie in jedem Punkt $x_0$ aus $D$ stetig ist
	- **Umkehrfunktion**
		- Nur bijektive Funktionen haben eine Umkehrfunktion
		- Sei $f:X\rightarrow Y$ eine bijektive Funktion. Dann heißt die Funktion $f^{-1}:Y\rightarrow X$ mit $f^{-1}(y) = x$, wobei $f(f^{-1}(y)) = x$, die Umkehrfunktion von $f$.
