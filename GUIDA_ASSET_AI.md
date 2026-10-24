# 🎨 Guida Asset & Prompt IA per "Matita Magica" (Simply Draw for Kids)

Questa guida illustra come creare clip video ad altissima qualità passo-passo per l'applicazione utilizzando generatori video con Intelligenza Artificiale (**Runway Gen-3 Alpha**, **Luma Dream Machine**, **Pika 2.0** o **Kling AI**).

---

## 1. STRUTTURA VISIVA DEL VIDEO STEP-BY-STEP

Per i bambini dai 4 ai 10 anni, i video devono rispettare 4 regole fondamentali:
1. **Inquadratura Top-Down (Dall'alto / Flat Lay):** Foglio bianco ben illuminato senza distrazioni attorno.
2. **Mano Visibile e Naturale:** Una mano reale o cartoon pulita che tiene una matita di grafite o un pennarello nero a punta tonda.
3. **Velocità Deliberata e Tratto Netto:** Il tratto deve essere fluido, lento e continuo, facile da emulare su carta reale.
4. **Trasparenza o Foglio Pulito:** La linea appena tracciata deve contrastare fortemente con lo sfondo.

---

## 2. PROMPT IA PRONTI (Formato Inglese per Runway / Luma / Pika)

### Formula Generale del Prompt:
> `Top-down bird's-eye view shot of a clean child's hand holding a wooden graphite pencil, smoothly sketching [SUBJECT_AND_STEP] onto pure white textured drawing paper. Bright daylight studio lighting, clean minimalist composition, slow motion drawing tutorial style, zero motion blur, crisp black line art, educational 4k.`

---

### Esempi di Prompt Step-by-Step per i 10 Soggetti:

#### 🐱 1. Gattino (Cat)
- **Step 1 (Ovale):**  
  `Top-down shot of a hand holding a pencil smoothly drawing a neat horizontal oval in the center of a blank white paper. Educational kids drawing tutorial, crisp steady strokes, clean studio light.`
- **Step 2 (Orecchie a triangolo):**  
  `Top-down view of a hand adding two cute triangular cat ears on top of an existing oval outline on white paper. Clear steady pencil movement, kids art lesson.`
- **Step 3 (Occhi e baffi):**  
  `Top-down shot of a hand sketching two dot eyes, a tiny inverted triangle nose, and 3 light whisker lines on each cheek. High clarity, simple kids illustration.`
- **Step 4 (Corpo e coda):**  
  `Top-down view of a pencil sketching a curved sitting kitten body beneath the head and a curling bushy tail on paper. Complete cartoon line drawing.`

#### 🚗 2. Macchinina Sprint (Car)
- **Step 1 (Base e cupola):**  
  `Overhead top-down perspective of a hand with a black marker drawing a low rectangle base with a dome cabin roof on white sketch paper. Bold clean lines.`
- **Step 2 (Due ruote):**  
  `Top-down shot of a hand drawing two circular wheels under the car body on white paper. Precise circular movements, clear kids tutorial.`
- **Step 3 (Finestrini e fari):**  
  `Top-down macro shot drawing two rectangular side windows with a divider and round headlights on the car outline.`
- **Step 4 (Strada e fumo):**  
  `Top-down view sketching a straight road line under the wheels and whimsical swirl exhaust smoke puffs.`

#### 🚀 3. Razzo Spaziale (Rocket)
- **Step 1 (Cilindro con punta):**  
  `Top-down view of a hand drawing a tall vertical rocket body with a triangular nosecone on blank white paper. Straight geometric lines.`
- **Step 2 (Ali stabilizzatrici):**  
  `Overhead shot sketching two curved triangular fins attached to the bottom sides of the rocket outline.`
- **Step 3 (Oblò circolare):**  
  `Close-up top-down view drawing a double-circle astronaut porthole window in the center of the rocket body.`
- **Step 4 (Fiamme di lancio):**  
  `Top-down view drawing jagged dynamic flame bursts shooting out from the rocket base. Energetic cartoon style.`

#### 🍄 4. Funghetto Magico (Mushroom)
- **Step 1 (Cappello a cupola):**  
  `Top-down view of a pencil sketching a wide umbrella dome mushroom cap on clean white sketchbook paper.`
- **Step 2 (Gambo paffuto):**  
  `Top-down shot sketching a chubby rounded mushroom stem underneath the cap.`
- **Step 3 (Pallini sul cappello):**  
  `Top-down shot drawing 4 circular polka dots of varying sizes inside the mushroom cap.`
- **Step 4 (Erbetta e faccina):**  
  `Top-down shot adding cute cartoon smiling eyes and blade of grass tufts beneath the mushroom.`

---

## 3. PIPELINE DI OTTIMIZZAZIONE DEGLI ASSET (FFmpeg)

I video generati da Runway/Luma sono solitamente in 1080p a 24-30 fps e pesano 10-25 MB ciascuno.  
Per garantire fluidità istantanea sui dispositivi di bambini (tablet, smartphone o browser lenti), ottimizzali con **FFmpeg**:

### A. Conversione in WebM (Leggero e compresso):
```bash
ffmpeg -i step_input.mp4 -c:v libvpx-vp9 -b:v 400k -crf 34 -an -vf "scale=720:720:force_original_aspect_ratio=decrease" step_optimized.webm
```

### B. Conversione in MP4 H.264 Universale (Compatibile con tutti i browser):
```bash
ffmpeg -i step_input.mp4 -c:v libx264 -profile:v high -level 4.0 -pix_fmt yuv420p -crf 26 -preset slow -an -movflags +faststart -vf "scale=720:720" step_optimized.mp4
```

> **Target ideale:**
> - Risoluzione: **720x720** (formato quadrato perfetto per il canvas di disegno) o **800x600**.
> - Durata: **4-6 secondi** in loop continuo.
> - Peso per file: **< 500 KB** per caricamento istantaneo.
> - Posizione nella cartella: `assets/videos/<subject_id>_step<N>.mp4`.

---

## 4. COME COLLEGARE I VIDEO AL PLAYER HTML

Nel file `index.html`, ogni passaggio ha il parametro `videoPlaceholderUrl`. Se desideri visualizzare il video al posto del rendering vettoriale interattivo, basta decommentare il tag `<video>` nel wrapper dello stage oppure caricare i file nella cartella specificata.
