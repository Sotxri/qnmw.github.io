---
title: "Zins und Zinseszins"
excerpt: "Eine Einführung in Zins und Zinseszins"
date: "2024-11-07"
tags: ["Mathe", "Wirtschaft", "Zinsen", "1. Semester"]
readTime: "10 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
abbreviations:
  - category: "Zinsrechnung"
    items:
      - symbol: "K_0"
        meaning: "Anfangskapital"
      - symbol: "T"
        meaning: "Verzinsungsdauer in Tagen"
      - symbol: "p"
        meaning: "Zinsfuß, bezogen auf 100€ (z.B. p = 1,5 € Zinsen auf 100€)"
      - symbol: "i"
        meaning: "Zinssatz pro anno, i=p/100"
      - symbol: "Z_T"
        meaning: "Zinszahlung/- belastung für T Tage"
      - symbol: "K_T"
        meaning: "Endbestand nach T Tagen"
      - symbol: "m"
        meaning: "Anzahl der Perioden (z.B. Monate)"
      - symbol: "r"
        meaning: "Gleichmäßige Rate"
      - symbol: "K_m"
        meaning: "Endguthaben nach m Perioden"
      - symbol: "Z_m"
        meaning: "Zinsen nach m Perioden"
  - category: "Zinseszins"
    items:
      - symbol: "n"
        meaning: "Anzahl der Jahre"
      - symbol: "m"
        meaning: "Anzahl unterjähriger Zinsperioden"
      - symbol: "i"
        meaning: "Zinssatz (als Dezimalzahl)"
      - symbol: "q"
        meaning: "Zinsfaktor, q = 1 + i"
      - symbol: "K_0"
        meaning: "Anfangskapital"
      - symbol: "K_n"
        meaning: "Endkapital nach n Jahren"
  - category: "Effektiver Jahreszins"
    items:
      - symbol: "j"
        meaning: "Laufende Nummer (index) der Auszahlung eines Darlehens"
      - symbol: "j'"
        meaning: "Laufende Nummer einer Tilgung- oder Kostenzahlung"
      - symbol: "e_j"
        meaning: "Auszahlungsbetrag des Darlehens mit der Nummer j"
      - symbol: "e'_{j'}"
        meaning: "Betrag der Tilgungs- oder Kostenzahlung mit dem Index j'"
      - symbol: "K"
        meaning: "Index der letzten Auszahlung"
      - symbol: "k'"
        meaning: "Index der letzten Tilgung- oder Kostenzahlung"
      - symbol: "t_j"
        meaning: "Der in Jahren oder Jahresbruchteilen ausgedrückte Zeitabstand zwischem dem Zeitpunkt der Darlehensauszahlung mit dem Index 1 und den Zeitpunkten darauf folgender Darlehensauszahlungen mit den Nummern 2 bis k (t_1=:0)"
      - symbol: "t'_{j'}"
        meaning: "Der in Jahren oder Jahresbruchteilen ausgedrückte Zeitabstand zwischem dem Zeitpunkt der Darlehensauszahlung mit dem Index 1 und den Zeitpunkten darauf folgender Tilgungs- oder Kostenzahlungen mit den Nummern 1 bis k'"
      - symbol: "i^*"
        meaning: "Effektiver Jahrenszins"
---

###### **Zins und Zinseszins**

- **Zinsarten**

- **Abkürzungen**

- **Formeln:**
	- **Einfache lineare Verzinsung:**
		- $K_T = K_0 \times \left( 1 + i \times \frac{T}{360} \right)$

	- **Unabhängiger äquivalenter Zinssatz:**
		- $\text{Zinssatz} = \frac{\text{Skontobetrag}}{\text{Rechnungsbetrag} - \text{Skontobetrag}} \times \frac{360}{T}$

	- **Regelmäßige unterjährige Einzahlung:**
		- _Nachschüssige_ Zinszahlung (d.h. Zinszahlung am _Monatsende_):
			- $Z_m = i \times \left( K_0 + m \times r \times \frac{m - 1}{2m} \right)$
			- $K_m = K_0 \times (i + 1) + m \times r \times \left( 1 + i \times \frac{m - 1}{2m} \right)$
		- _Vorschüssige_ Zinszahlung (d.h. Zinszahlung am _Monatsanfang_):
			- $Z_m = i \times \left( K_0 + m \times r \times \frac{m + 1}{2m} \right)$
			- $K_m = K_0 \times (i + 1) + m \times r \times \left( 1 + i \times \frac{m + 1}{2m} \right)$
		- $\frac{m + \text{ oder } -1}{2m}$ = mittlere Liegezeit

	- **Jährliche Aufzinsung:**
		- $K_n = K_0 \times (1 + i) = K_0 \times q^n$

	- **Jährliche Abzinsung:**
		- $K_0 = \frac{K_n}{q^n}$

	- **Unterjährige Zinsgutschrift:**
		- $K_{m \times n} = K_0 \times \left( 1 + \frac{i}{m} \right)^{m \times n}$

	- **Unterjähriger konformer Zinssatz:**
		- Berücksichtigt Zinseszins
		- $i_k = \sqrt[m]{1 + i} - 1$

	- **Effektiver Jahreszins PangV** (nicht Klausurrelevant):
		- $\sum_{j=1}^k \frac{e_j}{(1 + i^*)^{t_j}} = \sum_{j' = 1}^{k'} \frac{e'_{j'}}{(1 + i^*)^{t'_{j'}}}$

	- **Stetige Verzinsung** (nicht Klausurrelevant):
		- Bestand nach **einem** Jahr:
			- $\lim_{m \to \infty} K_0 \times \left( 1 + \frac{i}{m} \right)^m = K_0 \times e^i$
		- Bestand nach $n$ Jahren:
			- $\lim_{m \to \infty} K_0 \times \left( 1 + \frac{i}{m} \right)^{m \times n} = K_0 \times e^{i \times n}$
