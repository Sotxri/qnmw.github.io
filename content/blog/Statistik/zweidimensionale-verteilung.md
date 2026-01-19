---
title: "Zweidimensionale Verteilung"
excerpt: "Eine Einführung in die zweidimensionale Verteilung"
date: "2024-11-09"
tags: ["Mathe", "Statistik", "2. Semester"]
readTime: "5 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
---
## Streudiagramm
- Multivariate Statistik
    - Zusammenhang mehrerer Merkmale bzw. Variablen
- Menge von Wertepaaren
    - Wertepaare werden als Punkte in einem Streudiagramm abgetragen

### Kontingenztabelle
- Stellt die gemeinsame Verteilung beider Variablen dar
- **Absolute** Häufigkeit
    - $n_{ji} = absH(X=x_i \cap Y = y_j)$
- **Relative** Häufigkeit
    - $h_{ij}=\frac{n_{ij}}{n}$

## Randverteilungen
* Fokus auf nur **eins** der Merkmale in einem Streudiagram
- $h_i = relH(H=x_i)=\frac{n_{i}}{n}, i=1,\dots,k$
und
- $h_{j} = relH(Y=y_{i})=\frac{n_{j}}{n},j,\dots,l$
* Mithilfe der Randverteilung lassen sich Mittelwert und Varianz der beiden Variablen unabhängig voneinander berechnen
* $\overline{x}= \sum_{k=1}^kh_{i}*x_{i}$
* $\overline{y} =\sum_{j=1}^lh_{j}*y_{j}$
* $s_{x}^2=\sum_{i=1}^kh_{i}*(x_{i}-\overline{x})^2$
* $s_{y}^2=\sum_{j=1}^lh_{j}*(y_{j}-\overline{y})^2$

## Bedingte Verteilung
* Betrachtung einer Variable unter der Bedingung, dass die andere auf einem Wert festgehalten wird
* $h_{i|y_{j}}=relH(H=x_{i}|Y=y_{i}),i=1,\dots,k$
  und
  $h_{j|x_{i}}=relH(Y=y_{j}|X=x_{i}),j=1,\dots,l$
- Zeile oder Spalten der Tabelle durch den ihnen entsprechenden Wert der Randverteilung dividieren
- $h_{i|y_{j}}=\frac{h_{ij}}{h_{j}}=\frac{n_{ij}}{n_{j}}$
- $h_{j|x_{i}}=\frac{h_{ij}}{h_{i}}=\frac{n_{ij}}{n_{i}}$
- Ist die gemeinsame Verteilung $h_{ij}$ von X und Y gleich dem _Produkt_ der beiden Randverteilungen $h_{ij}=h_{i}*h_{j}$ so heißten X und Y **statistisch unabhängig**
- Der Mittelwert einer Summe ist gleich der Summe der Mittelwerte
- Varianz einer Summe
  - $s_{X+Y}^2=s_{x}^2+s_{y}^2+2*\frac{1}{n}*\sum_{j=1}^n(x_{j}-\overline{x})*(y_{j}-\overline{y})$

## Kovarianz 
- $c_{XY}:=\frac{1}{n}*\sum_{j=1}^n(x_{j}-\overline{x})*(y_{j}-\overline{y})$

### Vereinfachte Berechnung
- $c_{XY}=\overline{xy}-\overline{x}\:\overline{y}$
### Über die gemeinsame Verteilung
$c_{XY}=\sum_{i=1}^k\sum_{j=1}^lh_{ij}(x_{i}-\overline{x})*(y_{i}-\overline{y})$
- Misst die _Abweichung_ vom arithmetischen Mittel
- Positive Kovarianz:
    - Gemeinsame Tendenz von X und Y
    - Große Werte von X $\rightarrow$ Große Werte von Y
- Negative Kovarianz:
    - Große Werte von X $\rightarrow$ kleine Werte von Y
- Sind Variablen _statistisch Unabhängig_ ist die Kovarianz **null**

## Korrelationskoeffizient
- $r_{XY}:=\frac{c_{XY}}{s_{X}*s_{Y}}$
- Invariant gegenüber linearen Transformationen der Variablen
    - Egal ob er in Dollar, Yen oder Euro gerechnet wird
- Invariant gegenüber der Vertauschung der Variablen
    - $r_{XY}=r_{YX}$
- Beschreibt statistische Abhängigkeit, aber **nicht** die Richtung der Abhängigkeit

## Rangkorrelationskoeffizient
- $r_{XY}^{Sp}= r_{rg(X),rg(Y)}$
- $rg(x_i)$ : Rang der Ausprägung von $x_i$
- $rg(y_i)$ : Rang der Ausprägung von $y_i$
- Wird verwendet bei Merkmalen, deren Ausprägung eine Rangfolge ausdrücken
    - Beispiel: Schulnoten
- Berechnung also Analog zum obigen Korrelationskoeffizienten, mit dem unterschied, 
dass nicht mit den gemessenen Variablenwerten ($x_i,y_i$), 
sondern mit ihren **Rangplätzen** ($rg(x_i),rg(y_i)$) gerechnet wird

## Chi-Quadrat-Koeffizient
- $QK:=\sum_{i=1}^k\sum_{j=1}^l\frac{(n_{ij}-E_{ij})^2}{E_{ij}}$
- Dient zur Messung der statistischen Abhängigkeit von **nominal** skalierten Merkmalen

## (korrigierter) Kontingenzkoeffizient
- $K^*:=\sqrt{\frac{QK*m}{(QK+n)*(m-1)}}$
- $m = min(k,l)$
    - Die Anzahl an Ausprägungen der Variablen die geringer ist
    - Beispiel:
        - Männlich Weiblich
        - Rothaarig, Blond, Schwarz etc..
        - m= 2 weil Männlich und Weiblich nur zwei Ausprägungen hat, die Haarfarbe aber mehr
- normiert den Kontingenzkoeffizient