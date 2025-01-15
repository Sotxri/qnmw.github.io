---
title: "Ableitung"
excerpt: "Eine Einführung in Ableitungen"
date: "2024-11-07"
tags: ["Mathe", "Wirtschaft", "1. Semester"]
readTime: "2 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
---
###### **Ableitungen**

- **Formeln**
	- **Differenzenquotient** 
		- $\frac{U(x_0+\Delta x)-U(x_0)}{\Delta x}$
	- **Ableitung von** $f$ **an der Stelle** $x_0$ 
		- $f^{'}(x_0) = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}$
		- Falls $f^{'}(x_0)$ existiert, heißt $f$ differenzierbar an der Stelle $x_0$
	- **Tangentengleichung**
		- $y = f^{'}(x_{0}) \times (x - x_0) + f(x_0)$

- **Allgemein**
	- Ist $f^{''}(x) > 0$, so heißt $f$ konvex (an der Stelle $x$)
	- Ist $f^{''}(x) < 0$, so heißt $f$ konkav (an der Stelle $x$)

- **Steigungsverhalten**
	- Ist $f^{'}(x) > 0$ und $f^{''}(x) > 0$, so ist $f$ _progressiv_ steigend
	- Ist $f^{'}(x) > 0$ und $f^{''}(x) < 0$, so ist $f$ _degressiv_ steigend
	- Ist $f^{'}(x) < 0$ und $f^{''}(x) > 0$, so ist $f$ abnehmend fallend
	- Ist $f^{'}(x) < 0$ und $f^{''}(x) < 0$, so ist $f$ zunehmend fallend

- **Ableitungen von ökonomischen Funktionen**
	- **Umsatzfunktion** $U(x)/U(p)$
		- Ableitung nach Menge $U^{'}(x)$: _Grenzerlösfunktion bezogen auf die Menge_
		- Ableitung nach Preis $U^{'}(p)$: _Grenzerlösfunktion bezogen auf den Preis_
		- _Grenzerlös_ gibt an, um wie viele GE der Umsatz variiert, wenn sich die Nachfrage bzw. der Preis ändert.
	- **Kostenfunktion** $K(x)$
		- Ableitung $K^{'}(x)$: _Grenzkostenfunktion_
		- Gibt an, um wieviel GE die Kosten steigen/fallen, wenn Produktionsmenge um eine ME ausgeweitet oder reduziert wird.
		- In der Regel gilt $K^{'}(x) > 0$
	- **Produktionsfunktion** $x(r)$ 
		- Ableitung $x^{'}(r)$: _Grenzproduktivität_
		- $\frac{x(r)}{r}$: _Produktivität_ (Durchschnittsertrag)
	- **Nutzenfunktion** $N(x)$ 
		- Ableitung $N^{'}(x)$: _Grenznutzen_
		- Nutzenzuwachs bei Konsum einer zusätzlichen ME eines Konsumgutes


