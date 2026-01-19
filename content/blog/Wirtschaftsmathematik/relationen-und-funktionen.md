---
title: "Relationen und Funktionen"
excerpt: "Eine Einführung in Relationen und Funktionen"
date: "2024-11-04"
tags: ["Mathe", "Relationen", "Funktionen", "1. Semester"]
readTime: "8 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
---


###### **Relationen und Funktionen**

- **Relation Erklärung**
	- Beziehungen zwischen _Objekten_ derselben oder verschiedener **Mengen**.
	- Eine Relation $R$ ist bekannt, wenn _alle_ Objekte bekannt sind, die zueinander in der **Beziehung** $R$ stehen.
	- Reihenfolge spielt eine Rolle, da die Beziehung zwischen den Objekten nicht zwangsläufig umgekehrt gelten muss.
	- Zusammenfassung der Zahlen in **geordnete n-Tupel**:
		- $\langle x_1 , \dots , x_n \rangle$
		- n-Tupel aus _zwei_ Elementen heißen **geordnete Paare**.
		- Beispiel:
			- $\mathbb{N} \times \mathbb{N} = \{\langle n,m \rangle \mid n \in \mathbb{N} \wedge m \in \mathbb{N} \} = \{\langle 2,4 \rangle, \langle 3,4 \rangle, \langle 1,2 \rangle, \langle 1,3 \rangle, \dots\}$
- **Eigenschaften von Relationen**
	- _Reflexiv_: 
		- $R$ heißt reflexiv genau dann, wenn für alle $x \in A$ gilt: $\langle x,x \rangle \in R$.
		- Alle Elemente stehen immer mit sich selbst in Beziehung.
	- _Symmetrisch_: 
		- $R$ ist symmetrisch genau dann, wenn für alle $x, y \in A$ gilt: $\langle x,y \rangle \in R \Rightarrow \langle y,x \rangle \in R$.
		- Zwei Elemente einer symmetrischen Relation stehen immer gegenseitig in Beziehung.
	- _Transitiv_:
		- $R$ ist transitiv genau dann, wenn für alle $x, y, z \in A$ gilt: $\langle x,y \rangle \in R \wedge \langle y,z \rangle \in R \Rightarrow \langle x,z \rangle \in R$.
		- Die Elemente einer transitiven Relation stehen immer in einer Dreiecksbeziehung zueinander.
	- _Äquivalenzrelationen_:
		- $R$ heißt Äquivalenzrelation, wenn $R$ reflexiv, symmetrisch und transitiv ist.
	- _Irreflexiv_:
		- $R$ ist irreflexiv genau dann, wenn für alle $x \in A$ gilt: $\langle x,x \rangle \notin R$.
		- Elemente einer irreflexiven Relation stehen niemals mit sich selbst in Beziehung.
	- _Antisymmetrisch_:
		- $R$ ist antisymmetrisch genau dann, wenn für alle $x, y \in A$ gilt: $\langle x,y \rangle \in R \Rightarrow \langle y,x \rangle \notin R$, es sei denn, $x = y$.
		- Zwei Elemente einer antisymmetrischen Relation stehen nicht wechselseitig in Beziehung, außer es handelt sich um die gleichen Elemente.
- **Funktion Erklärung**
	- $R$ ist eine _Funktion_, wenn $R$ eine Relation auf den Mengen $A_1, \dots , A_n$ ist und für alle $x_1 \in A_1, \dots , x_{n-1} \in A_{n-1}, y, z \in A_n$ gilt:
		- $\langle x_1, \dots , x_{n-1}, y \rangle \in R \wedge \langle x_1, \dots , x_{n-1}, z \rangle \in R \Rightarrow y = z$.
	- **Symbolisiert**:
		- $f: \stackrel{\text{Definitionsbereich}}{A_1 \times \dots \times A_n} \rightarrow \stackrel{\text{Zielbereich}}{B}$
		- Die _Teilmenge_ $Y$ von $B$, für die gilt, dass zu jedem $y$ aus $Y$ ein $x = (x_1, \dots , x_n)$ aus $A_1 \times \dots \times A_n$ existiert mit $f(x_1, \dots , x_n) = y$, heißt **Wertebereich**.
		- Sind alle $A_i$ und $B$ gleich $\mathbb{R}$, dann heißt $f$ eine **reelle Funktion**.
- **Eigenschaften von Funktionen**
	- _Injektiv_:
		- Für alle $x_1, y_1 \in A_1, \dots , x_n, y_n \in A_n$ gilt: $f(x_1, \dots , x_n) = f(y_1, \dots , y_n) \Rightarrow x_1 = y_1 \wedge \dots \wedge x_n = y_n$.
		- Umgangssprachlich: Ein x bildet _höchstens_ auf ein y ab.
	- _Surjektiv_:
		- Zu jedem $y \in B$ existieren $x_1 \in A_1, \dots , x_n \in A_n$, sodass $f(x_1, \dots , x_n) = y$.
		- Umgangssprachlich: Ein y wird von _mindestens_ einem x abgebildet.
	- _Bijektiv_:
		- Sowohl _injektiv_ als auch _surjektiv_.

