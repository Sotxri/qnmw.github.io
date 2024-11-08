---
title: "Tilgungsrechnung"
excerpt: "Eine Einführung in Tilgungsrechnung"
date: "2024-11-07"
tags: ["Mathe", "Wirtschaft", "Tilgung"]
readTime: "5 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
abbreviations:
  - category: "Tilgung"
    items:
      - symbol: "S_0"
        meaning: "Anfangsschuld zum Zeitpunkt 0"
      - symbol: "S_t"
        meaning: "Restschuld zum Zeitpunkt t"
      - symbol: "n"
        meaning: "Kreditlaufzeit in Jahren"
      - symbol: "i"
        meaning: "Kreditzinssatz p.a. (Dezimalzahl)"
      - symbol: "A"
        meaning: "Jährliche Annuität"
      - symbol: "T"
        meaning: "Tilgungsbetrag"
      - symbol: "Z"
        meaning: "Zinsbetrag"
      - symbol: "m"
        meaning: "Anzahl der unterjährigen Zahlungs/- Verzinsungsperioden"
      - symbol: "i"
        meaning: "Kreditzinssatz p.a. (Dezimalzahl)"
      - symbol: "a"
        meaning: "Unterjährige Annuität"
      - symbol: "A_t"
        meaning: "Belastung (Zins + Tilgung) im Zeitpunkt t"
---

###### **Tilgungsrechnung**
- Dient für nicht-variable Kredite (Darlehen)
- **Tilgungsformen:**
	- **Ratentilgung:**
		- Konstante Tilgungsrate + Zinsen
	- **Annuitätentilgung:**
		- Belastung (Tilgung + Zinsen) zu jedem Zeitpunkt gleich hoch. Über die Zeit verändert sich das Verhältnis von Zinsen und Tilgung.
	- **Gesamtfällige Tilgung:**
		- Gesamter Kreditbetrag wird am Ende der Laufzeit durch eine Einmalzahlung beglichen.
- **Formeln**
	- **Annuitätenfaktor AF(n;i)** = $\frac{i}{1-q^{-n}}$
	- **Jährliche Annuität**
		- $A=S_0 \times \frac{i}{1-q^{-n}} = S_0 \times AF(n;i)$
	- **Restschuld zum Zeitpunkt** $t$ **bei jährlicher Annuität**
		- $S_t =  \stackrel{\text{Gesamtschuld bis }t}{S_0 \times q^t} - \stackrel{\text{Barwert der bis t gezahlten Annuitäten}}{A \times \frac{q^t -1}{i}}$
	- **Unterjährliche Annuität**
		- $a = S_0 \times \frac{\frac{i}{m}}{1-(1+\frac{i}{m})^{-m\times n}}$
	- **Kapitalstand bei unterjährlicher Annuität**
		- $S_{m\times n} = S_0 \times (1+\frac{i}{m})^{m\times n} - a \times \frac{(1+\frac{i}{m})^{m\times n}-1}{\frac{i}{m}}$
	- **Tilgungsrate bei Ratentilgung**
		- $T = S_0 \times \frac{1}{n} = \text{konstant}$
	- **Gesamtbelastung bei Ratentilgung**
		- $A_t = \frac{S_0}{n} \times [1+(n-t+1)\times i]$
	- **Restschuld zum Zeitpunkt** $t$ **bei Ratentilgung**
		- $S_t = S_0 \times (1- \frac{t}{n})$
