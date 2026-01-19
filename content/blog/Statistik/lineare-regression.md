---
title: "Lineare Regression"
excerpt: "Eine Einführung in die Lineare Regression"
date: "2024-11-09"
tags: ["Mathe", "Statistik", "2. Semester"]
readTime: "5 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
---
## Lineare Regression
-  Darstellung des 
**durchschnittlichen linearen Zusammenhangs** zwischen den Merkmalswerten einer zweidimensionalen statistischen Variablen 
(X,Y) durch eine lineare Funktion $y(x) = a + b*x$ 
- Verläuft immer durch den Schwerpunkt $(\overline{x},\overline{y})$
- $a = \overline{y} - b * \overline{x}$
- $b = \frac{c_{XY}}{s_x^2}$

## Nicht-lineare Regression
-  Dient zur Darstellung von Funktionen, 
welche nicht durch eine lineare Funktion dargestellt werden können
- **Halblogarithmische Modelle** 
  - Hier wird nur eine der beiden Variablen logarithmiert. Man unterscheidet zwei Fälle:
    - Log-Linearer Zusammenhang (Exponentialmodell): $ln(y)=a+b*x$
      - Anwendung: Wenn $Y$ bei steigendem $X$ prozentual (exponentiell) wächst (z.B. Zinseszins, Bakterienwachstum).
      - Interpretation: Eine Steigerung von $X$ um eine Einheit führt zu einer Veränderung von $Y$ um ca. $b*100$%.
    - Linear-Logarithmischer Zusammenhang: $y=a+b*ln(x)$
      - Anwendung: Wenn der Effekt von $X$ auf $Y$ mit zunehmendem $X$ abnimmt (Sättigungseffekt).
      - Interpretation: Eine Steigerung von $X$ um 1 % führt zu einer Veränderung von $Y$ um $\frac{b}{100}$ Einheiten.
- **Logarithmisch-Lineare Modelle** 
  - Hier werden beide Variablen logarithmiert
  - $ln(y)=a+b*ln(x)$
  - Bedeutung: Dieses Modell wird häufig in der Ökonomie verwendet, um Elastizitäten darzustellen.
  - Interpretation: $b$ gibt hier die Elastizität an. Wenn $X$ um 1 % steigt, verändert sich $Y$ im Durchschnitt um $b$ %.