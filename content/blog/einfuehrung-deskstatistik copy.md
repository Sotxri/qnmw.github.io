---
title: "Einführung Deskriptive Statistik"
excerpt: "Eine Einführung in Deskriptive Statistik"
date: "2024-11-08"
tags: ["Mathe", "Statistik", "2. Semester"]
readTime: "5 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
---
## Statistische Variablen
* **Nominal messbare Variablen**: Nur Identität oder Differenz der Ausprägungen feststellbar (z.B. Geschlecht: 1=weiblich, 2=männlich)
* **Ordinal messbare Variablen**: Ausprägungen unterscheidbar und in Rangfolge bringbar (z.B. Tabellenplatz in einer Liga)
* **Kardinal messbare Variablen**: Ausprägungen in Rangfolge und Differenzen zahlenmäßig bestimmbar (z.B. BIP, Tabellenplatz inklusive erzielter Punkte)
    * **Verhältnisskalierte Variablen**: Absoluter Nullpunkt vorhanden, Verhältnisse bildbar (z.B. Körpergröße)
    * **Intervallskalierte Variablen**: Kein absoluter Nullpunkt (z.B. Celsius-Temperatur)

## Stichproben
* **Reine Zufallsstichprobe**: Jedes Element der Grundgesamtheit hat die gleiche Chance, gezogen zu werden.
* **Repräsentative Stichprobe**: Stichprobe ähnelt der Grundgesamtheit in der Struktur der interessierenden Merkmale.

## Urliste
* Merkmalswerte werden nach Größe geordnet.
* Absolute Häufigkeit: $n_i := absH(X = x_i)$
* Relative Häufigkeit: $h_i := relH(X = x_i) = \frac{n_i}{n}$ mit $0 < h_i \leq 1$

## Beobachtungsreihe
* Folge der $n$ Werte $x_1, x_2, ..., x_n$ mit $x_i = X(w_i)$ für $i = 1,...,n$

## Qualitative Merkmale
* Eigenschaften, deren Ausprägung nicht in Zahlen gegeben ist (z.B. Geschlecht, Rechtsform).
* Werden durch Quantifizierung in Variablen überführt.

## Quantifizierung
* Zuordnung von Zahlen zu Ausprägungen (z.B. weiblich=0, männlich=1, divers=2)

## Quantitative Merkmale
* Liegen bereits in Zahlenform vor (z.B. Temperatur).
* **Diskrete Merkmale**: Können nur endlich viele Ausprägungen annehmen (z.B. Haushaltsgröße).
* **Stetige Merkmale**: Können in einem Intervall jeden reellen Wert als Ausprägung annehmen (z.B. Körpergröße).

## Häufigkeitsfunktion

Die Häufigkeitsfunktion ist eine Funktion, die jedem Wert einer Variablen die absolute oder relative Häufigkeit seines Auftretens in einer Stichprobe zuordnet. 

* **Absolute Häufigkeit:** Die Anzahl, wie oft ein bestimmter Wert in der Stichprobe vorkommt.
* **Relative Häufigkeit:** Die absolute Häufigkeit dividiert durch die Gesamtzahl der Beobachtungen in der Stichprobe.

**Grafische Darstellung:** Die Häufigkeitsfunktion kann als Histogramm oder als Stabdiagramm dargestellt werden.

## Empirische Verteilungsfunktion

Die empirische Verteilungsfunktion (auch: Summenhäufigkeitsfunktion) gibt für jeden Wert an, wie hoch der Anteil der Beobachtungen in der Stichprobe ist, die kleiner oder gleich diesem Wert sind. 

**Eigenschaften:**
* Die empirische Verteilungsfunktion ist eine monoton steigende Funktion.
* Sie nimmt Werte zwischen 0 und 1 an.
* Sie ist rechtsseitig stetig.

**Grafische Darstellung:** Die empirische Verteilungsfunktion wird als Treppenfunktion dargestellt.
