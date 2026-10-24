# ✏️ matita-magica

> **Applicazione educativa per bambini per imparare a disegnare passo-passo.**  
> Disponibile come Web App interattiva e come App nativa per dispositivi Android.

---

## 🌟 Caratteristiche Principali

- 🎨 **14 Lezioni Passo-Passo:**
  - **🐾 Animali (6):** 🐱 Gattino Dolce, 🐶 Cagnolino Allegro, 🐰 Coniglietto Birichino, 🐠 Pesciolino Tropicale, 🦋 Farfalla Magica, 🐧 Pinguino Birichino.
  - **🚗 Mezzi (4):** 🚗 Macchinina Sprint, ✈️ Aereo nei Cieli, 🚀 Razzo Spaziale, ⛵ Barchetta a Vela.
  - **🌟 Natura & Oggetti (4):** ⭐ Stella Sorridente, 🍦 Gelato Goloso, 🏠 Casetta nel Bosco, 🍄 Funghetto Magico.
- ✏️ **Tratto Vettoriale Animato:** La "matita magica" disegna sullo schermo mostrando esattamente il movimento e la direzione del tratto.
- 🔊 **Effetti Sonori & Audio:** Sintesi audio integrata per feedback di incoraggiamento ad ogni passaggio completato.
- 🌍 **Bilingue (IT / EN):** Interfaccia e istruzioni complete in Italiano e Inglese con selettore rapido.
- 🖼️ **Galleria Personale & Disegno Reale:** Tracciamento dei progressi e possibilità di scattare una foto del disegno realizzato dal bambino su carta.
- 📱 **App Android Nativa:** Wrapper WebView ultra-leggero, fluido a schermo intero e con gestione fotocamera.

---

## 📁 Struttura del Progetto

```
matita-magica/
├── index.html                 # Web App principale
├── lessons_data.js            # Dataset completo delle 14 lezioni vettoriali (UTF-8)
├── matita-magica.apk          # APK compilato per Android pronto all'installazione
├── preview_perfected.html     # Pagina di anteprima delle lezioni
├── logo.png                   # Icona dell'app
├── confetti.browser.min.js    # Libreria effetti festeggiamento
├── GUIDA_ASSET_AI.md          # Guida ai prompt IA per generare video step-by-step
└── android-app/               # Progetto Android nativo (Gradle + Kotlin)
    └── app/src/main/
        ├── assets/            # Webview asset sincronizzati
        ├── java/              # Codice nativo Android (MainActivity.kt)
        └── res/               # Icone e risorse dell'app
```

---

## 🚀 Come Eseguire

### Nel Browser:
Apri direttamente [`index.html`](index.html) in qualsiasi browser moderno (Chrome, Edge, Safari, Firefox).

### Su Android:
1. Copia [`matita-magica.apk`](matita-magica.apk) sul tuo dispositivo Android.
2. Tocca il file per installarlo (autorizza l'installazione da origini sconosciute se richiesto).
3. Apri l'app e inizia a disegnare!
