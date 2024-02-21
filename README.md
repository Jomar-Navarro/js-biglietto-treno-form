js-biglietto-treno-form
===

**Descrizione:**
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

**MILESTONE 1:**
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o *output*) sarà anch’essa da scrivere in console.

**MILESTONE 2:**
Solo una volta che il milestone 1 sarà completo e funzionante** allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

**BONUS:**
Controllare la validità dei dati e in caso di fallimento generare un messaggio di errore in pagina o con un alert()

## SVOLGIMENTO

1. Inserimento degli elementi di HTML;
2. Inserimento di variabili per il calcolo del prezzo e dello sconto;
3. Creo una funzione con un evento click;
4. Inserisco alcune variabili per i calcoli;
5. Dentro la funzione click aggiungo un'istruzione di condizione;
6. Dentro questa condizione sono contenuti i calcoli e l'output in forma umana nelle apposite colonne;
7. Inserimento di una estrazione casuale di numeri da 1 a 5;
8. Inserimento di una estrazione casuale di numeri da 1 a 9999;
9. Creo una seconda funzione per il secondo bottone con sempre un evento click;\
10. I valori nelle celle si resettano al click del bottone;
11. Inserisco un controllo di vadilitá.