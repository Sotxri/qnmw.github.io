---
title: "Dynamische Verfahren der Investitionsrechnung"
excerpt: "Eine Einführung in die Investitionsrechnung"
date: "2025-05-02"
tags: ["Mathe", "Investition und Finanzierung", "4. Semester"]
readTime: "5 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
---
+ Berücksichtigen die zeitliche Entwicklung und den Zinseffekt exakt
+ **Zahlungsreihe ($z_t$)**: Differenz zwischen Ein- und Auszahlungen für $t=0,...,n$  
## Zinseszinsrechnung
- **Auf- und Abzinsungsfaktoren**
  - Aufzinsen (Zukunftswert $K_n$): $K_n = K_0 \times (1+i)^n$
  - Abzinsen (Barwert $K_0$): $K_0 = \frac{K_n}{(1+i)^n}$
- **Rentenfaktoren (nur nachschüssige Renten)**
  - Endwertfaktor (EWF): $EWF(i,n) = \frac{(1+i)^n - 1}{i}$
    - $K_n = r \times EWF(i,n)$
  - Rentenbarwertfaktor (RBF): $RBF(i,n) = \frac{(1+i)^n - 1}{i \cdot (1+i)^n}$
      - $K_0 = r \times RBF(i,n)$
  - Kapitalwiedergewinnungsfaktor (KWF): $KWF(i,n) = \frac{i(1+i)^n}{(1+i)^n - 1}$
      - $r = K_0 \times KWF(i,n)$
  - Rückverteilungsfaktor (RVF): $RVF(i,n) = \frac{i}{(1+i)^n - 1}$
      - $r = K_n \times RVF(i,n)$ 
## Endwert / Kapitalwert / Annuität
  - Endwert ($K_n$)
    - Formel: $K_n = \sum_{t=0}^{n} z_t \cdot (1+i)^{n-t}$
    - Kriterium: $K_n > 0 \rightarrow$ Projekt lohnend  
  - Kapitalwert ($K_0$)
    - Formel: $K_0 = \sum_{t=0}^{n} z_t \cdot (1+i)^{-t}$
    - **Kriterium: $K_0 > 0 \rightarrow$ Projekt lohnend  
  - Annuität ($r$)
    - Formeln:  
      - $r = K_0 \times KWF(i,n)$
      - $r = K_n \times RVF(i,n)$
    - Kriterium: $r > 0 \rightarrow$ Projekt lohnend  
## Interner Zinsfuß
  - Definition: Der Zinssatz $i$, bei dem $K_0 = 0$ gilt
  - Charakteristik: $K_0 = f(i)$ ist monoton fallend
  - Berechnung: Iterativ oder grafisch, durch Annäherung an $K_0 = 0$
  - IZ = $i_1 + \frac{i_2-i_1}{KW_1 - KW_2}$