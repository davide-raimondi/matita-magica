/* =============================================================
   MATITA MAGICA - DATASET COMPLETO DELLE 14 LEZIONI PERFEZIONATE
   Categorie: Animali (6), Mezzi (4), Natura & Oggetti (4)
   Soggetti:
   1.  cat_01:     🐱 Gattino Dolce (Animali)
   2.  dog_02:     🐶 Cagnolino Allegro (Animali)
   3.  bunny_03:   🐰 Coniglietto Birichino (Animali)
   4.  fish_04:    🐠 Pesciolino Tropicale (Animali)
   5.  butterfly_05: 🦋 Farfalla Magica (Animali)
   6.  penguin_06: 🐧 Pinguino Birichino (Animali)
   7.  car_07:     🚗 Macchinina Sprint (Mezzi)
   8.  plane_08:   ✈️ Aereo nei Cieli (Mezzi)
   9.  rocket_09:  🚀 Razzo Spaziale (Mezzi)
   10. boat_10:    ⛵ Barchetta a Vela (Mezzi)
   11. star_11:    ⭐ Stella Sorridente (Natura & Oggetti)
   12. icecream_12: 🍦 Gelato Goloso (Natura & Oggetti)
   13. house_13:   🏠 Casetta nel Bosco (Natura & Oggetti)
   14. mushroom_14: 🍄 Funghetto Magico (Natura & Oggetti)
   ============================================================= */

const lessonsData = [
  // -------------------------------------------------------------
  // CATEGORIA 1: 🐾 Animali (6 soggetti)
  // -------------------------------------------------------------
  {
    id: "cat_01",
    title: { it: "Gattino Dolce", en: "Sweet Kitten" },
    category: "Animali",
    difficulty: "Facile",
    iconEmoji: "🐱",
    steps: [
      {
        stepNumber: 1,
        instruction: { it: "Disegna un bell'ovale orizzontale al centro del foglio per la testa del gattino!", en: "Draw a nice horizontal oval in the middle of the page for the kitten's head!" },
        tips: { it: "Muovi il polso leggero e rotondo per fare guancette morbide.", en: "Keep your wrist light and loose to make soft, cute cheeks." },
        svgD: "M 120,180 C 100,195 100,230 130,245 C 160,255 240,255 270,245 C 300,230 300,195 280,180 C 260,160 140,160 120,180 Z"
      },
      {
        stepNumber: 2,
        instruction: { it: "Sopra la testa aggiungi due orecchie a punta con i triangolini interni!", en: "Add two pointed ears on top of the head with inner triangles!" },
        tips: { it: "I triangoli interni fanno sembrare le orecchie vere e attente.", en: "Inner triangles give the ears depth and life." },
        svgD: "M 135,170 L 115,100 L 175,155 M 225,155 L 285,100 L 265,170 M 135,155 L 125,115 L 165,148 M 235,148 L 275,115 L 265,155"
      },
      {
        stepNumber: 3,
        instruction: { it: "Fai due cerchietti per gli occhi, il nasino a triangolo, la boccuccia e i baffetti!", en: "Make circle eyes, a triangle nose, a cute smile, and whiskers!" },
        tips: { it: "La bocca ha la forma di una dolce 'w' collegata al nasino.", en: "The mouth looks like a soft 'w' connected to the nose." },
        svgD: "M 160,195 A 8,8 0 1,0 160,195.1 M 240,195 A 8,8 0 1,0 240,195.1 M 195,212 L 205,212 L 200,218 Z M 200,218 L 200,222 Q 190,230 182,222 M 200,222 Q 210,230 218,222 M 115,208 L 75,202 M 115,216 L 70,218 M 115,224 L 75,234 M 285,208 L 325,202 M 285,216 L 330,218 M 285,224 L 325,234"
      },
      {
        stepNumber: 4,
        instruction: { it: "Disegna il corpo seduto, due zampette con le dita e la coda felice che si arriccia!", en: "Draw the sitting body, two front paws with toes, and a happy curling tail!" },
        tips: { it: "Le zampette davanti poggiano sul pavimento.", en: "The front paws rest neatly on the floor." },
        svgD: "M 145,248 C 135,285 125,320 125,345 L 275,345 C 275,320 265,285 255,248 M 170,345 L 170,310 C 170,300 190,300 190,310 L 190,345 M 210,345 L 210,310 C 210,300 230,300 230,310 L 230,345 M 177,345 L 177,338 M 183,345 L 183,338 M 217,345 L 217,338 M 223,345 L 223,338 M 265,335 C 315,345 340,300 325,260 C 315,235 290,240 295,260 C 300,275 315,280 305,310 C 295,330 275,325 260,325"
      }
    ]
  },
  {
    id: "dog_02",
    title: { it: "Cagnolino Allegro", en: "Happy Puppy" },
    category: "Animali",
    difficulty: "Facile",
    iconEmoji: "🐶",
    steps: [
      {
        stepNumber: 1,
        instruction: { it: "Traccia un cerchio rotondo e simpatico nella parte alta del foglio.", en: "Draw a friendly round circle in the upper half of your paper." },
        tips: { it: "Tutti i cagnolini sono unici, non serve che sia perfetto!", en: "Every puppy is unique, it does not need to be a perfect circle!" },
        svgD: "M 200,115 C 135,115 130,225 200,235 C 270,225 265,115 200,115 Z"
      },
      {
        stepNumber: 2,
        instruction: { it: "Aggiungi due grandi orecchie a goccia che cadono morbide ai lati.", en: "Add two floppy teardrop ears hanging gently by the sides." },
        tips: { it: "Come due pere morbide capovolte.", en: "Like two inverted soft pears." },
        svgD: "M 145,150 C 95,165 85,245 115,265 C 135,265 145,215 142,180 M 255,150 C 305,165 315,245 285,265 C 265,265 255,215 258,180"
      },
      {
        stepNumber: 3,
        instruction: { it: "Fai gli occhietti lucidi, il tartufo a cuore e la bocca con la linguetta!", en: "Draw glossy eyes, a heart button nose, and smiling mouth with tongue!" },
        tips: { it: "La linguetta che sbuca fa sembrare il cagnolino felicissimo.", en: "The peeking tongue makes the pup look thrilled." },
        svgD: "M 170,165 A 7,7 0 1,1 170,165.1 M 230,165 A 7,7 0 1,1 230,165.1 M 172,163 A 2,2 0 1,1 172,163.1 M 232,163 A 2,2 0 1,1 232,163.1 M 190,195 Q 200,186 210,195 Q 200,210 190,195 Z M 200,208 L 200,218 Q 188,228 178,218 M 200,218 Q 212,228 222,218 M 194,222 C 194,236 206,236 206,222"
      },
      {
        stepNumber: 4,
        instruction: { it: "Disegna il corpo seduto, due zampette che toccano terra e la coda che scodinzola!", en: "Draw the sitting body, two front paws on the floor, and a wagging tail!" },
        tips: { it: "Le zampette anteriori hanno le dita pronte a saltare.", en: "Front paws have cute toes ready to bounce." },
        svgD: "M 150,228 C 140,270 120,315 120,345 L 280,345 C 280,315 260,270 250,228 M 170,345 L 170,275 C 170,265 190,265 190,275 L 190,345 M 210,345 L 210,275 C 210,265 230,265 230,275 L 230,345 M 177,345 L 177,338 M 183,345 L 183,338 M 217,345 L 217,338 M 223,345 L 223,338 M 270,320 C 310,320 330,285 320,265 C 310,250 295,265 295,280 C 295,300 275,310 265,312"
      }
    ]
  },
  {
    id: "bunny_03",
    title: { it: "Coniglietto Birichino", en: "Playful Bunny" },
    category: "Animali",
    difficulty: "Facile",
    iconEmoji: "🐰",
    steps: [
      {
        stepNumber: 1,
        instruction: { it: "Disegna una forma ovale morbida, leggermente più stretta in cima.", en: "Draw a soft egg shape, slightly narrower at the top." },
        tips: { it: "Come un uovo di Pasqua in piedi!", en: "Just like an upright Easter egg!" },
        svgD: "M 200,145 C 145,145 135,245 200,245 C 265,245 255,145 200,145 Z"
      },
      {
        stepNumber: 2,
        instruction: { it: "Traccia due grandi archi altissimi con l'interno morbido per le orecchie!", en: "Draw two tall long loops with inner soft arches for bunny ears!" },
        tips: { it: "Più sono lunghe, più il coniglio sarà buffo e curioso.", en: "The longer the ears, the funnier the bunny will look." },
        svgD: "M 175,155 C 150,60 165,40 185,40 C 200,40 198,105 192,150 M 208,150 C 202,105 200,40 215,40 C 235,40 250,60 225,155 M 178,135 C 165,75 172,60 185,60 C 193,60 192,105 188,135 M 212,135 C 208,105 207,60 215,60 C 228,60 235,75 222,135"
      },
      {
        stepNumber: 3,
        instruction: { it: "Due occhietti lucidi, nasino, dentoni da carota e simpatici baffetti!", en: "Add shiny eyes, a tiny nose, carrot-crunching teeth, and cute whiskers!" },
        tips: { it: "I dentoni sono un quadratino diviso a metà al centro della bocca.", en: "Two front teeth split in the middle make the bunny super cute." },
        svgD: "M 170,185 A 6,6 0 1,1 170,185.1 M 230,185 A 6,6 0 1,1 230,185.1 M 194,200 L 206,200 L 200,206 Z M 200,206 L 200,212 Q 192,218 184,212 M 200,212 Q 208,218 216,212 M 194,213 L 194,225 L 206,225 L 206,213 M 200,213 L 200,225 M 155,202 L 115,198 M 155,210 L 110,214 M 245,202 L 285,198 M 245,210 L 290,214"
      },
      {
        stepNumber: 4,
        instruction: { it: "Aggiungi il corpo seduto, le zampette anteriori e una codina soffice a pon-pon!", en: "Draw the sitting body, two front paws, and a fluffy pom-pom tail!" },
        tips: { it: "Le zampette davanti aiutano il coniglietto a reggersi in piedi.", en: "Front paws help the bunny sit neatly upright." },
        svgD: "M 150,240 C 135,280 120,320 120,345 L 280,345 C 280,320 265,280 250,240 M 170,345 L 170,295 C 170,285 190,285 190,295 L 190,345 M 210,345 L 210,295 C 210,285 230,285 230,295 L 230,345 M 265,330 C 285,320 295,335 285,345 C 275,355 260,345 265,330"
      }
    ]
  },
  {
    id: "fish_04",
    title: { it: "Pesciolino Tropicale", en: "Tropical Fish" },
    category: "Animali",
    difficulty: "Facile",
    iconEmoji: "🐠",
    steps: [
      {
        stepNumber: 1,
        instruction: { it: "Disegna una bella forma affusolata a goccia orizzontale con la boccuccia a cuoricino!", en: "Draw a sleek horizontal teardrop shape with a cute little kiss mouth!" },
        tips: { it: "La boccuccia a sinistra sembra mandare un dolce bacetto nell'acqua.", en: "The little mouth on the left looks like blowing a sweet underwater kiss." },
        svgD: "M 100,200 C 100,120 260,120 290,200 C 260,280 100,280 100,200 Z M 95,195 Q 85,200 95,205"
      },
      {
        stepNumber: 2,
        instruction: { it: "Aggiungi la grande coda a ventaglio e le pinne morbide sopra e sotto!", en: "Add the big fan tail and soft fins on top and bottom!" },
        tips: { it: "La coda si allarga sul retro per farlo nuotare velocissimo.", en: "The tail widens at the back to help it swim super fast." },
        svgD: "M 290,200 L 345,150 C 330,185 330,215 345,250 Z M 180,135 C 200,95 240,110 250,140 M 190,265 C 205,300 235,295 240,265"
      },
      {
        stepNumber: 3,
        instruction: { it: "Disegna il grande occhio lucido, le strisce colorate sul corpo e sulla coda!", en: "Draw the big shiny eye, and cheerful stripes on the body and tail!" },
        tips: { it: "Due curve verticali creano le classiche strisce da pesciolino pagliaccio.", en: "Two vertical curves make classic clownfish stripes." },
        svgD: "M 140,180 A 12,12 0 1,1 140,180.1 M 143,177 A 4,4 0 1,1 143,177.1 M 175,145 C 190,175 190,225 175,255 M 225,145 C 235,175 235,225 225,255 M 295,175 L 325,170 M 295,225 L 325,230"
      },
      {
        stepNumber: 4,
        instruction: { it: "Fai la pinnetta laterale e tre simpatiche bollicine d'aria che salgono!", en: "Add the side flipper and three cute air bubbles floating up!" },
        tips: { it: "Fai le bollicine di grandezze diverse, dalla più piccola alla più grande.", en: "Draw bubbles of different sizes floating upward." },
        svgD: "M 160,205 C 175,195 190,205 185,220 C 175,230 160,215 160,205 Z M 75,160 A 7,7 0 1,1 75,160.1 M 60,125 A 10,10 0 1,1 60,125.1 M 75,90 A 6,6 0 1,1 75,90.1"
      }
    ]
  },
  {
    id: "butterfly_05",
    title: { it: "Farfalla Magica", en: "Magic Butterfly" },
    category: "Animali",
    difficulty: "Medio",
    iconEmoji: "🦋",
    steps: [
      {
        stepNumber: 1,
        instruction: { it: "Traccia la testolina tonda, il corpicino allungato e le due antenne arricciate!", en: "Draw the round head, slender body, and two curled antennae!" },
        tips: { it: "Le punte delle antenne formano due piccoli ricciolini curiosi.", en: "The tips of the antennae make cute curious little swirls." },
        svgD: "M 200,165 A 12,12 0 1,1 200,165.1 M 193,177 C 190,205 190,255 195,290 C 205,290 205,205 203,177 Z M 196,155 C 185,125 165,120 165,130 C 165,138 175,138 175,130 M 204,155 C 215,125 235,120 235,130 C 235,138 225,138 225,130"
      },
      {
        stepNumber: 2,
        instruction: { it: "Disegna le due grandi ali superiori che si aprono verso l'alto come cuori!", en: "Draw two large upper wings opening up like big hearts!" },
        tips: { it: "Falle ampie e simmetriche a destra e a sinistra.", en: "Make them wide and symmetrical on both left and right." },
        svgD: "M 203,185 C 240,110 335,100 340,175 C 345,225 270,240 203,225 M 197,185 C 160,110 65,100 60,175 C 55,225 130,240 197,225"
      },
      {
        stepNumber: 3,
        instruction: { it: "Aggiungi le due ali inferiori arrotondate e morbide verso il basso!", en: "Add the two lower rounded wings flowing gently downward!" },
        tips: { it: "Le ali inferiori sono un pochino più piccole di quelle superiori.", en: "The lower wings are slightly smaller than the top ones." },
        svgD: "M 203,230 C 260,240 295,295 260,335 C 230,360 205,300 203,270 M 197,230 C 140,240 105,295 140,335 C 170,360 195,300 197,270"
      },
      {
        stepNumber: 4,
        instruction: { it: "Decora le ali con cerchietti magici e pois colorati!", en: "Decorate the wings with magical circles and charming dots!" },
        tips: { it: "In natura ogni farfalla ha disegni unici sulle ali.", en: "In nature, every butterfly has unique wing patterns." },
        svgD: "M 275,165 A 14,14 0 1,1 275,165.1 M 125,165 A 14,14 0 1,1 125,165.1 M 245,295 A 9,9 0 1,1 245,295.1 M 155,295 A 9,9 0 1,1 155,295.1 M 310,140 A 5,5 0 1,1 310,140.1 M 90,140 A 5,5 0 1,1 90,140.1"
      }
    ]
  },
  {
    id: "penguin_06",
    title: { it: "Pinguino Birichino", en: "Cute Penguin" },
    category: "Animali",
    difficulty: "Facile",
    iconEmoji: "🐧",
    steps: [
      {
        stepNumber: 1,
        instruction: { it: "Disegna una grande sagoma paffuta a forma di uovo in piedi!", en: "Draw a big chubby upright egg shape for the penguin's body!" },
        tips: { it: "Il corpo del pinguino è morbido e arrotondato per proteggerlo dal freddo.", en: "The penguin's round chubby body keeps it warm in the snow." },
        svgD: "M 200,90 C 130,90 120,290 140,325 C 160,340 240,340 260,325 C 280,290 270,90 200,90 Z"
      },
      {
        stepNumber: 2,
        instruction: { it: "All'interno disegna il grande pancino bianco ad arco e la mascherina del viso!", en: "Draw the large white tummy arch and facial mask contour!" },
        tips: { it: "Crea una forma a cuore in cima che scende lungo il pancino.", en: "Create a soft heart dip at the top that flows down to the belly." },
        svgD: "M 170,145 C 185,135 200,150 200,150 C 200,150 215,135 230,145 C 250,165 245,325 200,325 C 155,325 150,165 170,145 Z"
      },
      {
        stepNumber: 3,
        instruction: { it: "Fai due occhietti lucidi, il becco a triangolino e le due alette aperte!", en: "Add two glossy eyes, a triangle beak, and two flipper wings!" },
        tips: { it: "Le alette sono aperte pronte a scivolare sul ghiaccio.", en: "Flippers are wide open ready to slide on the ice." },
        svgD: "M 180,165 A 6,6 0 1,1 180,165.1 M 220,165 A 6,6 0 1,1 220,165.1 M 190,180 L 210,180 L 200,195 Z M 130,200 C 105,230 100,270 120,285 C 130,275 135,245 135,215 M 270,200 C 295,230 300,270 280,285 C 270,275 265,245 265,215"
      },
      {
        stepNumber: 4,
        instruction: { it: "Aggiungi le due zampette piatte arancioni e piccoli fiocchi di neve attorno!", en: "Add two cute webbed feet and falling snowflakes around!" },
        tips: { it: "Le zampette poggiano sul ghiaccio con passo buffo.", en: "The feet rest flat on the ground ready to waddle." },
        svgD: "M 155,328 C 145,345 150,355 175,350 L 175,328 M 245,328 C 255,345 250,355 225,350 L 225,328 M 80,110 L 95,110 M 87.5,102.5 L 87.5,117.5 M 310,130 L 325,130 M 317.5,122.5 L 317.5,137.5 M 70,230 A 3,3 0 1,1 70,230.1 M 330,240 A 3,3 0 1,1 330,240.1"
      }
    ]
  },

  // -------------------------------------------------------------
  // CATEGORIA 2: 🚗 Mezzi (4 soggetti)
  // -------------------------------------------------------------
  {
    id: "car_07",
    title: { it: "Macchinina Sprint", en: "Sprint Car" },
    category: "Mezzi",
    difficulty: "Facile",
    iconEmoji: "🚗",
    steps: [
      {
        stepNumber: 1,
        instruction: { it: "Disegna il profilo della carrozzeria con il cofano, il tetto e il bagagliaio!", en: "Draw the car body outline with hood, roof cabin, and trunk!" },
        tips: { it: "Lascia due spazi semicircolari sotto per posizionare le ruote.", en: "Leave two curved gaps at the bottom where wheels will sit." },
        svgD: "M 65,270 L 105,270 C 105,240 165,240 165,270 L 235,270 C 235,240 295,240 295,270 L 335,270 L 335,240 L 290,235 L 255,175 L 145,175 L 110,235 L 65,245 Z"
      },
      {
        stepNumber: 2,
        instruction: { it: "Inserisci le due grandi ruote rotonde con il cerchione interno!", en: "Fit two big round wheels with inner rims!" },
        tips: { it: "Due doppi cerchi concentrici perfetti per sfrecciare.", en: "Double concentric circles make sturdy racing wheels." },
        svgD: "M 110,270 A 25,25 0 1,0 160,270 A 25,25 0 1,0 110,270 Z M 125,270 A 10,10 0 1,0 145,270 A 10,10 0 1,0 125,270 Z M 240,270 A 25,25 0 1,0 290,270 A 25,25 0 1,0 240,270 Z M 255,270 A 10,10 0 1,0 275,270 A 10,10 0 1,0 255,270 Z"
      },
      {
        stepNumber: 3,
        instruction: { it: "Disegna i due finestrini, il faro rotondo e la maniglia della portiera!", en: "Draw two side windows, front headlights, and door line!" },
        tips: { it: "La linea verticale divide la portiera del guidatore.", en: "The center divider splits the front and rear seats." },
        svgD: "M 205,185 L 245,185 L 275,230 L 205,230 Z M 155,230 L 125,230 L 150,185 L 195,185 L 195,230 Z M 335,245 C 342,245 342,258 335,258 Z M 200,230 L 200,270 M 175,240 L 190,240"
      },
      {
        stepNumber: 4,
        instruction: { it: "Traccia la strada sfrecciante sotto le ruote e la nuvoletta di fumo dietro!", en: "Draw the speedy road beneath the wheels and exhaust smoke puffs!" },
        tips: { it: "I trattini sull'asfalto fanno sembrare l'auto in corsa a tutta velocità!", en: "Dashes along the road show the car zooming fast!" },
        svgD: "M 40,295 L 360,295 M 80,310 L 140,310 M 180,310 L 240,310 M 280,310 L 340,310 M 55,262 C 40,255 35,240 45,235 C 35,225 45,215 55,220 C 60,210 75,215 70,228"
      }
    ]
  },
  {
    id: "plane_08",
    title: { it: "Aereo nei Cieli", en: "Airplane in the Sky" },
    category: "Mezzi",
    difficulty: "Medio",
    iconEmoji: "✈️",
    steps: [
      {
        stepNumber: 1,
        instruction: { it: "Traccia una lunga fusoliera arrotondata con il muso a destra e la coda a sinistra.", en: "Draw a long rounded fuselage with nose on the right and tail on the left." },
        tips: { it: "Come un grande siluro morbido che vola tra le nuvole.", en: "Like a sleek smooth torpedo floating through air." },
        svgD: "M 75,190 C 75,160 300,160 330,185 C 335,190 335,195 330,200 C 300,215 75,215 75,190 Z"
      },
      {
        stepNumber: 2,
        instruction: { it: "Aggiungi le due grandi ali inclinate per spiccare il volo!", en: "Add two large angled wings ready to take flight!" },
        tips: { it: "L'ala superiore è più lunga perché è vista più da vicino.", en: "The upper wing looks larger in perspective." },
        svgD: "M 175,175 L 235,90 L 275,90 L 225,175 Z M 185,215 L 215,265 L 240,265 L 215,215 Z"
      },
      {
        stepNumber: 3,
        instruction: { it: "Disegna gli alettoni di coda per timonare in alto e in basso!", en: "Draw the tail wings and stabilizer fins!" },
        tips: { it: "La pinna di coda aiuta l'aereo a volare dritto.", en: "The tail fin keeps the plane stable in mid-air." },
        svgD: "M 115,175 L 70,110 L 105,110 L 135,175 Z M 110,205 L 80,235 L 100,235 L 125,205 Z"
      },
      {
        stepNumber: 4,
        instruction: { it: "Fai la cabina dei piloti, quattro oblò passeggeri e una soffice nuvoletta!", en: "Draw the cockpit windscreen, four passenger windows, and a fluffy cloud!" },
        tips: { it: "Gli oblò sono cerchietti allineati lungo la fusoliera.", en: "Portholes line up neatly along the passenger cabin." },
        svgD: "M 295,173 Q 315,178 322,188 L 305,188 Z M 170,192 A 4,4 0 1,1 170,192.1 M 200,192 A 4,4 0 1,1 200,192.1 M 230,192 A 4,4 0 1,1 230,192.1 M 260,192 A 4,4 0 1,1 260,192.1 M 265,285 C 255,270 280,255 295,265 C 310,255 330,265 330,280 C 345,280 345,300 330,305 L 270,305 C 255,305 255,290 265,285 Z"
      }
    ]
  },
  {
    id: "rocket_09",
    title: { it: "Razzo Spaziale", en: "Space Rocket" },
    category: "Mezzi",
    difficulty: "Medio",
    iconEmoji: "🚀",
    steps: [
      {
        stepNumber: 1,
        instruction: { it: "Disegna il corpo cilindrico slanciato con la punta conica ogiva!", en: "Draw the tall rocket body cylinder with a pointed nose cone!" },
        tips: { it: "Traccia due linee parallele verticali e uniscile in cima con un triangolo.", en: "Two straight vertical lines capped with an aerodynamic cone." },
        svgD: "M 160,260 L 160,155 C 160,120 200,75 200,75 C 200,75 240,120 240,155 L 240,260 Z"
      },
      {
        stepNumber: 2,
        instruction: { it: "Aggiungi le alette stabilizzatrici laterali e la bocca di fuoco sotto!", en: "Add stabilizing side fins and the bottom thruster nozzle!" },
        tips: { it: "Le ali a triangolo curvato tengono il razzo in rotta verso le stelle.", en: "Curved triangle fins keep the rocket flying steady." },
        svgD: "M 160,215 L 115,265 C 135,270 155,265 160,250 Z M 240,215 L 285,265 C 265,270 245,265 240,250 Z M 195,215 L 200,260 L 205,215 Z M 175,260 L 170,272 L 230,272 L 225,260"
      },
      {
        stepNumber: 3,
        instruction: { it: "Traccia il grande doppio oblò rotondo per gli astronauti e la linea sul cono!", en: "Draw the astronaut's double round window and nose stripes!" },
        tips: { it: "Un cerchio dentro l'altro fa sembrare il vetro super resistente.", en: "A circle inside another circle creates reinforced glass." },
        svgD: "M 200,150 A 24,24 0 1,0 200,198 A 24,24 0 1,0 200,150 Z M 200,158 A 16,16 0 1,0 200,190 A 16,16 0 1,0 200,158 Z M 165,135 Q 200,145 235,135"
      },
      {
        stepNumber: 4,
        instruction: { it: "Disegna le potenti fiamme di lancio a zig-zag e tante stelline luminose!", en: "Draw dynamic fiery blastoff flames and glittering stars around!" },
        tips: { it: "Linee a zig-zag appuntite creano l'energia del decollo spaziale!", en: "Zigzag fire tongues give maximum launching power." },
        svgD: "M 175,272 L 180,340 L 195,295 L 200,360 L 205,295 L 220,340 L 225,272 Z M 185,272 L 190,315 L 200,335 L 210,315 L 215,272 Z M 95,115 L 105,115 M 100,110 L 100,120 M 300,135 L 310,135 M 305,130 L 305,140 M 110,200 A 3,3 0 1,1 110,200.1 M 295,210 A 3,3 0 1,1 295,210.1"
      }
    ]
  },
  {
    id: "boat_10",
    title: { it: "Barchetta a Vela", en: "Sailboat" },
    category: "Mezzi",
    difficulty: "Facile",
    iconEmoji: "⛵",
    steps: [
      {
        stepNumber: 1,
        instruction: { it: "Disegna il fondo curvo dello scafo della barchetta!", en: "Draw the smooth curved hull of the boat!" },
        tips: { it: "I bordi salgono morbidi alle due estremità per galleggiare bene.", en: "The ends slope gently upward to float gracefully." },
        svgD: "M 80,260 L 115,315 C 160,330 240,330 285,315 L 320,260 Z"
      },
      {
        stepNumber: 2,
        instruction: { it: "Alza un alto albero maestro dritto con la bandierina del vento in cima!", en: "Raise a tall straight mast with a wind flag at the peak!" },
        tips: { it: "La bandierina mostra da che parte soffia la brezza marina.", en: "The little flag shows which way the sea breeze blows." },
        svgD: "M 195,260 L 195,75 M 195,75 L 230,88 L 195,100"
      },
      {
        stepNumber: 3,
        instruction: { it: "Disegna la grande vela maestra a triangolo e il fiocco davanti!", en: "Draw the large triangular main sail and the front jib sail!" },
        tips: { it: "Due triangoli gonfiati dal vento pronti a navigare.", en: "Two crisp sails catching the fresh ocean wind." },
        svgD: "M 190,95 L 115,245 L 190,245 Z M 202,110 L 275,245 L 202,245 Z"
      },
      {
        stepNumber: 4,
        instruction: { it: "Traccia le onde del mare e un simpatico gabbiano che vola in alto!", en: "Sketch rolling ocean waves and a flying seagull up above!" },
        tips: { it: "Le onde sono morbide curve collegate una dopo l'altra.", en: "Waves are soft repeating curves under the boat." },
        svgD: "M 50,335 Q 90,315 130,335 Q 170,355 210,335 Q 250,315 290,335 Q 330,355 365,335 M 285,110 Q 300,95 315,110 Q 330,95 345,110"
      }
    ]
  },

  // -------------------------------------------------------------
  // CATEGORIA 3: 🌟 Oggetti & Natura (4 soggetti)
  // -------------------------------------------------------------
  {
    id: "star_11",
    title: { it: "Stella Sorridente", en: "Smiling Star" },
    category: "Natura",
    difficulty: "Facile",
    iconEmoji: "⭐",
    steps: [
      {
        stepNumber: 1,
        instruction: { it: "Traccia una magica stella a cinque punte bella grande!", en: "Draw a magical five-pointed star nice and bright!" },
        tips: { it: "Ogni punta sale e scende con linee dritte e decise.", en: "Each point goes up and down with steady, clean strokes." },
        svgD: "M 200,80 L 230,155 L 310,160 L 250,210 L 270,290 L 200,245 L 130,290 L 150,210 L 90,160 L 170,155 Z"
      },
      {
        stepNumber: 2,
        instruction: { it: "Al centro fai due occhioni rotondi, perfettamente allineati!", en: "Make two round eyes in the center, perfectly aligned!" },
        tips: { it: "Gli occhietti a uguale altezza donano uno sguardo dolcissimo.", en: "Keeping eyes balanced makes the face look super sweet." },
        svgD: "M 175,185 A 8,8 0 1,1 175,185.1 M 225,185 A 8,8 0 1,1 225,185.1"
      },
      {
        stepNumber: 3,
        instruction: { it: "Disegna una boccuccia sorridente e due guancette felici!", en: "Draw a happy smile and two rosy blushing cheeks!" },
        tips: { it: "La curva del sorriso parte proprio tra i due occhietti.", en: "The smiling curve sits cheerfully right below the eyes." },
        svgD: "M 185,210 Q 200,225 215,210 M 160,205 A 6,6 0 1,1 160,205.1 M 240,205 A 6,6 0 1,1 240,205.1"
      },
      {
        stepNumber: 4,
        instruction: { it: "Aggiungi bagliori a croce e stelline scintillanti nello spazio attorno!", en: "Add shining cross-sparkles and tiny stars around!" },
        tips: { it: "Le stelline vicine fanno sembrare la stella luminosa e splendente.", en: "Surrounding sparkles make the star glow with magic." },
        svgD: "M 75,95 L 90,95 M 82.5,87.5 L 82.5,102.5 M 310,240 L 325,240 M 317.5,232.5 L 317.5,247.5 M 310,95 A 4,4 0 1,1 310,95.1 M 90,240 A 4,4 0 1,1 90,240.1"
      }
    ]
  },
  {
    id: "icecream_12",
    title: { it: "Gelato Goloso", en: "Yummy Ice Cream" },
    category: "Natura",
    difficulty: "Facile",
    iconEmoji: "🍦",
    steps: [
      {
        stepNumber: 1,
        instruction: { it: "Disegna un grande triangolo rovesciato per il cono di cialda!", en: "Draw a big inverted triangle for the crispy waffle cone!" },
        tips: { it: "La punta in basso regge tutto il gelato goloso.", en: "The bottom point holds all the delicious ice cream." },
        svgD: "M 140,220 L 200,360 L 260,220 Z"
      },
      {
        stepNumber: 2,
        instruction: { it: "Fai la trama a rombi incrociati della cialda croccante!", en: "Draw criss-cross diamond lines across the waffle cone!" },
        tips: { it: "Linee oblique che si incrociano creano la tipica cialda da gelateria.", en: "Diagonal crossing lines give authentic waffle texture." },
        svgD: "M 155,255 L 245,255 M 170,290 L 230,290 M 185,325 L 215,325 M 175,220 L 225,335 M 225,220 L 175,335"
      },
      {
        stepNumber: 3,
        instruction: { it: "Disegna due soffici palline di gelato una sopra l'altra con i bordi cremosi!", en: "Draw two fluffy scoops of ice cream with melting creamy edges!" },
        tips: { it: "La pallina sotto ha ondine morbide che sembrano panna che cola.", en: "The bottom scoop ripples gently over the cone edge." },
        svgD: "M 130,220 C 130,175 270,175 270,220 C 270,232 250,232 240,222 C 230,232 210,232 200,222 C 190,232 170,232 160,222 C 150,232 130,232 130,220 Z M 150,185 C 145,120 255,120 250,185"
      },
      {
        stepNumber: 4,
        instruction: { it: "Aggiungi una bella ciliegina lucida con il gambo e zuccherini colorati!", en: "Add a shiny cherry on top with a stem and sweet sprinkles!" },
        tips: { it: "La ciliegina in cima rende il gelato irresistibile!", en: "A cherry on top makes the treat look complete and yummy!" },
        svgD: "M 200,105 A 14,14 0 1,1 200,105.1 M 205,92 C 220,65 240,70 245,75 M 165,150 L 175,150 M 220,145 L 230,150 M 195,140 L 200,148 M 175,200 L 185,200 M 215,200 L 225,200"
      }
    ]
  },
  {
    id: "house_13",
    title: { it: "Casetta nel Bosco", en: "Cozy House" },
    category: "Natura",
    difficulty: "Facile",
    iconEmoji: "🏠",
    steps: [
      {
        stepNumber: 1,
        instruction: { it: "Disegna un bel quadrato solido per i muri della casetta!", en: "Draw a solid sturdy square for the house walls!" },
        tips: { it: "Linee dritte e orizzontali formano le fondamenta sicure.", en: "Straight level lines form a strong foundation." },
        svgD: "M 120,200 L 280,200 L 280,330 L 120,330 Z"
      },
      {
        stepNumber: 2,
        instruction: { it: "Aggiungi un grande tetto a punta triangolare sopra i muri!", en: "Add a large triangular pointed roof on top of the walls!" },
        tips: { it: "Il tetto sporge un po' ai lati per riparare dalla pioggia.", en: "Eaves overhang slightly on both sides to keep rain away." },
        svgD: "M 100,205 L 200,105 L 300,205"
      },
      {
        stepNumber: 3,
        instruction: { it: "Disegna la porta d'ingresso ad arco con la maniglia e le finestrelle a croce!", en: "Draw an arched front door with doorknob and two square windows!" },
        tips: { it: "La croce divide i vetri luminosi delle finestre.", en: "Cross dividers give cozy paned window glass." },
        svgD: "M 180,330 L 180,260 C 180,250 220,250 220,260 L 220,330 M 212,290 A 2.5,2.5 0 1,1 212,290.1 M 135,235 L 165,235 L 165,265 L 135,265 Z M 150,235 L 150,265 M 135,250 L 165,250 M 235,235 L 265,235 L 265,265 L 235,265 Z M 250,235 L 250,265 M 235,250 L 265,250"
      },
      {
        stepNumber: 4,
        instruction: { it: "Fai il camino con lo sbuffo di fumo e un abbaino rotondo in soffitta!", en: "Add a chimney puffing gentle smoke and a round attic window!" },
        tips: { it: "Il fumo a spirale fa sentire la casa calda e accogliente.", en: "Swirling chimney smoke makes the cottage feel warm and lived-in." },
        svgD: "M 235,140 L 235,95 L 260,95 L 260,165 M 230,95 L 265,95 M 248,85 C 240,70 255,60 245,45 C 240,35 255,25 250,15 M 200,140 A 15,15 0 1,0 200,170 A 15,15 0 1,0 200,140 Z M 200,140 L 200,170 M 185,155 L 215,155"
      }
    ]
  },
  {
    id: "mushroom_14",
    title: { it: "Funghetto Magico", en: "Magic Mushroom" },
    category: "Natura",
    difficulty: "Facile",
    iconEmoji: "🍄",
    steps: [
      {
        stepNumber: 1,
        instruction: { it: "Traccia una grande cupola larga e rotonda come un ombrello per il cappello!", en: "Draw a wide rounded umbrella dome for the mushroom cap!" },
        tips: { it: "Fai la base leggermente piatta e la cima ben arcuata.", en: "Keep the bottom rim gently flat and the top nicely arched." },
        svgD: "M 100,210 C 100,105 300,105 300,210 C 300,228 100,228 100,210 Z"
      },
      {
        stepNumber: 2,
        instruction: { it: "Disegna il gambo paffuto e robusto che spunta sotto il cappello!", en: "Draw the chubby sturdy stem growing beneath the cap!" },
        tips: { it: "Il gambo è un po' più largo in basso dove tocca il prato.", en: "The stem widens slightly at the base where it meets the soil." },
        svgD: "M 160,220 C 150,270 145,310 160,330 C 180,335 220,335 240,330 C 255,310 250,270 240,220"
      },
      {
        stepNumber: 3,
        instruction: { it: "Disegna cinque bei pois rotondi distribuiti dentro il cappello!", en: "Draw five circular polka dots neatly inside the cap!" },
        tips: { it: "I pois sono tutti all'interno del cappello per renderlo magico.", en: "Keep all dots neatly contained inside the mushroom cap." },
        svgD: "M 200,145 A 13,13 0 1,1 200,145.1 M 165,175 A 10,10 0 1,1 165,175.1 M 235,175 A 10,10 0 1,1 235,175.1 M 175,130 A 7,7 0 1,1 175,130.1 M 225,130 A 7,7 0 1,1 225,130.1"
      },
      {
        stepNumber: 4,
        instruction: { it: "Aggiungi due occhietti furbi, un dolce sorrisino e ciuffetti d'erba!", en: "Add two smiling eyes, a sweet grin, and blades of grass!" },
        tips: { it: "Il funghetto sembra un simpatico personaggio dei cartoni animati!", en: "The face turns the mushroom into a sweet fairytale character!" },
        svgD: "M 180,260 A 4,4 0 1,1 180,261 M 220,260 A 4,4 0 1,1 220,261 M 195,275 Q 200,285 205,275 M 120,330 L 135,310 L 145,335 L 160,315 M 240,335 L 255,315 L 265,335 L 280,310"
      }
    ]
  }
];
