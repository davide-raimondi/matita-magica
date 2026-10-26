/* =============================================================
   MATITA MAGICA - DATASET DELLE 14 LEZIONI (v2, disegni rifatti)
   Categorie: Animali (6), Mezzi (4), Natura & Oggetti (4)

   Formato di ogni lezione:
   {
     id, title{it,en}, category, difficulty, iconEmoji,
     bg:     colore pastello di sfondo per anteprime e colorazione,
     steps:  [{ stepNumber, instruction{it,en}, tips{it,en}, strokes: [...] }],
     colors: [{ d, fill }]   // livello colori (mostrato alla fine e nelle anteprime)
   }
   Ogni elemento di "strokes" è:
     - una stringa SVG path  -> un tratto di matita
     - { d, fill }           -> tratto che a fine animazione viene riempito (es. pupille)
     - { d, fill, stroke:false } -> solo riempimento (es. riflesso bianco negli occhi)

   Regola d'oro dei disegni: ogni nuova linea parte e finisce SUL bordo
   delle forme già disegnate, così sul foglio non restano linee che si incrociano.
   ============================================================= */

const lessonsData = (function () {
  const INK = "#2B2D42";
  const WHITE = "#FFFFFF";
  const BLUSH = "#FFA9BE";
  const f = n => Math.round(n * 10) / 10;

  /* ---------------- Helper geometrici ---------------- */

  // Cerchio che parte da sinistra e gira in senso orario (come si disegna a mano)
  function circle(cx, cy, r) {
    return `M ${f(cx - r)},${f(cy)} A ${f(r)},${f(r)} 0 1,1 ${f(cx + r)},${f(cy)} A ${f(r)},${f(r)} 0 1,1 ${f(cx - r)},${f(cy)} Z`;
  }

  function ellipse(cx, cy, rx, ry) {
    return `M ${f(cx - rx)},${f(cy)} A ${f(rx)},${f(ry)} 0 1,1 ${f(cx + rx)},${f(cy)} A ${f(rx)},${f(ry)} 0 1,1 ${f(cx - rx)},${f(cy)} Z`;
  }

  // Occhio "kawaii": pupilla piena + riflesso bianco
  function eye(cx, cy, r) {
    return [
      { d: circle(cx, cy, r), fill: INK },
      { d: circle(cx - r * 0.32, cy - r * 0.36, r * 0.34), fill: WHITE, stroke: false }
    ];
  }

  function dot(cx, cy, r) {
    return { d: circle(cx, cy, r), fill: INK };
  }

  // Specchia un path rispetto all'asse verticale x = axis (default: centro del foglio)
  function mirror(d, axis = 200) {
    const parts = d.match(/[MLCQAZ][^MLCQAZ]*/g) || [];
    return parts.map(p => {
      const cmd = p[0];
      const n = (p.slice(1).match(/-?\d*\.?\d+/g) || []).map(Number);
      if (cmd === "Z") return "Z";
      const out = [];
      if (cmd === "A") {
        for (let i = 0; i + 6 < n.length + 1; i += 7) {
          out.push(`${n[i]},${n[i + 1]} ${-n[i + 2] || 0} ${n[i + 3]},${1 - n[i + 4]} ${f(2 * axis - n[i + 5])},${n[i + 6]}`);
        }
      } else {
        for (let i = 0; i + 1 < n.length; i += 2) out.push(`${f(2 * axis - n[i])},${n[i + 1]}`);
      }
      return `${cmd} ${out.join(" ")}`;
    }).join(" ");
  }

  // Poligono con angoli arrotondati (k = quota del lato usata per la curva)
  function roundedPoly(pts, kFn) {
    const n = pts.length;
    let d = "";
    for (let i = 0; i < n; i++) {
      const p = pts[i], prev = pts[(i - 1 + n) % n], next = pts[(i + 1) % n];
      const k = kFn(i);
      const a = [p[0] + (prev[0] - p[0]) * k, p[1] + (prev[1] - p[1]) * k];
      const b = [p[0] + (next[0] - p[0]) * k, p[1] + (next[1] - p[1]) * k];
      d += `${i === 0 ? "M" : " L"} ${f(a[0])},${f(a[1])} Q ${f(p[0])},${f(p[1])} ${f(b[0])},${f(b[1])}`;
    }
    return d + " Z";
  }

  function starPoints(cx, cy, R, r, n = 5) {
    const pts = [];
    for (let i = 0; i < n * 2; i++) {
      const ang = (-90 + i * (180 / n)) * Math.PI / 180;
      const rad = i % 2 === 0 ? R : r;
      pts.push([cx + rad * Math.cos(ang), cy + rad * Math.sin(ang)]);
    }
    return pts;
  }

  // Stellina scintillante a 4 punte
  function sparkle(cx, cy, r) {
    const c = r * 0.16;
    return `M ${f(cx)},${f(cy - r)} Q ${f(cx + c)},${f(cy - c)} ${f(cx + r)},${f(cy)} Q ${f(cx + c)},${f(cy + c)} ${f(cx)},${f(cy + r)} Q ${f(cx - c)},${f(cy + c)} ${f(cx - r)},${f(cy)} Q ${f(cx - c)},${f(cy - c)} ${f(cx)},${f(cy - r)} Z`;
  }

  function snowflake(cx, cy, r) {
    return [90, 30, 150].map(a => {
      const rad = a * Math.PI / 180, dx = r * Math.cos(rad), dy = r * Math.sin(rad);
      return `M ${f(cx - dx)},${f(cy - dy)} L ${f(cx + dx)},${f(cy + dy)}`;
    }).join(" ");
  }

  function rays(cx, cy, r1, r2, n) {
    const out = [];
    for (let i = 0; i < n; i++) {
      const a = (i * 360 / n - 90) * Math.PI / 180;
      out.push(`M ${f(cx + r1 * Math.cos(a))},${f(cy + r1 * Math.sin(a))} L ${f(cx + r2 * Math.cos(a))},${f(cy + r2 * Math.sin(a))}`);
    }
    return out;
  }

  function cloud(cx, cy, k) {
    const P = (x, y) => `${f(cx + x * k)},${f(cy + y * k)}`;
    return `M ${P(-40, 12)} C ${P(-58, 12)} ${P(-58, -14)} ${P(-38, -11)} C ${P(-36, -32)} ${P(-8, -36)} ${P(0, -19)} C ${P(10, -36)} ${P(42, -32)} ${P(40, -9)} C ${P(60, -9)} ${P(60, 12)} ${P(40, 12)} Z`;
  }

  const t = (it, en) => ({ it, en });

  /* =============================================================
     🐱 1. GATTINO
     ============================================================= */
  const cat = (() => {
    const head = ellipse(200, 155, 88, 70);
    const earL = "M 124,121 C 116,95 112,70 118,56 C 122,48 130,50 136,56 C 148,66 160,78 170,89";
    const earR = mirror(earL);
    const inL = "M 133,109 C 129,92 128,80 131,70 C 141,76 151,84 158,93";
    const inR = mirror(inL);
    const nose = "M 192,174 Q 200,170 208,174 Q 205,181 200,183 Q 195,181 192,174 Z";
    const mouthL = "M 200,183 Q 200,193 190,193 Q 183,193 181,187";
    const body = "M 156,216 C 134,250 124,300 131,330 C 135,345 148,350 163,350 L 237,350 C 252,350 265,345 269,330 C 276,300 266,250 244,216";
    const pawL = "M 166,350 C 164,330 196,330 194,350";
    const pawR = "M 206,350 C 204,330 236,330 234,350";
    const tail = "M 265,339 C 312,350 348,312 334,268 C 328,250 306,246 302,262 C 299,273 311,276 315,284 C 323,304 305,324 271,316";
    const ORANGE = "#FFB866", CREAM = "#FFEBD1", PINK = "#FFA3B8";
    return {
      id: "cat_01",
      title: t("Gattino Dolce", "Sweet Kitten"),
      category: "Animali", difficulty: "Facile", iconEmoji: "🐱", bg: "#FFF1E3",
      steps: [
        {
          stepNumber: 1,
          instruction: t("Disegna un grande ovale schiacciato: è la testa del gattino!", "Draw a big, wide oval: it's the kitten's head!"),
          tips: t("Muovi tutto il braccio, non solo le dita: l'ovale verrà più morbido.", "Move your whole arm, not just your fingers: the oval will come out smoother."),
          strokes: [head]
        },
        {
          stepNumber: 2,
          instruction: t("Sopra la testa aggiungi due orecchie a punta, con una linea dentro ciascuna.", "On top of the head add two pointy ears, with a line inside each one."),
          tips: t("Le orecchie partono e finiscono proprio sul bordo della testa.", "The ears start and end right on the edge of the head."),
          strokes: [earL, earR, inL, inR]
        },
        {
          stepNumber: 3,
          instruction: t("Fai due occhioni, un nasino a triangolo, la bocca a forma di 'w' e i baffi!", "Draw two big eyes, a little triangle nose, a 'w' shaped mouth and the whiskers!"),
          tips: t("Lascia un puntino bianco negli occhi: sembreranno luccicare!", "Leave a little white spot in the eyes: they will look shiny!"),
          strokes: [
            ...eye(165, 158, 10), ...eye(235, 158, 10),
            nose, mouthL, mirror(mouthL),
            "M 138,175 L 96,168", "M 138,186 L 94,191",
            mirror("M 138,175 L 96,168"), mirror("M 138,186 L 94,191")
          ]
        },
        {
          stepNumber: 4,
          instruction: t("Sotto la testa disegna il corpo a forma di pera e due zampette rotonde.", "Under the head draw a pear-shaped body and two round little paws."),
          tips: t("Il corpo si allarga verso il basso, come una campana.", "The body gets wider at the bottom, like a bell."),
          strokes: [body, pawL, pawR, "M 175,350 L 175,343", "M 185,350 L 185,343", "M 215,350 L 215,343", "M 225,350 L 225,343"]
        },
        {
          stepNumber: 5,
          instruction: t("Aggiungi la coda arricciata e tre strisce sulla fronte. Miao!", "Add a curly tail and three stripes on the forehead. Meow!"),
          tips: t("La coda è come un serpentello che si arrotola in cima.", "The tail is like a little snake curling up at the top."),
          strokes: [tail, "M 200,92 L 200,108", "M 185,94 L 187,106", mirror("M 185,94 L 187,106")]
        }
      ],
      colors: [
        { d: tail + " Z", fill: ORANGE },
        { d: body + " Z", fill: ORANGE },
        { d: ellipse(200, 288, 30, 38), fill: CREAM },
        { d: pawL + " Z", fill: CREAM }, { d: pawR + " Z", fill: CREAM },
        { d: earL + " Z", fill: ORANGE }, { d: earR + " Z", fill: ORANGE },
        { d: inL + " Z", fill: PINK }, { d: inR + " Z", fill: PINK },
        { d: head, fill: ORANGE },
        { d: nose, fill: "#FF7F98" },
        { d: ellipse(146, 181, 12, 7), fill: BLUSH }, { d: ellipse(254, 181, 12, 7), fill: BLUSH }
      ]
    };
  })();

  /* =============================================================
     🐶 2. CAGNOLINO
     ============================================================= */
  const dog = (() => {
    const head = ellipse(200, 150, 80, 68);
    const earL = "M 154,94 C 118,82 90,104 90,144 C 90,178 98,204 115,206 C 128,208 134,196 128,180";
    const earR = mirror(earL);
    const muzzle = ellipse(200, 184, 34, 27);
    const nose = "M 187,170 Q 200,163 213,170 Q 211,180 200,183 Q 189,180 187,170 Z";
    const mouthL = "M 200,183 L 200,190 Q 200,197 191,197 Q 185,197 183,192";
    const tongue = "M 195,197 C 194,209 206,209 205,197";
    const body = "M 166,212 C 142,245 132,300 138,330 C 141,344 152,350 166,350 L 234,350 C 248,350 259,344 262,330 C 268,300 258,245 234,212";
    const legL = "M 170,350 L 170,292 C 170,280 192,280 192,292 L 192,350";
    const legR = "M 208,350 L 208,292 C 208,280 230,280 230,292 L 230,350";
    const collarTop = "M 160,222 Q 200,244 240,222";
    const collarBot = "M 154,233 Q 200,258 246,233";
    const tag = circle(200, 253, 7);
    const tail = "M 263,320 C 292,318 306,296 300,268 C 298,259 307,256 311,264 C 322,292 308,334 261,335";
    const TAN = "#F2C894", DARK = "#B07A50", LIGHT = "#FFF3E2";
    return {
      id: "dog_02",
      title: t("Cagnolino Allegro", "Happy Puppy"),
      category: "Animali", difficulty: "Facile", iconEmoji: "🐶", bg: "#FFF4E0",
      steps: [
        {
          stepNumber: 1,
          instruction: t("Disegna un cerchio un po' schiacciato per la testa del cagnolino.", "Draw a slightly squashed circle for the puppy's head."),
          tips: t("Non serve che sia perfetto: ogni cagnolino è unico!", "It doesn't need to be perfect: every puppy is unique!"),
          strokes: [head]
        },
        {
          stepNumber: 2,
          instruction: t("Ai lati della testa aggiungi due orecchie lunghe e morbide che scendono giù.", "On the sides of the head add two long floppy ears hanging down."),
          tips: t("Le orecchie stanno dietro la testa: partono e finiscono sul suo bordo.", "The ears sit behind the head: they start and end on its edge."),
          strokes: [earL, earR]
        },
        {
          stepNumber: 3,
          instruction: t("Fai gli occhietti, il muso ovale, il nasone, la bocca e la linguetta!", "Draw the eyes, an oval snout, a big nose, the mouth and a little tongue!"),
          tips: t("Il nasone sta in cima al muso, la bocca scende proprio da lì.", "The big nose sits at the top of the snout, and the mouth comes down from it."),
          strokes: [
            ...eye(170, 140, 9), ...eye(230, 140, 9),
            muzzle,
            { d: nose, fill: INK }, { d: circle(194, 169, 2.6), fill: WHITE, stroke: false },
            mouthL, mirror(mouthL), tongue
          ]
        },
        {
          stepNumber: 4,
          instruction: t("Disegna il corpo seduto, il collare con la medaglietta e le due zampe davanti.", "Draw the sitting body, the collar with its tag and the two front legs."),
          tips: t("Le zampe sono come due salsicciotti con le righine delle dita in fondo.", "The legs are like two little sausages with toe lines at the bottom."),
          strokes: [
            body, collarTop, collarBot, tag, legL, legR,
            "M 178,350 L 178,343", "M 185,350 L 185,343", "M 215,350 L 215,343", "M 222,350 L 222,343"
          ]
        },
        {
          stepNumber: 5,
          instruction: t("Aggiungi la coda che scodinzola e due lineette di movimento. Bau!", "Add a wagging tail and two little motion lines. Woof!"),
          tips: t("Le lineette fanno capire che la coda si muove felice.", "The little lines show the tail is happily wagging."),
          strokes: [tail, "M 322,250 Q 330,258 330,270", "M 334,240 Q 346,255 344,274"]
        }
      ],
      colors: [
        { d: tail + " Z", fill: TAN },
        { d: body + " Z", fill: TAN },
        { d: legL + " Z", fill: LIGHT }, { d: legR + " Z", fill: LIGHT },
        { d: collarTop + " L 246,233 Q 200,258 154,233 Z", fill: "#3A86FF" },
        { d: tag, fill: "#FFD166" },
        { d: earL + " Z", fill: DARK }, { d: earR + " Z", fill: DARK },
        { d: head, fill: TAN },
        { d: ellipse(232, 138, 22, 19), fill: "#D59A68" },
        { d: muzzle, fill: LIGHT },
        { d: tongue, fill: "#FF7B95" },
        { d: ellipse(152, 172, 10, 6), fill: BLUSH }, { d: ellipse(248, 172, 10, 6), fill: BLUSH }
      ]
    };
  })();

  /* =============================================================
     🐰 3. CONIGLIETTO
     ============================================================= */
  const bunny = (() => {
    const head = ellipse(200, 180, 72, 62);
    const earL = "M 159,129 C 140,90 138,40 160,32 C 182,26 192,70 188,119";
    const earR = mirror(earL);
    const inL = "M 167,125 C 154,92 152,56 163,50 C 174,46 182,84 178,121";
    const inR = mirror(inL);
    const nose = "M 193,194 Q 200,190 207,194 Q 205,200 200,202 Q 195,200 193,194 Z";
    const mouthL = "M 200,202 Q 200,210 192,210 Q 187,210 185,206";
    const teeth = "M 195,210 L 195,218 Q 195,220 197,220 L 203,220 Q 205,220 205,218 L 205,210";
    const sideL = "M 159,231 C 128,262 120,312 134,338";
    const sideR = mirror(sideL);
    const pawL = ellipse(180, 300, 11, 15);
    const pawR = ellipse(220, 300, 11, 15);
    const footL = ellipse(162, 345, 32, 14);
    const footR = ellipse(238, 345, 32, 14);
    const carrot = "M 296,272 Q 313,264 330,272 L 316,338 Q 313,344 310,338 Z";
    const leafL = "M 306,268 C 296,254 300,242 308,246 C 312,248 312,258 311,266";
    const leafR = "M 320,268 C 330,254 326,242 318,246 C 314,248 314,258 315,266";
    const FUR = "#E7E1F4", LIGHT = "#F7F4FC", PINK = "#FFB3C6";
    return {
      id: "bunny_03",
      title: t("Coniglietto Birichino", "Playful Bunny"),
      category: "Animali", difficulty: "Facile", iconEmoji: "🐰", bg: "#F1ECFF",
      steps: [
        {
          stepNumber: 1,
          instruction: t("Disegna un ovale morbido per la testa del coniglietto.", "Draw a soft oval for the bunny's head."),
          tips: t("Lascia spazio sopra: le orecchie saranno lunghissime!", "Leave room above: the ears will be very long!"),
          strokes: [head]
        },
        {
          stepNumber: 2,
          instruction: t("Disegna due orecchie lunghe come due fagiolini, con una linea dentro.", "Draw two long ears like green beans, with a line inside."),
          tips: t("Più sono lunghe, più il coniglietto sarà buffo!", "The longer they are, the funnier the bunny looks!"),
          strokes: [earL, earR, inL, inR]
        },
        {
          stepNumber: 3,
          instruction: t("Fai gli occhietti, il nasino, la boccuccia, i dentoni e i baffi!", "Draw the eyes, the little nose, the mouth, two big teeth and the whiskers!"),
          tips: t("I dentoni sono un rettangolino diviso a metà.", "The big teeth are a little rectangle split in half."),
          strokes: [
            ...eye(174, 176, 8), ...eye(226, 176, 8),
            nose, mouthL, mirror(mouthL), teeth, "M 200,211 L 200,220",
            "M 150,198 L 112,193", "M 150,207 L 112,212",
            mirror("M 150,198 L 112,193"), mirror("M 150,207 L 112,212")
          ]
        },
        {
          stepNumber: 4,
          instruction: t("Sotto la testa disegna i fianchi del corpo e due zampette davanti.", "Under the head draw the sides of the body and two little front paws."),
          tips: t("Le due linee del corpo si allargano come una gonna.", "The two body lines spread out like a skirt."),
          strokes: [sideL, sideR, pawL, pawR]
        },
        {
          stepNumber: 5,
          instruction: t("Aggiungi due grandi piedoni ovali e una carota tutta per lui!", "Add two big oval feet and a carrot just for him!"),
          tips: t("I piedi chiudono il corpo in basso: falli belli grandi.", "The feet close the body at the bottom: make them nice and big."),
          strokes: [
            footL, footR, "M 194,345 Q 200,341 206,345",
            carrot, leafL, leafR, "M 301,290 L 310,292", "M 316,306 L 322,304", "M 307,320 L 314,322"
          ]
        }
      ],
      colors: [
        { d: sideL + " L 266,338 C 280,312 272,262 241,231 Z", fill: FUR },
        { d: ellipse(200, 292, 36, 34), fill: LIGHT },
        { d: pawL, fill: LIGHT }, { d: pawR, fill: LIGHT },
        { d: footL, fill: FUR }, { d: footR, fill: FUR },
        { d: earL + " Z", fill: FUR }, { d: earR + " Z", fill: FUR },
        { d: inL + " Z", fill: PINK }, { d: inR + " Z", fill: PINK },
        { d: head, fill: FUR },
        { d: teeth, fill: WHITE },
        { d: nose, fill: "#FF8FA3" },
        { d: ellipse(160, 196, 10, 6), fill: BLUSH }, { d: ellipse(240, 196, 10, 6), fill: BLUSH },
        { d: carrot, fill: "#FF9F43" },
        { d: leafL, fill: "#5CC27A" }, { d: leafR, fill: "#5CC27A" }
      ]
    };
  })();

  /* =============================================================
     🐠 4. PESCIOLINO
     ============================================================= */
  const fish = (() => {
    const body = "M 80,200 C 80,140 190,118 255,160 C 275,173 285,185 292,200 C 285,215 275,227 255,240 C 190,282 80,260 80,200 Z";
    const tail = "M 286,189 C 302,174 322,150 342,140 C 330,172 330,228 342,260 C 322,250 302,226 286,211";
    const finTop = "M 143,142 C 150,105 190,92 230,100 C 220,115 222,130 223,145";
    const finBot = "M 188,261 C 196,285 220,292 238,284 C 228,276 224,266 223,255";
    const s1a = "M 150,141 C 166,175 166,225 150,259", s1b = "M 177,138 C 196,175 196,225 177,262";
    const s2a = "M 230,148 C 242,175 242,225 230,252", s2b = "M 249,156 C 258,180 258,220 249,244";
    const pecFin = "M 198,210 C 212,200 230,206 226,222 C 220,234 204,228 198,210 Z";
    const bubbles = [circle(60, 160, 7), circle(44, 124, 10), circle(62, 86, 6)];
    const ORANGE = "#FF9A4D", DEEP = "#FF7A2F";
    return {
      id: "fish_04",
      title: t("Pesciolino Tropicale", "Tropical Fish"),
      category: "Animali", difficulty: "Facile", iconEmoji: "🐠", bg: "#E3F6FF",
      steps: [
        {
          stepNumber: 1,
          instruction: t("Disegna il corpo del pesce: una goccia sdraiata con la punta a destra, e un sorriso!", "Draw the fish body: a lying teardrop pointing right, and a smile!"),
          tips: t("Il lato sinistro è rotondo come una palla, il destro si stringe.", "The left side is round like a ball, the right side gets narrow."),
          strokes: [body, "M 88,214 Q 96,221 106,214"]
        },
        {
          stepNumber: 2,
          instruction: t("Aggiungi la grande coda a ventaglio e le pinne sopra e sotto.", "Add the big fan tail and the fins on top and bottom."),
          tips: t("Le righe nella coda la fanno sembrare vera.", "The lines in the tail make it look real."),
          strokes: [tail, "M 302,190 L 326,166", "M 304,200 L 324,200", "M 302,210 L 326,234", finTop, finBot]
        },
        {
          stepNumber: 3,
          instruction: t("Disegna il grande occhio, due strisce curve e la pinnetta sul fianco.", "Draw the big eye, two curved stripes and the little side fin."),
          tips: t("Ogni striscia è fatta da due curve vicine, come una parentesi doppia.", "Each stripe is made of two close curves, like a double bracket."),
          strokes: [
            { d: circle(125, 186, 17), fill: WHITE },
            { d: circle(129, 188, 8), fill: INK },
            { d: circle(126, 185, 2.8), fill: WHITE, stroke: false },
            s1a, s1b, s2a, s2b, pecFin
          ]
        },
        {
          stepNumber: 4,
          instruction: t("Fai salire tre bollicine e disegna le alghe sul fondale!", "Draw three bubbles floating up and some seaweed on the sea floor!"),
          tips: t("Le bollicine sono di grandezze diverse: piccola, grande, piccola.", "The bubbles are different sizes: small, big, small."),
          strokes: [...bubbles, "M 112,362 C 98,336 126,318 112,292", "M 134,362 C 148,340 122,322 138,300", "M 60,362 Q 200,352 340,362"]
        }
      ],
      colors: [
        { d: tail + " Z", fill: DEEP },
        { d: finTop + " Z", fill: DEEP }, { d: finBot + " Z", fill: DEEP },
        { d: body, fill: ORANGE },
        { d: s1a + " L 177,262 C 196,225 196,175 177,138 Z", fill: WHITE },
        { d: s2a + " L 249,244 C 258,220 258,180 249,156 Z", fill: WHITE },
        { d: pecFin, fill: DEEP },
        { d: ellipse(104, 222, 9, 5), fill: "#FF6B6B" },
        ...bubbles.map(d => ({ d, fill: "#CDEFFF" }))
      ]
    };
  })();

  /* =============================================================
     🦋 5. FARFALLA
     ============================================================= */
  const butterfly = (() => {
    const head = circle(200, 130, 14);
    const body = "M 200,146 C 212,146 214,170 213,200 C 212,240 208,270 200,272 C 192,270 188,240 187,200 C 186,170 188,146 200,146 Z";
    const antL = "M 194,118 C 186,96 172,84 160,82";
    const upL = "M 187,175 C 160,120 100,90 72,112 C 48,132 60,190 100,212 C 130,226 165,222 187,214";
    const upR = mirror(upL);
    const loL = "M 187,222 C 160,224 118,240 110,275 C 104,305 132,322 158,310 C 178,300 190,275 189,250";
    const loR = mirror(loL);
    const spots = [circle(118, 152, 22), circle(156, 196, 9), circle(90, 188, 6), circle(146, 276, 14)];
    const UP = "#B58CFF", LO = "#FF8CC6", SPOT = "#FFE066";
    return {
      id: "butterfly_05",
      title: t("Farfalla Magica", "Magic Butterfly"),
      category: "Animali", difficulty: "Medio", iconEmoji: "🦋", bg: "#FFEFF8",
      steps: [
        {
          stepNumber: 1,
          instruction: t("Disegna la testolina tonda, il corpo lungo e le due antenne con il pallino.", "Draw the round head, the long body and two antennae with dots at the ends."),
          tips: t("Il corpo è come un fagiolo in piedi sotto la testa.", "The body is like a standing bean under the head."),
          strokes: [head, body, antL, mirror(antL), dot(155, 81, 5), dot(245, 81, 5)]
        },
        {
          stepNumber: 2,
          instruction: t("Disegna le due ali di sopra, grandi e rotonde, una per lato.", "Draw the two upper wings, big and round, one on each side."),
          tips: t("Parti dal corpo, gira in alto e torna giù verso il corpo.", "Start at the body, loop up and come back down to the body."),
          strokes: [upL, upR]
        },
        {
          stepNumber: 3,
          instruction: t("Sotto aggiungi le due ali più piccole, come due gocce.", "Below add the two smaller wings, like two drops."),
          tips: t("Le ali di sotto sono più piccole di quelle di sopra.", "The lower wings are smaller than the upper ones."),
          strokes: [loL, loR]
        },
        {
          stepNumber: 4,
          instruction: t("Decora le ali con i cerchi, fai le righe sul corpo e un sorriso!", "Decorate the wings with circles, add stripes on the body and a smile!"),
          tips: t("Quello che fai su un'ala, ripetilo uguale sull'altra.", "Whatever you draw on one wing, repeat it on the other."),
          strokes: [
            ...spots, ...spots.map(s => mirror(s)),
            "M 188,190 Q 200,195 212,190", "M 188,215 Q 200,220 212,215", "M 191,240 Q 200,245 209,240",
            dot(195, 128, 2.6), dot(205, 128, 2.6), "M 195,134 Q 200,138 205,134",
            sparkle(330, 70, 11), sparkle(70, 320, 9)
          ]
        }
      ],
      colors: [
        { d: upL + " Z", fill: UP }, { d: upR + " Z", fill: UP },
        { d: loL + " Z", fill: LO }, { d: loR + " Z", fill: LO },
        ...spots.map(d => ({ d, fill: SPOT })), ...spots.map(d => ({ d: mirror(d), fill: SPOT })),
        { d: body, fill: "#7A68B8" }, { d: head, fill: "#7A68B8" },
        { d: sparkle(330, 70, 11), fill: "#FFD166" }, { d: sparkle(70, 320, 9), fill: "#FFD166" }
      ]
    };
  })();

  /* =============================================================
     🐧 6. PINGUINO
     ============================================================= */
  const penguin = (() => {
    const body = "M 200,80 C 130,80 112,200 118,280 C 122,330 160,345 200,345 C 240,345 278,330 282,280 C 288,200 270,80 200,80 Z";
    const mask = "M 200,128 C 185,108 150,112 148,145 C 146,175 160,190 158,215 C 152,260 158,320 200,325 C 242,320 248,260 242,215 C 240,190 254,175 252,145 C 250,112 215,108 200,128 Z";
    const beak = "M 188,170 Q 200,162 212,170 Q 205,182 200,185 Q 195,182 188,170 Z";
    const flipL = "M 127,162 C 100,180 82,220 86,248 C 88,258 98,256 104,248 C 112,238 116,226 119,215";
    const flipR = mirror(flipL);
    const footL = "M 155,336 C 140,350 142,362 156,362 L 184,362 C 192,362 192,352 183,344";
    const footR = mirror(footL);
    const NAVY = "#4D5B8C", BEAK = "#FFB238";
    return {
      id: "penguin_06",
      title: t("Pinguino Birichino", "Cute Penguin"),
      category: "Animali", difficulty: "Facile", iconEmoji: "🐧", bg: "#E5F4FF",
      steps: [
        {
          stepNumber: 1,
          instruction: t("Disegna una grande forma a uovo in piedi: è tutto il pinguino!", "Draw a big standing egg shape: that's the whole penguin!"),
          tips: t("In alto è più stretto, in basso più largo e paffuto.", "It's narrower at the top and wider and chubbier at the bottom."),
          strokes: [body]
        },
        {
          stepNumber: 2,
          instruction: t("Dentro disegna la pancia bianca: in alto fa due gobbette come un cuore.", "Inside draw the white tummy: at the top it has two bumps like a heart."),
          tips: t("Le due gobbette faranno spazio agli occhi.", "The two bumps will make room for the eyes."),
          strokes: [mask]
        },
        {
          stepNumber: 3,
          instruction: t("Fai due occhietti lucidi e il becco a triangolino.", "Draw two shiny eyes and a little triangle beak."),
          tips: t("Il becco sta proprio al centro, sotto gli occhi.", "The beak sits right in the middle, under the eyes."),
          strokes: [...eye(176, 152, 8), ...eye(224, 152, 8), beak, "M 190,172 Q 200,176 210,172"]
        },
        {
          stepNumber: 4,
          instruction: t("Aggiungi le due alette ai lati e i piedi palmati in basso.", "Add the two flippers on the sides and the webbed feet at the bottom."),
          tips: t("Le alette puntano un po' in fuori, come per salutare!", "The flippers point out a bit, as if waving hello!"),
          strokes: [flipL, flipR, footL, footR, "M 166,362 L 167,353", "M 176,362 L 177,353", mirror("M 166,362 L 167,353"), mirror("M 176,362 L 177,353")]
        },
        {
          stepNumber: 5,
          instruction: t("Disegna il ghiaccio sotto i piedi e qualche fiocco di neve.", "Draw the ice under the feet and a few snowflakes."),
          tips: t("Ogni fiocco è fatto da tre linee che si incrociano al centro.", "Each snowflake is three lines crossing in the middle."),
          strokes: ["M 50,362 L 350,362", snowflake(72, 110, 11), snowflake(330, 115, 9), snowflake(345, 190, 7), snowflake(58, 222, 8)]
        }
      ],
      colors: [
        { d: "M 50,362 L 350,362 L 350,374 L 50,374 Z", fill: "#CDEBFF" },
        { d: flipL + " Z", fill: NAVY }, { d: flipR + " Z", fill: NAVY },
        { d: footL + " Z", fill: BEAK }, { d: footR + " Z", fill: BEAK },
        { d: body, fill: NAVY },
        { d: mask, fill: WHITE },
        { d: beak, fill: BEAK },
        { d: ellipse(166, 176, 9, 6), fill: BLUSH }, { d: ellipse(234, 176, 9, 6), fill: BLUSH }
      ]
    };
  })();

  /* =============================================================
     🚗 7. MACCHININA
     ============================================================= */
  const car = (() => {
    const body = "M 60,262 C 60,240 68,228 90,224 L 132,218 L 160,178 C 166,170 174,166 186,166 L 244,166 C 256,166 264,171 272,180 L 304,218 L 322,221 C 338,224 342,240 342,262 C 342,270 337,274 330,274 L 307,274 A 32,32 0 0,0 243,274 L 157,274 A 32,32 0 0,0 93,274 L 72,274 C 64,274 60,270 60,262 Z";
    const wheels = [circle(125, 274, 25), circle(275, 274, 25)];
    const hubs = [circle(125, 274, 9), circle(275, 274, 9)];
    const winBack = "M 150,214 L 170,186 C 174,180 178,178 184,178 L 206,178 L 206,214 Z";
    const winFront = "M 218,178 L 242,178 C 250,178 256,181 261,187 L 284,214 L 218,214 Z";
    const headlight = circle(328, 238, 6);
    const taillight = circle(72, 242, 5);
    return {
      id: "car_07",
      title: t("Macchinina Sprint", "Sprint Car"),
      category: "Mezzi", difficulty: "Facile", iconEmoji: "🚗", bg: "#FFEDEF",
      steps: [
        {
          stepNumber: 1,
          instruction: t("Disegna la sagoma della macchina: sotto lunga, sopra la cabina, e due archi per le ruote.", "Draw the car shape: long at the bottom, the cabin on top, and two arches for the wheels."),
          tips: t("Gli archi sono due mezzi cerchi che 'mordono' il fondo della macchina.", "The arches are two half circles that 'bite' the bottom of the car."),
          strokes: [body]
        },
        {
          stepNumber: 2,
          instruction: t("Dentro gli archi disegna due ruote rotonde con il cerchione al centro.", "Inside the arches draw two round wheels with a hubcap in the middle."),
          tips: t("Lascia un piccolo spazio tra la ruota e l'arco.", "Leave a small gap between the wheel and the arch."),
          strokes: [...wheels, ...hubs]
        },
        {
          stepNumber: 3,
          instruction: t("Fai i due finestrini, la portiera con le maniglie e i fanali.", "Draw the two windows, the door with handles and the lights."),
          tips: t("Il fanale davanti è giallo, quello dietro è arancione.", "The front light is yellow, the back light is orange."),
          strokes: [winBack, winFront, "M 212,214 L 212,264", "M 188,232 L 202,232", "M 222,232 L 236,232", headlight, taillight]
        },
        {
          stepNumber: 4,
          instruction: t("Disegna la strada con le strisce e le linee della velocità. Brum brum!", "Draw the road with its stripes and the speed lines. Vroom vroom!"),
          tips: t("Le linee dietro la macchina fanno capire che sfreccia veloce!", "The lines behind the car show it's zooming fast!"),
          strokes: ["M 30,300 L 370,300", "M 60,322 L 100,322", "M 180,322 L 220,322", "M 300,322 L 340,322", "M 20,214 L 46,214", "M 12,236 L 46,236", "M 22,258 L 48,258"]
        }
      ],
      colors: [
        { d: "M 30,300 L 370,300 L 370,340 L 30,340 Z", fill: "#E3E6EE" },
        { d: body, fill: "#FF5E7E" },
        { d: winBack, fill: "#CDEFFF" }, { d: winFront, fill: "#CDEFFF" },
        ...wheels.map(d => ({ d, fill: "#3D405B" })),
        ...hubs.map(d => ({ d, fill: "#E6E9F0" })),
        { d: headlight, fill: "#FFD166" }, { d: taillight, fill: "#FF9F43" }
      ]
    };
  })();

  /* =============================================================
     ✈️ 8. AEREO
     ============================================================= */
  const plane = (() => {
    const fus = "M 80,200 C 72,184 76,164 96,164 L 290,164 C 328,164 350,182 350,198 C 350,214 330,228 296,228 L 120,228 C 100,228 88,214 80,200 Z";
    const fin = "M 100,164 L 82,114 C 80,106 86,102 94,103 L 110,105 C 116,106 120,110 123,116 L 150,164";
    const stab = "M 95,219 L 66,230 C 60,232 60,240 68,240 L 94,240 C 102,240 108,234 114,228";
    const farWing = "M 196,164 L 178,128 C 176,122 180,118 186,119 L 196,121 C 201,122 204,125 206,129 L 232,164";
    const nearWing = "M 186,228 L 150,286 C 146,294 152,298 160,296 L 178,292 C 184,290 188,286 192,280 L 242,228";
    const cockpit = "M 298,174 L 312,174 C 324,174 334,182 338,190 L 298,190 Z";
    const windows = [160, 190, 220, 250].map(x => circle(x, 192, 7));
    const clouds = [cloud(300, 300, 1), cloud(95, 70, 0.75), cloud(325, 85, 0.55)];
    return {
      id: "plane_08",
      title: t("Aereo nei Cieli", "Airplane in the Sky"),
      category: "Mezzi", difficulty: "Medio", iconEmoji: "✈️", bg: "#DDF1FF",
      steps: [
        {
          stepNumber: 1,
          instruction: t("Disegna il corpo dell'aereo: un lungo salsicciotto con il muso rotondo a destra.", "Draw the plane's body: a long sausage with a round nose on the right."),
          tips: t("La coda a sinistra è un po' più stretta e sale verso l'alto.", "The tail on the left is a bit narrower and goes up."),
          strokes: [fus]
        },
        {
          stepNumber: 2,
          instruction: t("Aggiungi la pinna sulla coda, il timone piccolo e le due ali.", "Add the fin on the tail, the small tail wing and the two wings."),
          tips: t("L'ala davanti scende in basso, quella dietro spunta sopra, più piccola.", "The front wing goes down, the back wing peeks out on top, smaller."),
          strokes: [fin, stab, farWing, nearWing]
        },
        {
          stepNumber: 3,
          instruction: t("Disegna il vetro dei piloti, gli oblò rotondi e una riga lungo il corpo.", "Draw the pilots' window, the round portholes and a stripe along the body."),
          tips: t("Gli oblò sono tutti in fila, alla stessa altezza.", "The portholes are all in a row, at the same height."),
          strokes: [cockpit, ...windows, "M 87,210 L 346,210"]
        },
        {
          stepNumber: 4,
          instruction: t("Disegna le nuvolette soffici e le linee del vento dietro l'aereo!", "Draw fluffy clouds and wind lines behind the plane!"),
          tips: t("Una nuvola è fatta di tante gobbette rotonde.", "A cloud is made of lots of round bumps."),
          strokes: [...clouds, "M 24,176 L 62,176", "M 30,196 L 68,196"]
        }
      ],
      colors: [
        ...clouds.map(d => ({ d, fill: WHITE })),
        { d: farWing + " Z", fill: "#2F6FD6" },
        { d: fin + " Z", fill: "#FF5E7E" },
        { d: fus, fill: "#F7FAFF" },
        { d: "M 87,210 L 346,210 C 340,220 324,228 296,228 L 120,228 C 104,228 94,220 87,210 Z", fill: "#BFD9FF" },
        { d: nearWing + " Z", fill: "#3A86FF" },
        { d: stab + " Z", fill: "#FF5E7E" },
        { d: cockpit, fill: "#7CC8FF" },
        ...windows.map(d => ({ d, fill: "#7CC8FF" }))
      ]
    };
  })();

  /* =============================================================
     🚀 9. RAZZO
     ============================================================= */
  const rocket = (() => {
    const body = "M 200,70 C 240,100 252,150 248,250 L 152,250 C 148,150 160,100 200,70 Z";
    const noseLine = "M 165,118 Q 200,132 235,118";
    const finL = "M 152,196 C 128,206 112,230 112,262 C 112,270 120,272 126,266 L 152,244";
    const finR = mirror(finL);
    const nozzle = "M 170,250 L 176,266 L 224,266 L 230,250";
    const win = circle(200, 172, 24), winIn = circle(200, 172, 16);
    const band = "M 151,226 Q 200,236 249,226";
    const flameOut = "M 180,266 C 172,290 182,304 188,298 C 186,316 194,330 200,342 C 206,330 214,316 212,298 C 218,304 228,290 220,266";
    const flameIn = "M 190,266 C 188,282 194,296 200,308 C 206,296 212,282 210,266";
    const planet = circle(92, 100, 22);
    const stars = [sparkle(322, 110, 14), sparkle(305, 300, 10), sparkle(84, 300, 9), sparkle(330, 210, 7)];
    return {
      id: "rocket_09",
      title: t("Razzo Spaziale", "Space Rocket"),
      category: "Mezzi", difficulty: "Medio", iconEmoji: "🚀", bg: "#ECE8FF",
      steps: [
        {
          stepNumber: 1,
          instruction: t("Disegna il corpo del razzo: appuntito in cima e dritto in fondo. Poi la riga della punta.", "Draw the rocket body: pointy at the top and flat at the bottom. Then the nose line."),
          tips: t("È come una matita gigante in piedi!", "It's like a giant pencil standing up!"),
          strokes: [body, noseLine]
        },
        {
          stepNumber: 2,
          instruction: t("Aggiungi le due alette ai lati e il motore sotto.", "Add the two fins on the sides and the engine underneath."),
          tips: t("Le alette partono dal fianco e scendono fino in fondo al razzo.", "The fins start on the side and go down to the bottom of the rocket."),
          strokes: [finL, finR, nozzle]
        },
        {
          stepNumber: 3,
          instruction: t("Disegna l'oblò con due cerchi e una riga curva in basso.", "Draw the porthole with two circles and a curved line at the bottom."),
          tips: t("Un cerchio dentro l'altro: così il vetro sembra robusto.", "One circle inside the other: that makes the glass look strong."),
          strokes: [win, winIn, { d: circle(193, 165, 4), fill: WHITE, stroke: false }, band]
        },
        {
          stepNumber: 4,
          instruction: t("Fai uscire le fiamme dal motore: una grande e una piccola dentro!", "Draw the flames coming out of the engine: a big one with a small one inside!"),
          tips: t("Le fiamme sono a punta, come tante lingue di fuoco.", "Flames are pointy, like lots of fire tongues."),
          strokes: [flameOut, flameIn]
        },
        {
          stepNumber: 5,
          instruction: t("Riempi lo spazio di stelline e disegna un pianeta con l'anello!", "Fill space with twinkling stars and draw a planet with a ring!"),
          tips: t("L'anello è un ovale schiacciato che passa davanti al pianeta.", "The ring is a flat oval that passes in front of the planet."),
          strokes: [planet, "M 56,113 A 38,11 -20 0,0 128,87", ...stars, circle(70, 210, 3), circle(250, 60, 3)]
        }
      ],
      colors: [
        { d: finL + " Z", fill: "#FF5E7E" }, { d: finR + " Z", fill: "#FF5E7E" },
        { d: flameOut, fill: "#FF8A3D" }, { d: flameIn, fill: "#FFD166" },
        { d: nozzle + " Z", fill: "#8D99AE" },
        { d: body, fill: "#F4F6FB" },
        { d: "M 165,118 Q 200,132 235,118 C 227.5,97 216,82 200,70 C 184,82 172.5,97 165,118 Z", fill: "#FF5E7E" },
        { d: band + " L 248,250 L 152,250 Z", fill: "#3A86FF" },
        { d: win, fill: "#C9D2E3" }, { d: winIn, fill: "#7CC8FF" },
        { d: planet, fill: "#B58CFF" },
        ...stars.map(d => ({ d, fill: "#FFD166" }))
      ]
    };
  })();

  /* =============================================================
     ⛵ 10. BARCHETTA
     ============================================================= */
  const boat = (() => {
    const hull = "M 80,262 L 320,262 C 312,292 290,318 260,318 L 140,318 C 110,318 88,292 80,262 Z";
    const flag = "M 200,72 L 238,84 L 200,96";
    const main = "M 192,98 C 150,140 115,195 108,246 L 192,246 Z";
    const jib = "M 208,110 C 248,150 278,200 284,246 L 208,246 Z";
    const holes = [150, 200, 250].map(x => circle(x, 290, 8));
    const wave = "M 40,334 Q 65,320 90,334 Q 115,348 140,334 Q 165,320 190,334 Q 215,348 240,334 Q 265,320 290,334 Q 315,348 340,334 Q 352,327 362,332";
    const sun = circle(88, 92, 24);
    return {
      id: "boat_10",
      title: t("Barchetta a Vela", "Sailboat"),
      category: "Mezzi", difficulty: "Facile", iconEmoji: "⛵", bg: "#E6F6FF",
      steps: [
        {
          stepNumber: 1,
          instruction: t("Disegna lo scafo: una riga dritta in alto e il fondo curvo come una ciotola.", "Draw the hull: a straight line on top and a curved bottom like a bowl."),
          tips: t("Il fondo curvo aiuta la barca a galleggiare.", "The curved bottom helps the boat float."),
          strokes: [hull]
        },
        {
          stepNumber: 2,
          instruction: t("Alza l'albero: una linea dritta altissima, con la bandierina in cima.", "Raise the mast: a very tall straight line, with a little flag on top."),
          tips: t("La bandierina mostra da che parte soffia il vento.", "The flag shows which way the wind is blowing."),
          strokes: ["M 200,262 L 200,72", flag]
        },
        {
          stepNumber: 3,
          instruction: t("Disegna le due vele: una grande a sinistra e una a destra, gonfie di vento.", "Draw the two sails: a big one on the left and one on the right, full of wind."),
          tips: t("Il lato esterno delle vele è curvo, come una pancia gonfia.", "The outside edge of the sails is curved, like a puffed-up tummy."),
          strokes: [main, jib]
        },
        {
          stepNumber: 4,
          instruction: t("Fai tre oblò rotondi sullo scafo e le onde del mare.", "Draw three round portholes on the hull and the sea waves."),
          tips: t("Le onde sono tante 'u' collegate, su e giù.", "Waves are lots of connected 'u' shapes, up and down."),
          strokes: [...holes, wave, "M 90,360 Q 115,348 140,360 Q 165,372 190,360 Q 215,348 240,360 Q 265,372 290,360"]
        },
        {
          stepNumber: 5,
          instruction: t("Disegna il sole con i raggi e due gabbiani in volo!", "Draw the sun with its rays and two flying seagulls!"),
          tips: t("Un gabbiano è come una 'm' allungata.", "A seagull looks like a stretched 'm'."),
          strokes: [sun, ...rays(88, 92, 32, 44, 8), "M 270,86 Q 285,72 300,86 Q 315,72 330,86", "M 300,124 Q 308,116 316,124 Q 324,116 332,124"]
        }
      ],
      colors: [
        { d: wave + " L 362,372 L 40,372 Z", fill: "#9AD9FF" },
        { d: sun, fill: "#FFD166" },
        { d: main, fill: WHITE }, { d: jib, fill: "#FFD166" },
        { d: flag + " Z", fill: "#FF5E7E" },
        { d: hull, fill: "#3A86FF" },
        ...holes.map(d => ({ d, fill: WHITE }))
      ]
    };
  })();

  /* =============================================================
     ⭐ 11. STELLA
     ============================================================= */
  const star = (() => {
    const shape = roundedPoly(starPoints(200, 212, 135, 60), i => (i % 2 === 0 ? 0.15 : 0.1));
    const sparkles = [sparkle(78, 92, 14), sparkle(326, 86, 12), sparkle(66, 296, 10), sparkle(336, 300, 14)];
    return {
      id: "star_11",
      title: t("Stella Sorridente", "Smiling Star"),
      category: "Natura", difficulty: "Facile", iconEmoji: "⭐", bg: "#EEEAFF",
      steps: [
        {
          stepNumber: 1,
          instruction: t("Disegna una grande stella a cinque punte con le punte arrotondate.", "Draw a big five-pointed star with rounded tips."),
          tips: t("Parti dalla punta in alto e vai giù, su, giù... senza staccare la matita!", "Start from the top point and go down, up, down... without lifting the pencil!"),
          strokes: [shape]
        },
        {
          stepNumber: 2,
          instruction: t("Al centro fai due occhioni rotondi alla stessa altezza.", "In the middle draw two big round eyes at the same height."),
          tips: t("Ricordati il puntino bianco per farli brillare.", "Remember the little white spot to make them sparkle."),
          strokes: [...eye(176, 204, 10), ...eye(224, 204, 10)]
        },
        {
          stepNumber: 3,
          instruction: t("Disegna un bel sorriso e un riflesso luccicante sulla punta in alto.", "Draw a big smile and a shiny reflection on the top point."),
          tips: t("Il sorriso è una 'u' proprio sotto gli occhi.", "The smile is a 'u' right under the eyes."),
          strokes: ["M 186,228 Q 200,242 214,228", "M 194,108 Q 190,122 189,136"]
        },
        {
          stepNumber: 4,
          instruction: t("Aggiungi tante stelline scintillanti tutto intorno!", "Add lots of twinkling little stars all around!"),
          tips: t("Le stelline hanno quattro punte, come un rombo con i lati curvi.", "The little stars have four points, like a diamond with curvy sides."),
          strokes: [...sparkles, circle(118, 52, 5), circle(300, 360, 5)]
        }
      ],
      colors: [
        { d: shape, fill: "#FFD166" },
        { d: ellipse(160, 224, 11, 7), fill: "#FF9EB5" }, { d: ellipse(240, 224, 11, 7), fill: "#FF9EB5" },
        ...sparkles.map(d => ({ d, fill: "#FFE08A" }))
      ]
    };
  })();

  /* =============================================================
     🍦 12. GELATO
     ============================================================= */
  const icecream = (() => {
    const cone = "M 146,231 L 194,352 Q 200,364 206,352 L 254,231";
    const top = "M 150,160 C 140,120 165,92 200,92 C 235,92 260,120 250,160 C 246,170 236,172 232,164 C 226,176 212,178 206,168 C 200,178 184,178 178,166 C 172,174 156,172 150,160 Z";
    const bottom = "M 153,165 C 126,170 114,196 128,222 C 132,232 144,236 152,226 C 160,240 174,242 182,230 C 190,244 212,244 220,230 C 226,242 240,240 248,226 C 256,236 266,232 272,222 C 286,196 274,170 248,164";
    const waffle = ["M 178,244 L 213,333", "M 205,244 L 227,299", "M 232,244 L 240,265"];
    const cherry = circle(200, 77, 14);
    return {
      id: "icecream_12",
      title: t("Gelato Goloso", "Yummy Ice Cream"),
      category: "Natura", difficulty: "Facile", iconEmoji: "🍦", bg: "#FFEFF5",
      steps: [
        {
          stepNumber: 1,
          instruction: t("Disegna il cono: due linee che scendono e si incontrano in una punta rotonda.", "Draw the cone: two lines going down that meet in a round point."),
          tips: t("Non chiudere il cono in alto: lì ci andrà il gelato!", "Don't close the cone at the top: that's where the ice cream goes!"),
          strokes: [cone]
        },
        {
          stepNumber: 2,
          instruction: t("In alto disegna la pallina di gelato di sopra, con le gocce che colano.", "At the top draw the upper scoop, with drips running down."),
          tips: t("Il bordo sotto è ondulato, come panna che si scioglie.", "The bottom edge is wavy, like melting cream."),
          strokes: [top]
        },
        {
          stepNumber: 3,
          instruction: t("Sotto aggiungi la seconda pallina, più larga, che copre la cima del cono.", "Below add the second scoop, wider, covering the top of the cone."),
          tips: t("Parti dal bordo della prima pallina e torna lì alla fine.", "Start from the edge of the first scoop and come back there at the end."),
          strokes: [bottom]
        },
        {
          stepNumber: 4,
          instruction: t("Disegna le righe incrociate della cialda croccante.", "Draw the crossing lines of the crunchy waffle."),
          tips: t("Prima tutte le righe in una direzione, poi tutte nell'altra.", "First all the lines in one direction, then all in the other."),
          strokes: [...waffle, ...waffle.map(d => mirror(d))]
        },
        {
          stepNumber: 5,
          instruction: t("Metti in cima una ciliegina con il gambo e tanti zuccherini!", "Put a cherry with a stem on top and lots of sprinkles!"),
          tips: t("Gli zuccherini sono trattini corti messi un po' storti.", "Sprinkles are short dashes placed a bit crooked."),
          strokes: [
            cherry, { d: circle(195, 72, 3.5), fill: WHITE, stroke: false }, "M 203,63 C 207,48 216,40 228,38",
            "M 172,120 L 180,115", "M 214,112 L 222,116", "M 192,134 L 195,142", "M 230,138 L 236,131", "M 166,146 L 173,151", "M 210,150 L 218,150",
            "M 140,198 L 147,193", "M 253,193 L 260,198", "M 176,198 L 178,206", "M 222,200 L 229,204", "M 198,212 L 205,209"
          ]
        }
      ],
      colors: [
        { d: cone + " Z", fill: "#F2B36B" },
        { d: bottom + " Z", fill: "#9FE6C8" },
        { d: top, fill: "#FF9EC4" },
        { d: cherry, fill: "#FF4D6D" }
      ]
    };
  })();

  /* =============================================================
     🏠 13. CASETTA
     ============================================================= */
  const house = (() => {
    const walls = "M 112,206 L 112,340 L 288,340 L 288,206";
    const roof = "M 88,206 L 200,98 L 312,206 Z";
    const chimney = "M 236,133 L 236,96 L 262,96 L 262,158";
    const cap = "M 230,84 L 268,84 L 268,96 L 230,96 Z";
    const door = "M 178,340 L 178,286 A 22,22 0 0,1 222,286 L 222,340";
    const winL = "M 128,232 L 166,232 L 166,270 L 128,270 Z";
    const winR = mirror(winL);
    const attic = circle(200, 160, 16);
    const smoke = [circle(252, 66, 8), circle(266, 46, 11), circle(288, 24, 8)];
    const bushL = "M 108,340 C 114,322 104,304 90,310 C 86,296 62,296 58,312 C 44,312 42,334 52,340";
    const bushR = mirror(bushL);
    return {
      id: "house_13",
      title: t("Casetta nel Bosco", "Cozy House"),
      category: "Natura", difficulty: "Facile", iconEmoji: "🏠", bg: "#E6F6FF",
      steps: [
        {
          stepNumber: 1,
          instruction: t("Disegna i muri della casa: due linee in piedi unite da una riga in basso.", "Draw the house walls: two standing lines joined by a line at the bottom."),
          tips: t("Non serve la riga in alto: la coprirà il tetto.", "No need for a top line: the roof will cover it."),
          strokes: [walls]
        },
        {
          stepNumber: 2,
          instruction: t("Aggiungi il tetto a triangolo e il comignolo sul lato destro.", "Add the triangle roof and the chimney on the right side."),
          tips: t("Il tetto sporge un po' dai muri, per riparare dalla pioggia.", "The roof sticks out a bit past the walls, to keep the rain off."),
          strokes: [roof, chimney, cap]
        },
        {
          stepNumber: 3,
          instruction: t("Disegna la porta ad arco con la maniglia e due finestre a croce.", "Draw the arched door with a knob and two cross windows."),
          tips: t("Le finestre sono due quadrati uguali, uno per lato.", "The windows are two equal squares, one on each side."),
          strokes: [door, dot(212, 314, 4), winL, "M 147,232 L 147,270", "M 128,251 L 166,251", winR, mirror("M 147,232 L 147,270"), mirror("M 128,251 L 166,251")]
        },
        {
          stepNumber: 4,
          instruction: t("Fai la finestrella tonda nel tetto e gli sbuffi di fumo dal comignolo.", "Draw the round window in the roof and puffs of smoke from the chimney."),
          tips: t("Il fumo sale con palline sempre più in alto.", "The smoke rises in little balls, higher and higher."),
          strokes: [attic, "M 200,144 L 200,176", "M 184,160 L 216,160", ...smoke]
        },
        {
          stepNumber: 5,
          instruction: t("Disegna il prato, il vialetto davanti alla porta e due cespugli.", "Draw the lawn, the path in front of the door and two bushes."),
          tips: t("Il vialetto si allarga venendo verso di te.", "The path gets wider as it comes towards you."),
          strokes: ["M 30,340 L 112,340", "M 288,340 L 370,340", "M 178,340 L 162,374", "M 222,340 L 238,374", bushL, bushR]
        }
      ],
      colors: [
        { d: "M 30,340 L 370,340 L 370,374 L 30,374 Z", fill: "#C8EBC0" },
        { d: "M 178,340 L 162,374 L 238,374 L 222,340 Z", fill: "#EBDCC2" },
        ...smoke.map(d => ({ d, fill: "#EEF0F5" })),
        { d: chimney + " Z", fill: "#C9705A" }, { d: cap, fill: "#A85A48" },
        { d: walls + " Z", fill: "#FFE3A3" },
        { d: roof, fill: "#FF6B6B" },
        { d: door + " Z", fill: "#C07A4A" },
        { d: winL, fill: "#BDE7FF" }, { d: winR, fill: "#BDE7FF" },
        { d: attic, fill: "#BDE7FF" },
        { d: bushL, fill: "#6BCB77" }, { d: bushR, fill: "#6BCB77" }
      ]
    };
  })();

  /* =============================================================
     🍄 14. FUNGHETTO
     ============================================================= */
  const mushroom = (() => {
    const cap = "M 90,214 C 90,130 140,86 200,86 C 260,86 310,130 310,214 C 310,228 290,232 200,232 C 110,232 90,228 90,214 Z";
    const stem = "M 161,231 C 150,262 146,300 152,326 C 156,340 172,344 200,344 C 228,344 244,340 248,326 C 254,300 250,262 239,231";
    const spots = [circle(200, 124, 18), circle(146, 168, 16), circle(254, 168, 16), circle(150, 118, 9), circle(250, 118, 9), circle(112, 200, 9), circle(288, 200, 9), circle(200, 184, 12)];
    const grassL = "M 102,344 L 110,326 L 118,344 L 126,316 L 134,344 L 142,330 L 148,344";
    const grassR = mirror(grassL);
    const sparkles = [sparkle(70, 110, 12), sparkle(334, 96, 14), sparkle(56, 250, 8), sparkle(346, 262, 9)];
    return {
      id: "mushroom_14",
      title: t("Funghetto Magico", "Magic Mushroom"),
      category: "Natura", difficulty: "Facile", iconEmoji: "🍄", bg: "#EAF8E6",
      steps: [
        {
          stepNumber: 1,
          instruction: t("Disegna il cappello del fungo: una grande cupola con il bordo sotto un po' curvo.", "Draw the mushroom cap: a big dome with a slightly curved bottom edge."),
          tips: t("È come un ombrello aperto visto di lato.", "It's like an open umbrella seen from the side."),
          strokes: [cap]
        },
        {
          stepNumber: 2,
          instruction: t("Sotto il cappello disegna il gambo, paffuto e arrotondato in fondo.", "Under the cap draw the stem, chubby and rounded at the bottom."),
          tips: t("Il gambo parte dal bordo del cappello: non c'è bisogno di riga in alto.", "The stem starts from the edge of the cap: no top line needed."),
          strokes: [stem]
        },
        {
          stepNumber: 3,
          instruction: t("Decora il cappello con tanti pois rotondi, grandi e piccoli.", "Decorate the cap with lots of round spots, big and small."),
          tips: t("Metti i pois uguali a destra e a sinistra.", "Put matching spots on the right and on the left."),
          strokes: spots
        },
        {
          stepNumber: 4,
          instruction: t("Sul gambo disegna due occhietti e un dolce sorriso.", "On the stem draw two little eyes and a sweet smile."),
          tips: t("Ora il funghetto è diventato un personaggio delle fiabe!", "Now the mushroom has become a fairy-tale character!"),
          strokes: [...eye(182, 282, 7), ...eye(218, 282, 7), "M 190,298 Q 200,308 210,298"]
        },
        {
          stepNumber: 5,
          instruction: t("Aggiungi il prato, i ciuffi d'erba a zig-zag e le scintille magiche!", "Add the ground, zig-zag grass tufts and magic sparkles!"),
          tips: t("L'erba è una linea a zig-zag: su, giù, su, giù!", "Grass is a zig-zag line: up, down, up, down!"),
          strokes: ["M 50,344 L 350,344", grassL, grassR, ...sparkles]
        }
      ],
      colors: [
        { d: stem + " Z", fill: "#FFF0D9" },
        { d: cap, fill: "#FF5E5E" },
        ...spots.map(d => ({ d, fill: WHITE })),
        { d: ellipse(170, 296, 9, 6), fill: BLUSH }, { d: ellipse(230, 296, 9, 6), fill: BLUSH },
        { d: grassL, fill: "#6BCB77" }, { d: grassR, fill: "#6BCB77" },
        ...sparkles.map(d => ({ d, fill: "#FFD166" }))
      ]
    };
  })();

  return [cat, dog, bunny, fish, butterfly, penguin, car, plane, rocket, boat, star, icecream, house, mushroom];
})();
