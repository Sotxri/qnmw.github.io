---
title: "Mengen und Zahlenmengen"
excerpt: "Eine Einführung in Mengen und Zahlenmengen"
date: "2024-11-02"
tags: ["Mathe", "Mengen", "1. Semester"]
readTime: "5 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
---

###### **Mengen und Zahlenmengen**

- **Symbole**
	- $\in \, = \text{ist Element von}$
	- $\notin \, =  \text{ist NICHT Element von; alternativ: } \; \neg(x\in M)$
	- $\emptyset = \text{leere Menge; alternativ: }\{x:x\neq x\}$
- **Aufbau**
	- Deskriptive/Beschreibende Schreibweise: $$A =  \stackrel{\text{x ist Element von der Menge } \mathbb N\text{ für das gilt}}{\{x \in \mathbb N}: \stackrel{\text{es existiert EIN y in der Menge } \mathbb{N}}{\exists y \in \mathbb N :} \; \stackrel{\text{für das gilt }y^2 = x}{y^2=x}\; \stackrel{und}\wedge   \;\stackrel{\text{y größer-gleich 2}}{y \geq 2}\}$$
	- Aufzählende Schreibweise: $A = \{4,9,16,25,...\}$
- **Definitionen**:
	- **Gleichheit**: 
		- Menge A und Menge B heißen **gleich**, wenn sie genau dieselben _Elemente_ beinhalten.
		- Beispiel: $$A = \{2^2,3^2,4^2\},\; B=\{4,9,16\} ,\; \text{dann ist } A = B$$
	- **Teilmenge**:
		- Menge A heißt **Teilmenge** einer Menge B genau dann, wenn _alle_ Elemente von A auch Elemente von B sind.
		- Beispiel: $$A = \{1,2,3,4,5,6,7\},\; B = \{2,3,4,5\},\; \text{dann ist } B \subset A$$
	- **Potenzmenge**:
		- Menge P(A) aller **Teilmenge** M einer Menge A.
		- Beispiel: $$A = \{1,2,3\}, \text{dann ist } P(A)= \{\{\},\{1\},\{2\},\{3\},\{1,2\},\{1,3\},\{2,3\},\{1,2,3\}$$
		- Tipp: $\text{Wenn} \; n = \text{Anzahl der Elemente von A, dann ist }2^n \text{Anzahl der Menge von P(A)}$
	- **Durchschnitt**
		- Menge aller Elemente, die **sowohl** Elemente von A **als auch** Element von B sind.
		- Wenn A und B **keine** gemeinsamen Elemente enthalten, ist der Durchschnitt die _leere Menge_. A und B heißen dann "_disjunkt_".
		- Beispiel: $$A = \{1,2,3,4\},\; B=\{3,4,5,6\},\; \text{dann ist } A\cap B = \{3,4\}$$
	- **Vereinigung**
		- Menge aller Elemente, die **genau** alle Elemente von A und B enthält, und sonst keine.
		- Beispiel: $$A = \{1,2,3\}\; B = \{4,5\}, \text{dann ist }A \cup B = \{1,2,3,4,5\}$$
	- **Differenzmenge**
		- Menge aller Elemente, welche Element von Menge A, aber nicht von B sind.
		- Beispiel: $$A = \{1,2,3,4\},\;B = \{3,4\}\;,\text{dann ist }A\setminus B = \{1,2\}$$
		- Die Menge $\overline A = G \setminus A$ heißt die **Komplementmenge** von A (in G).
- **Rechenregeln**:
	- Kommutativgesetze
	$$
	A \cap B = B \cap A \\
	A \cup B = B \cup A
	$$
	- Assoziativgesetze
	$$
	A \cap (B\cap C) = (A\cap B)\cap C \\
	A \cup (B\cup C) = (A\cup B)\cup C
	$$
	- Distributivgesetze
	$$
	A\cup(B\cap C) = (A\cup B) \cap (A\cup C) \\
	A \cap (B\cup C) = (A \cap B) \cup (A\cap C)
	$$
	- De-Morgansche Regeln
	$$
	A\setminus(B\cap C) = (A\setminus B) \cup (A\setminus C) \\
	A \setminus (B\cup C) = (A\setminus B) \cap (A\setminus C) \\
	\overline{A \cap B} = \overline A \cup \overline B \\
	\overline{A \cup B} = \overline A \cap \overline B
    $$
- **Intervalle** $$\text{Seien }a,b\in \mathbb{R}\text{ mit } a<b\text{, dann sind:}$$
  - _abgeschlossenes_ Intervall: $$[a,b] = \{x \in \mathbb{R}: a \leq x \leq b\}$$
  - _offenes_ Intervall: $$(a,b)=\{x \in \mathbb{R}: a < x < b\}$$
  - _halboffenes_ Intervall: $$(a,b] = \{x \in \mathbb{R}: a < x \leq b\}$$
