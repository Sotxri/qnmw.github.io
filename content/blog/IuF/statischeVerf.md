---
title: "Statische Verfahren der Investitionsrechnung"
excerpt: "Eine Einführung in die Investitionsrechnung"
date: "2025-05-01"
tags: ["Mathe", "Investition und Finanzierung", "4. Semester"]
readTime: "5 min read"
author:
  name: "QNMW"
  avatar: /favicon.ico
---
## Kostenvergleichsrechnung
- **Definition**: Betrachtet nur die Kosten; Erträge der zu vergleichenden Objekte müssen gleich hoch sein
- **Relevante Kostenarten**:
    - Betriebskosten: Fix (z.B. Raumkosten, Instandhaltung, Gehälter) und variabel (z.B. Material, Löhne, Energie)
    - Kapitalkosten:
        - Durchschnittliche Abschreibung: $\frac{\text{AK - Restwert}}{\text{ND}}$ (AK = Anschaffungskosten, ND = Nutzungsdauer)
        - Durchschnittliche Verzinsung: durchschnittliche Kapitalbindung $\times$ Zinssatz
        - Durchschnittliche Kapitalbindung (für Verzinsung): $\frac{\text{AK + Restwert}}{2}$
        - Kapitalbindung (für Amortisationsrechnung): $\text{AK} - \text{Restwert}$
## Gesamtkostenvergleich
- **Anwendung**: Bei gleicher Kapazität der zu vergleichenden Objekte
- **Ziel**: Vergleich der Kosten pro Periode
- **Schritte**:
    1. Berechne die durchschnittliche Abschreibung pro Jahr
    2. Berechne die durchschnittliche Kapitalbindung und daraus die durchschnittlichen Zinsen pro Jahr
    3. Addiere die fixen und variablen Betriebskosten, die durchschnittliche Abschreibung und die durchschnittlichen Zinsen, um die Gesamtkosten pro Periode zu erhalten
    4. Wähle das Objekt mit den geringeren Gesamtkosten
## Stückkostenvergleich
- **Anwendung**: Bei unterschiedlicher Kapazität der zu vergleichenden Objekte
- **Formel Stückkosten ($k$)**: $k = \frac{\text{Kosten/Periode}}{\text{Stückzahl/Periode}}$
- **Formel Kritische Ausbringungsmenge ($x$)**: $x = \frac{K_{2fix} - K_{1fix}}{K_{1var} - K_{2var}}$
    - Objekt 1: geringe Fixkosten, hohe variable Stückkosten
    - Objekt 2: hohe Fixkosten, geringe variable Stückkosten
- **Schritte**:
    1. Berechne die Kosten pro Periode für jedes Objekt wie beim Gesamtkostenvergleich
    2. Dividiere die Kosten pro Periode durch die Ausbringungsmenge pro Periode, um die Stückkosten zu erhalten
    3. Wähle das Objekt mit den geringeren Stückkosten
    4. (Optional) Berechne die kritische Ausbringungsmenge, bei der beide Objekte gleich teuer sind
## Gewinnvergleichsrechnung
- **Definition**: Erweiterung der Kostenvergleichsrechnung durch Einbeziehung der Erträge
- **Anwendung**: Vergleich von Investitionsobjekten mit unterschiedlichen Erträgen
- **Formel**:  
  Durchschnittlicher Gewinn pro Jahr = Erträge pro Jahr − (Fixe Betriebskosten + Variable Betriebskosten + durchschnittl. Abschreibung + durchschnittl. Zinsen)
- **Schritte**:
    1. Ermittle die Erträge pro Jahr (z.B. Umsatzerlöse)
    2. Berechne alle Kostenarten wie bei der Kostenvergleichsrechnung
    3. Subtrahiere die Gesamtkosten von den Erträgen, um den durchschnittlichen Gewinn pro Jahr zu erhalten
    4. Wähle das Objekt mit dem höheren durchschnittlichen Gewinn
## Rentabilitätsrechnung
- **Definition**: Misst die durchschnittliche jährliche Verzinsung des Projekts
- **Formel**:  
  $\text{durchschnittl. Rentabilität} = \frac{\text{durchschnittl. Gewinn pro Jahr (ohne Abzug von Zinsen)}}{\text{durchschnittl. Kapitaleinsatz}} \times 100$
- **Entscheidungskriterium**: Durchschnittliche Rentabilität > Zinssatz der Finanzierung → Projekt ist vorteilhaft
- **Schritte**:
    1. Ermittle die Erträge pro Jahr
    2. Berechne die fixen und variablen Betriebskosten sowie die durchschnittliche Abschreibung
    3. Berechne den durchschnittlichen Gewinn pro Jahr ohne Abzug von Zinsen
    4. Berechne den durchschnittliclhen Kapitaleinsatz: $\frac{\text{AK + Restwert}}{2}$
    5. Setze die Werte in die Formel ein
    6. Vergleiche die Rentabilität mit dem Finanzierungszinssatz
## Statische Armotisationsrechnung (Kapitalrückflussmethode, Pay-off-Methode)
* **Definition**: Zeitraum ($t$), in dem das investierte Kapital wieder zurückgeflossen ist
* **Kapitaleinsatz**: AK − Restwert
* **Durchschnittsmethode** 
  * **Formeln**:  
    - $t = \frac{\text{Kapitaleinsatz}}{\text{durchschnittl. Kapitalrückfluss}}$  
    $\text{durchschnittl. Kapitalrückfluss} = \text{durchschnittl. Gewinn} + \text{durchschnittl. Abschreibung}$
- **Schritte**:
    1. Berechne den durchschnittlichen Gewinn (wie bei Gewinnvergleichsrechnung)
    2. Addiere die durchschnittliche jährliche Abschreibung → Cash Flow
    3. Berechne den Kapitaleinsatz (AK − Restwert)
    4. Teile Kapitaleinsatz durch Cash Flow → Amortisationsdauer
    5. Wähle das Projekt mit der kürzeren Amortisationsdauer
- **Problem**: Zeitliche Entwicklung der Cash Flows wird nicht berücksichtigt
- **Dynamisch**: Teile durch die Annuität anstatt dem Cash Flow:
    - $r = EW \times RVF$
    - oder
    - $r = KW \times KWF$
- Dann einfach
    - $t = \frac{\text{Kapitaleinsatz}}{r}$
* **Kumulative Methode**
  * **Definition**: Berücksichtigt die tatsächliche zeitliche Abfolge der Cash Flows
  - **Schritte**:
      1. Stelle die jährlichen Cash Flows ($z_t$) für jede Periode auf
      2. Summiere sie kumulativ
      3. Finde die Periode, in der der kumulierte Cash Flow erstmals den Kapitaleinsatz übersteigt
      4. Berechne per Interpolation den genauen Zeitpunkt:  
         $t = \text{Jahr vor Amortisation} + \frac{\text{noch zu amortisierender Betrag}}{\text{Cash Flow des Amortisationsjahres}}$  
         Beispiel: $t = 2 + \frac{16.000}{46.000} \approx 2,348$ Jahre
  + **Dynamisch**
      + Diskontiere die einzelnen Beträge nach Jahr (abzinsen)
      - Addiere die Diskontierten Beträge wie gewohnt und fahre weiter wie gewohnt fort
