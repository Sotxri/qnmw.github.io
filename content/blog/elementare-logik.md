---
title: "Elementare Logik"
excerpt: "Eine Einführung in elementare Logik"
date: "2024-11-03"
tags: ["Mathe", "Aussagenlogik", "1. Semester"]
readTime: "2 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
---

###### **Elementare Logik**

- Logische Verknüpfung von **Aussagen** sowie Ableitung von Aussagen aus anderen Aussagen.
- **Aussagen**: Sätze (der gewöhnlichen Sprache bzw. der formalen Sprache, wie z.B. der Sprache $\mathcal L$), die **entweder** _wahr_ oder _falsch_ sind.

- Die Sprache der Aussagenlogik $\mathcal{L}$ umfasst:
	- Menge von atomaren **Aussagenvariablen**: $A, B, C, D, \ldots$
	- Menge von logischen **Verknüpfungsoperatoren (Junktoren)**: $\neg$, $\wedge$, $\vee$, $\Rightarrow$, $\Leftrightarrow$
	- Klammern: $(,)$

- **Grammatikalisch korrekte Aussagen von** $\mathcal L$ **sind (Syntax):**
	1. Alle atomaren Aussagevariablen sind (_wohlgeformte_) Aussagen von $\mathcal L$.
	2. Sind $A, B$ Aussagen von $\mathcal L$, dann auch $\neg A, (A \wedge B), (A \vee B), (A \Rightarrow B), (A \Leftrightarrow B)$.
	3. Es gibt keine weiteren (_wohlgeformten_) Aussagen von $\mathcal L$.

- **Semantik der Sprache $\mathcal L$:**
	- Funktion $V: \stackrel{\text{Menge aller Aussagen}}S \rightarrow \{w, f\}$
	- Jeder Aussage $S$ wird genau einer der beiden Wahrheitswerte $w, f$ zugeordnet und den folgenden Bedingungen entspricht:
		- $V(\neg A) = w$ genau dann, wenn $V(A) = f$
		- $V(A \wedge B) = w$ genau dann, wenn $V(A) = w$ und $V(B) = w$
		- $V(A \vee B) = w$ genau dann, wenn $V(A) = w$ **oder** $V(B) = w$ (inklusives oder)
		- $V(A \Rightarrow B) = w$ genau dann, wenn $V(A) = f$ **oder** $V(B) = w$
		- $V(A \Leftrightarrow B) = w$ genau dann, wenn $(V(A) = w$ und $V(B) = w)$ **oder** $(V(A) = f$ und $V(B) = f)$.

	- **Logisch wahre/falsche Aussage:** Immer wahr/falsch, unabhängig vom Stand der Welt. Hat in allen Zeilen den Wahrheitswert $w$ (oder $f$).
	- **Kontingente Aussage:** Abhängig vom Stand der Welt; alle anderen Aussagen, die **weder logisch wahr** noch **logisch falsch** sind.

**Beweise**:
- $A \Rightarrow B$
- $\mathrm I.\; A \rightarrow B$
- $\mathrm{II}. \;\neg B \Rightarrow \neg A \text{, das entspricht } A \Rightarrow B$
- $\mathrm{III}. \; A \wedge \neg B = C \wedge \neg C \; \upharpoonright$
