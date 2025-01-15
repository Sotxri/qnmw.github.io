---
title: "Rentenrechnung"
excerpt: "Eine Einführung in Rentenrechnung"
date: "2024-11-07"
tags: ["Mathe", "Wirtschaft", "Rente", "1. Semester"]
readTime: "8 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
abbreviations:
  - category: "Rentenfaktor"
    items:
      - symbol: "n"
        meaning: "Anzahl der Jahre"
      - symbol: "q"
        meaning: "1 + i ; Aufzinsungsfaktor"
      - symbol: "r"
        meaning: "nachschüssige Rente"
      - symbol: "R_n"
        meaning: "Rentenendwert (Wert zum Zeitpunkt n)"
      - symbol: "k"
        meaning: "Dynamisierungsrate (z.B. 0.03)"
      - symbol: "R^{dyn}_n"
        meaning: "Rentenendwert bei Dynamisierung"
      - symbol: "REF"
        meaning: "Rentenendwertfaktor"
      - symbol: "RBF"
        meaning: "Rentenbarwertfaktor"
  - category: "Anleihen"
    items:
      - symbol: "n"
        meaning: "Gesamtlaufzeit der Anleihe"
      - symbol: "t"
        meaning: "Restlaufzeit der Anleihe"
      - symbol: "i"
        meaning: "Nominalzins"
      - symbol: "\\hat{i}"
        meaning: "Kapitalmarktzins"
      - symbol: "C_E"
        meaning: "Emissionskurs der Anleihe"
      - symbol: "C_t"
        meaning: "Kurs der Anleihe zum Zeitpunkt t"
      - symbol: "R_0^V"
        meaning: "Rentenbarwert für vorschüssige, jährliche Zahlungen"
      - symbol: "R_0^N"
        meaning: "Rentenbarwert für nachschüssige, jährliche Zahlungen"
      - symbol: "R_n^V"
        meaning: "Rentenendwert für vorschüssige, jährliche Zahlungen"
      - symbol: "R_n^N"
        meaning: "Rentenendwert für nachschüssige, jährliche Zahlungen"
  - category: "Vorschüssige / Jährliche Rente"
    items:
      - symbol: "r"
        meaning: "Unterjährige Rente"
      - symbol: "m"
        meaning: "Anzahl unterjähriger Zahlung/-Verzinsungsperioden"
      - symbol: "i"
        meaning: "Zinssatz p.a."
      - symbol: "R_{m\\times n}"
        meaning: "(=R^n_{m\\times n}) Rentenendwert für m * n unterjährige, nachschüssige Zahlungen/Zinsperioden"
      - symbol: "R_0"
        meaning: "(=R_0^N) Rentenbarwert für m * n unterjährige, nachschüssige Zahlungen/Zinsperioden"
      - symbol: "R_{m\\times n}^V"
        meaning: "Rentenendwert für m * n unterjährige, vorschüssige Zahlungen/Zinsperioden"
      - symbol: "R_0^V"
        meaning: "Rentenbarwert für m * n unterjährige, vorschüssige Zahlungen/Zinsperioden"
---

- In *gleichen* Zeitabständen eine wiederkehrende Zahlung mit *gleichem* Betrag
- **Rentenfaktoren**
	- **Rentenendwertfaktor**
		- $REF(n;i) = \frac{q^n-1}{i}$
	- **Rentenbarwertfaktor**
		- $RBF(n;i) = \frac{1-q^{-n}}{i}$
	- **Rentenendwert bei jährlichen, nachschüssigen Renten**
		- $R_n = r \times \frac{q^n-1}{q-1} = r \times \frac{q^n-1}{i} = r \times REF(n;i)$
	- **Jährliche, nachschüssige Rente bei gegebenem Rentenendwert**
		- $r = R_n \times \frac{i}{q^n-1} = \frac{R_n}{REF(n;i)}$
	- **Laufzeit bei gegebener jährlicher, nachschüssiger Rente und gegebenem Rentenendwert**
		- $n = \frac{\ln{\frac{R_n}{r} \times (1+i)}}{\ln q}$
	- **Rentenendwert bei jährlichen, nachschüssigen Renten und jährlicher **Dynamisierung** der Rente**
		- $R^{dyn}_n = r \times g^n \times \frac{(\frac{q}{g})^n-1}{\frac{q}{g}-1}$
	- **Rentenbarwert bei jährlichen, nachschüssigen Renten**
		- $R_0= r \times \frac{1-q^{-n}}{i} = r \times RBF(n;i)$
	- **Beziehung zwischen Rentenbarwert und Rentenendwert**
		- $R_0 = R_n \times q^{-n}$
		- $RBF(n;i) = REF(n;i) \times q^{-n}$
	- **Rentenbarwert bei "ewiger", jährlicher, nachschüssiger Rente**
		- $R_0^{\infty} = \lim_{n \to \infty} R_0 = \lim_{n \to \infty} r \times \frac{1-q^{-n}}{i} =^{q^{-n}\to 0}_{n \to \infty} \frac{r}{i}$
- **Anleihen**
	- **Emissionskurs einer Anleihe bei jährlich nachschüssigen Zinszahlungen**
		- $C_E = \stackrel{\text{Stückelung}}{100} \times i \times RBF(n; \hat i) + \stackrel{\text{Stückelung}}{100} \times (1+\hat i)^{-n}$
	- **Börsenkurs einer Anleihe mit Restlaufzeit** $t$ **bei jährlich nachschüssigen Zinszahlungen**
		- $C_t = 100 \times i \times RBF(t; \hat i) + 100 \times (1+\hat i)^{-t}$
	- **Jährlich nachschüssige Rente bei gegebenem Rentenbarwert**
		- $r = R_0 \times \frac{i}{1-q^{-n}} = \frac{R_0}{RBF(n;i)}$
	- **Entnahmedauer bei gegebenem Rentenbarwert und jährlich nachschüssigen Renten**
		- $n = \frac{-\ln{(1-\frac{R_0}{r} \times i)}}{\ln q}$
	- **Rentenendwert und Rentenendwertfaktor für vorschüssige Renten**
		- $R^V_n = R^N_n \times q$
		- $REF^V(n;i) = REF^N(n;i) \times q$
	- **Rentenbarwert und Rentenbarwertfaktor für vorschüssige Renten**
		- $R^V_0 = R^N_0 \times q$
		- $RBF^V(n;i) = RBF^N(n;i) \times q$
	- **Rentenbarwert bei "ewiger", vorschüssiger, jährlicher Rente**
		- $R_0^{V\infty} = q \times \frac{r}{i}$
- **Jährliche Rente**
	- **Rentenendwert für** $m \times n$ **unterjährige, nachschüssige Zahlungsperioden/Zinsperioden**
		- $R_{m \times n} = r \times \frac{(1+\frac{i}{m})^{m \times n}-1}{\frac{i}{m}}$
	- **Rentenbarwert für** $m \times n$ **unterjährige, nachschüssige Zahlungsperioden/Zinsperioden**
		- $R_0 = r \times \frac{1-(1+\frac{i}{m})^{-m \times n}}{\frac{i}{m}}$
	- **Rentenendwert für** $m \times n$ **unterjährige, vorschüssige Zahlungsperioden/Zinsperioden**
		- $R_{m \times n}^V = R_{m \times n}^N \times (1+\frac{i}{m})$
	- **Rentenbarwert für** $m \times n$ **unterjährige, vorschüssige Zahlungsperioden/Zinsperioden**
		- $R_0^V = R_0^N \times (1+\frac{i}{m})$
