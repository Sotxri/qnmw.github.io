---
title: "Maßzahlen für statistische Verteilungen"
excerpt: "Eine Einführung in Maßzahlen für statistische Verteilungen"
date: "2024-11-08"
tags: ["Mathe", "Statistik", "2. Semester"]
readTime: "5 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
---
# Maßzahlen zur Beschreibung statistischer Verteilungen

## Arithmetisches Mittel
* $\overline{x} := \frac{1}{n}\sum_{i=1}^nx_i$
* Summe aller Einzelwerte dividiert durch die Anzahl der Werte

## Konzentrationsmaße
* Messen die Ungleichmäßigkeit der Verteilung einer Größe auf die Merkmalsträger.
* **Lorenzkurve**: Grafische Darstellung der Konzentration.
* **Gini-Koeffizient**: Maßzahl für die Konzentration, berechnet als Fläche zwischen der Lorenzkurve und der Gleichverteilungsgeraden.

## Median
* $x_{Med} := x_{[0,5]}$
* Wert, der die sortierte Datenreihe in zwei Hälften teilt.
* 50% der Werte sind kleiner oder gleich dem Median, 50% sind größer oder gleich.

## Modus
* $x_{Mod} := x_i$ mit $n_i = max$
* Wert, der am häufigsten in der Datenreihe vorkommt.

## Quantile
* $H(x_{[q]}) = q$
* $x_{[q]} = H^{-1}(q)$
* Ist $n$ der Umfang einer statistischen Reihe mit den der Größe nach geordneten und nummerierten Werten, und erweist sich das Produkt $n \cdot q$ als eine **ganze** Zahl, so ist 
  * $x_{[q]}=\frac{1}{2}(x_{nq}+x_{nq+1})$
* Ist $n \cdot q$ hingegen _keine_ ganze Zahl, so nimmt man die nächst größere Ganze Zahl
* Falls das Minimum $x_{\text{min}}$ oder das Maximum $x_{\text{max}}$ sehr weit außen liegt, so dass ein Box-Plot unter Erhaltung des Maßstabs nicht möglich ist, so verwendet man sogenannte Zäune um die länge des Box-Plots an der jeweiligen Seite zu kürzen.

* Zäune berechnen sich wie folgt:
* $z_{\text{unten}} = x_{[0,25]} - 1,5 \cdot \text{IQA}$ 
* $z_{\text{oben}} = x_{[0,75]} + 1,5 \cdot \text{IQA}$ 

## Streuungsmaße

* **Spannweite**
  * $X_{max}:= x_{max} - x_{min}$

* **Mittlere absolute Abweichung**
  * $MAA := \frac{1}{n}\sum_{i=1}^n|x_i-\overline{x}|$ 
  * Mittelwert der Abweichung der Werte von ihrem arithmetischen Mittel

* **Mittlerer Quartilsabstand**
  * Werte nach Größe ordnen
  * 25% aller Werte links von $Q_1$ 
  * 25% aller Werte zwischen $Q_1$ und $Q_2$ 
  * 25% aller Werte zwischen $Q_2$ und $Q_3$
  * 25% aller Werte rechts von $Q_3$
  * Mit den Abständen zwischen de Quartilswerten (**Interquartilsabstände**) den mittleren Quartilsabstand berechnen:
    - $MQA := \frac{(Q_3-Q_2+(Q_2-Q_1)}{2}$
    - = $\frac{Q_3 - Q_1}{2}$ 
    - = $\frac{IQA}{2}$ 

* **(Empirische) Varianz**
  * $s^2_x = \frac{1}{n}\sum_{j=1}^n(x_j - \overline{x})^2$ 

  * Vereinfacht: $\overline{x^2} - \overline{x}^2$ 

* **Standardabweichung**
  * $s_x = +\sqrt{s_x^2} = +\sqrt{\frac{1}{n}\sum_{j=1}^n(x_j - \overline{x})^2}$ 

* **Streckung**
  * Wenn **alle** Werte einer Variablen X mit einer konstanten Faktor _b_ multipliziert werden, multipliziert sich die Varianz mit dem _Quadrat_ dieses Wertes
  * $y_j = b * x_j$ für alle $j=1,...,n$ folgt:
    - $s_y^2 = b^2 * s_x^2$ und $s_y = |b| * s_x$

* **Gesamtvarianz**
  * $s^2_{ges} = \overbrace{\frac{1}{n}\sum_{j=1}^mn_js_j^2}^{\text{Mittelwert der Varianzen}}+\overbrace{\frac{1}{n}\sum_{j=1}^mn_j(\overline{x}_j-\overline{x})^2}^{\text{Varianz der Gruppenmittelwerte}}$

* **Steinerscher Verschiebungssatz**
    - Für jedes konstante d gilt:
        - $s_x^2 = \frac{1}{n}\sum{(x_j-\overline{x})^2} = (\frac{1}{n}\sum(x_j-d)^2) - (\overline{x}-d)^2$

* **Variationskoeffizient**
    - $VK_X= \frac{S_X}{|\overline{x}|}$
    - Dient zur Messung der **Volatilität eines Aktienkurses**
    - Dient als _Schätzwert_ für das künftige Risiko einer Anlage in die Aktie

## Geometrisches Mittel
* $G_x := \sqrt[n]{\prod_{i=1}^nx_{i}}=\sqrt[n]{x_{1}*\dots*x_{n}}$
* Wird verwendet für multiplikativ verknüpfte, mindestens verhältnisskalierte positive Merkmale.

## Harmonisches Mittel
* $H_x := \frac{n}{\sum_i\frac{1}{x_i}}$
* Wird verwendet für verhältnisskalierte Merkmale, insbesondere Quotienten.