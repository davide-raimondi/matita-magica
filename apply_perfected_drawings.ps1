$newLessonsData = @'
    const lessonsData = [
      // CATEGORIA 1: 🐾 Animali
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
        id: "turtle_04",
        title: { it: "Tartarughina Marina", en: "Sea Turtle" },
        category: "Animali",
        difficulty: "Medio",
        iconEmoji: "🐢",
        steps: [
          {
            stepNumber: 1,
            instruction: { it: "Disegna una bella cupola grande e tonda per il guscio della tartaruga.", en: "Draw a large curved dome shell for the sea turtle." },
            tips: { it: "Come una grande scodella rovesciata nell'acqua.", en: "Like a smooth upturned bowl floating in the water." },
            svgD: "M 110,240 C 110,140 290,140 290,240 C 290,250 110,250 110,240 Z"
          },
          {
            stepNumber: 2,
            instruction: { it: "Disegna la trama geometrica a scudi per creare la corazza magica.", en: "Draw geometric shield tiles to form the turtle's magic armor." },
            tips: { it: "Collega le linee per formare esagoni e scaglie sul carapace.", en: "Join the lines to create sturdy tiles on the shell." },
            svgD: "M 160,240 L 175,195 L 225,195 L 240,240 M 175,195 L 200,160 L 225,195 M 140,205 L 115,230 M 260,205 L 285,230 M 175,195 L 140,205 M 225,195 L 260,205"
          },
          {
            stepNumber: 3,
            instruction: { it: "Fai sbucare la testa sorridente, quattro pinne per nuotare e la codina!", en: "Add the smiling head, four swimming flippers, and a little tail!" },
            tips: { it: "Due pinne davanti grandi e due dietro più corte per virare.", en: "Two big front paddle flippers and two rear steering fins." },
            svgD: "M 285,225 C 325,205 350,225 340,248 C 330,260 295,255 285,242 M 325,224 A 4,4 0 1,1 325,224.1 M 335,236 Q 330,244 322,240 M 250,245 C 265,290 300,305 285,260 M 260,175 C 285,150 310,170 280,195 M 135,245 C 110,280 130,300 155,265 M 140,175 C 120,155 105,175 125,195 M 110,235 L 85,240 L 110,245"
          },
          {
            stepNumber: 4,
            instruction: { it: "Disegna bollicine d'acqua limpida intorno alla tartaruga che nuota!", en: "Add clean floating bubbles all around the swimming turtle!" },
            tips: { it: "Cerchietti di diverse misure fanno sembrare che stia nuotando nel mare profondo.", en: "Varying bubble sizes bring the blue sea atmosphere alive." },
            svgD: "M 350,195 A 6,6 0 1,1 350,195.1 M 370,165 A 9,9 0 1,1 370,165.1 M 345,140 A 5,5 0 1,1 345,140.1"
          }
        ]
      },

      // CATEGORIA 2: 🚗 Mezzi di Trasporto
      {
        id: "car_05",
        title: { it: "Macchinina Sprint", en: "Speedy Car" },
        category: "Mezzi",
        difficulty: "Facile",
        iconEmoji: "🚗",
        steps: [
          {
            stepNumber: 1,
            instruction: { it: "Disegna il profilo dell'auto con il tetto inclinato e gli archi per le ruote!", en: "Draw the car body outline with slanted roof and arched wheel arches!" },
            tips: { it: "Gli archetti in basso lasciano spazio per inserire le ruote rotonde.", en: "Arched cutouts at the bottom create space for the round wheels." },
            svgD: "M 65,270 L 105,270 C 105,240 165,240 165,270 L 235,270 C 235,240 295,240 295,270 L 335,270 L 335,240 L 290,235 L 255,175 L 145,175 L 110,235 L 65,245 Z"
          },
          {
            stepNumber: 2,
            instruction: { it: "Inserisci le due grandi ruote rotonde nei passaruota con i cerchioni!", en: "Fit two big round wheels inside the arches with shiny rims!" },
            tips: { it: "Un cerchietto più piccolo dentro ogni ruota fa il cerchione.", en: "A smaller inner circle makes the tire rim stand out." },
            svgD: "M 110,270 A 25,25 0 1,0 160,270 A 25,25 0 1,0 110,270 Z M 125,270 A 10,10 0 1,0 145,270 A 10,10 0 1,0 125,270 Z M 240,270 A 25,25 0 1,0 290,270 A 25,25 0 1,0 240,270 Z M 255,270 A 10,10 0 1,0 275,270 A 10,10 0 1,0 255,270 Z"
          },
          {
            stepNumber: 3,
            instruction: { it: "Disegna il parabrezza anteriore, il finestrino, la portiera e il faro!", en: "Add front and rear windows, the door outline, and bright headlight!" },
            tips: { it: "I finestrini seguono la forma del tettuccio dell'auto.", en: "The window frames mirror the roof's aerodynamic slant." },
            svgD: "M 205,185 L 245,185 L 275,230 L 205,230 Z M 155,230 L 125,230 L 150,185 L 195,185 L 195,230 Z M 335,245 C 342,245 342,258 335,258 Z M 200,230 L 200,270 M 175,240 L 190,240"
          },
          {
            stepNumber: 4,
            instruction: { it: "Traccia la strada veloce a strisce e i soffici sbuffi di fumo dietro!", en: "Draw the dashed speed road beneath and funny exhaust puffs behind!" },
            tips: { it: "Le linee della strada fanno sembrare che l'auto corra velocissima!", en: "Speed road dashes make the car look like it's zooming fast!" },
            svgD: "M 40,295 L 360,295 M 80,310 L 140,310 M 180,310 L 240,310 M 280,310 L 340,310 M 55,262 C 40,255 35,240 45,235 C 35,225 45,215 55,220 C 60,210 75,215 70,228"
          }
        ]
      },
      {
        id: "plane_06",
        title: { it: "Aereo nei Cieli", en: "Sky Plane" },
        category: "Mezzi",
        difficulty: "Medio",
        iconEmoji: "✈️",
        steps: [
          {
            stepNumber: 1,
            instruction: { it: "Disegna la fusoliera affusolata con il muso tondo e la coda sottile.", en: "Draw the sleek fuselage with a rounded nose and tapering tail." },
            tips: { it: "Come un lungo sottomarino che vola tra le nuvole.", en: "Like a smooth submarine flying gracefully through the sky." },
            svgD: "M 75,190 C 75,160 300,160 330,185 C 335,190 335,195 330,200 C 300,215 75,215 75,190 Z"
          },
          {
            stepNumber: 2,
            instruction: { it: "Disegna la grande ala superiore inclinata e quella inferiore più corta.", en: "Draw the large angled top wing and the shorter lower wing." },
            tips: { it: "Le ali sono inclinate all'indietro per volare veloci.", en: "Swept-back wings help the plane cut through the air." },
            svgD: "M 175,175 L 235,90 L 275,90 L 225,175 Z M 185,215 L 215,265 L 240,265 L 215,215 Z"
          },
          {
            stepNumber: 3,
            instruction: { it: "Sulla coda disegna il grande timone verticale e l'alettone stabilizzatore.", en: "On the tail, draw the tall vertical rudder and horizontal stabilizer." },
            tips: { it: "La pinna di coda mantiene l'aereo dritto nel vento.", en: "The tail fin keeps the airplane steady in the clouds." },
            svgD: "M 115,175 L 70,110 L 105,110 L 135,175 Z M 110,205 L 80,235 L 100,235 L 125,205 Z"
          },
          {
            stepNumber: 4,
            instruction: { it: "Aggiungi il parabrezza del pilota, quattro oblò rotondi e una nuvola soffice!", en: "Add the pilot cockpit windshield, four round portholes, and a fluffy cloud!" },
            tips: { it: "Gli oblò allineati mostrano dove siedono i passeggeri.", en: "Neatly lined portholes show where the smiling passengers sit." },
            svgD: "M 295,173 Q 315,178 322,188 L 305,188 Z M 170,192 A 4,4 0 1,1 170,192.1 M 200,192 A 4,4 0 1,1 200,192.1 M 230,192 A 4,4 0 1,1 230,192.1 M 260,192 A 4,4 0 1,1 260,192.1 M 265,285 C 255,270 280,255 295,265 C 310,255 330,265 330,280 C 345,280 345,300 330,305 L 270,305 C 255,305 255,290 265,285 Z"
          }
        ]
      },
      {
        id: "rocket_07",
        title: { it: "Razzo Spaziale", en: "Space Rocket" },
        category: "Mezzi",
        difficulty: "Medio",
        iconEmoji: "🚀",
        steps: [
          {
            stepNumber: 1,
            instruction: { it: "Disegna il corpo del razzo dritto con la punta a triangolo aerodinamico.", en: "Draw the straight rocket hull with an aerodynamic pointed nose cone." },
            tips: { it: "Una torre affusolata pronta a puntare verso la Luna.", en: "A sleek tower aiming straight for the Moon." },
            svgD: "M 160,260 L 160,155 C 160,120 200,75 200,75 C 200,75 240,120 240,155 L 240,260 Z"
          },
          {
            stepNumber: 2,
            instruction: { it: "Ai lati disegna le alette stabilizzatrici e l'ugello del motore sotto.", en: "On both sides draw launch fins and the rocket engine nozzle below." },
            tips: { it: "Le alette allargate mantengono la rotta nello spazio.", en: "Wide stabilizer fins keep the rocket flying straight." },
            svgD: "M 160,215 L 115,265 C 135,270 155,265 160,250 Z M 240,215 L 285,265 C 265,270 245,265 240,250 Z M 195,215 L 200,260 L 205,215 Z M 175,260 L 170,272 L 230,272 L 225,260"
          },
          {
            stepNumber: 3,
            instruction: { it: "Disegna un grande oblò doppio al centro per far guardare l'astronauta!", en: "Draw a double circular window where the astronaut looks outside!" },
            tips: { it: "Due cerchi concentrici creano un robusto finestrino spaziale.", en: "Two concentric circles make a sturdy space porthole." },
            svgD: "M 200,150 A 24,24 0 1,0 200,198 A 24,24 0 1,0 200,150 Z M 200,158 A 16,16 0 1,0 200,190 A 16,16 0 1,0 200,158 Z M 165,135 Q 200,145 235,135"
          },
          {
            stepNumber: 4,
            instruction: { it: "Sotto al motore fai ruggire le fiamme a zig-zag: 3, 2, 1... Decollo!", en: "Blast roaring propulsion flames from the engine nozzle: 3, 2, 1... Launch!" },
            tips: { it: "Le fiamme escono direttamente dall'ugello per dare la spinta.", en: "Flames roar straight out of the nozzle to launch into orbit." },
            svgD: "M 175,272 L 180,340 L 195,295 L 200,360 L 205,295 L 220,340 L 225,272 Z M 185,272 L 190,315 L 200,335 L 210,315 L 215,272 Z M 95,115 L 105,115 M 100,110 L 100,120 M 300,135 L 310,135 M 305,130 L 305,140 M 110,200 A 3,3 0 1,1 110,200.1 M 295,210 A 3,3 0 1,1 295,210.1"
          }
        ]
      },

      // CATEGORIA 3: 🌟 Oggetti & Natura
      {
        id: "star_08",
        title: { it: "Stella Sorridente", en: "Smiling Star" },
        category: "Natura",
        difficulty: "Facile",
        iconEmoji: "⭐",
        steps: [
          {
            stepNumber: 1,
            instruction: { it: "Traccia la stella a 5 punte con tratti simmetrici e armoniosi.", en: "Draw a classic 5-pointed star with smooth symmetrical lines." },
            tips: { it: "La punta in cima è perfettamente al centro del foglio.", en: "The top point sits right in the vertical center of the page." },
            svgD: "M 200,80 L 230,155 L 310,160 L 250,210 L 270,290 L 200,245 L 130,290 L 150,210 L 90,160 L 170,155 Z"
          },
          {
            stepNumber: 2,
            instruction: { it: "Disegna due occhietti tondi e dritti, perfettamente allineati al centro!", en: "Draw two neat round eyes, level and perfectly balanced in the center!" },
            tips: { it: "Occhietti ben allineati alla stessa altezza danno subito uno sguardo dolce.", en: "Keeping eyes level makes the star look sweet and cheerful." },
            svgD: "M 175,185 A 8,8 0 1,1 175,185.1 M 225,185 A 8,8 0 1,1 225,185.1"
          },
          {
            stepNumber: 3,
            instruction: { it: "Aggiungi un bel sorriso al centro e due guancette rotonde!", en: "Add a big happy smile in the middle and two rosy round cheeks!" },
            tips: { it: "La curva del sorriso è centrata tra i due occhi.", en: "The smile curves right in between both bright eyes." },
            svgD: "M 185,210 Q 200,225 215,210 M 160,205 A 6,6 0 1,1 160,205.1 M 240,205 A 6,6 0 1,1 240,205.1"
          },
          {
            stepNumber: 4,
            instruction: { it: "Disegna bagliori e brillanti stelline magiche attorno!", en: "Add magical twinkles and sparkles surrounding your shining star!" },
            tips: { it: "Piccole croci a forma di stella completano la notte serena.", en: "Little plus signs and diamond stars bring the night sky alive." },
            svgD: "M 75,95 L 90,95 M 82.5,87.5 L 82.5,102.5 M 310,240 L 325,240 M 317.5,232.5 L 317.5,247.5 M 310,95 A 4,4 0 1,1 310,95.1 M 90,240 A 4,4 0 1,1 90,240.1"
          }
        ]
      },
      {
        id: "house_09",
        title: { it: "Casetta nel Bosco", en: "Woodland Cottage" },
        category: "Natura",
        difficulty: "Facile",
        iconEmoji: "🏡",
        steps: [
          {
            stepNumber: 1,
            instruction: { it: "Disegna un bel quadrato solido al centro per le pareti della casetta.", en: "Draw a sturdy square right in the center for the cottage walls." },
            tips: { it: "Le pareti della casa devono essere ben stabili e dritte.", en: "Straight vertical walls create a warm, sturdy house." },
            svgD: "M 120,200 L 280,200 L 280,330 L 120,330 Z"
          },
          {
            stepNumber: 2,
            instruction: { it: "Sopra le pareti posa un grande tetto a triangolo per ripararsi.", en: "Rest a large sheltering triangle roof right above the walls." },
            tips: { it: "La punta del tetto è in alto per far scivolare via la pioggia.", en: "The triangular peak helps rain run off safely." },
            svgD: "M 100,205 L 200,105 L 300,205"
          },
          {
            stepNumber: 3,
            instruction: { it: "Disegna la porta centrale ad arco e due finestrelle con le imposte di legno!", en: "Add an arched front door and two symmetrical cross-pane windows!" },
            tips: { it: "Una finestra a sinistra e una a destra per far entrare tanta luce.", en: "One window on each side brings bright balanced sunlight inside." },
            svgD: "M 180,330 L 180,260 C 180,250 220,250 220,260 L 220,330 M 212,290 A 2.5,2.5 0 1,1 212,290.1 M 135,235 L 165,235 L 165,265 L 135,265 Z M 150,235 L 150,265 M 135,250 L 165,250 M 235,235 L 265,235 L 265,265 L 235,265 Z M 250,235 L 250,265 M 235,250 L 265,250"
          },
          {
            stepNumber: 4,
            instruction: { it: "Sul tetto metti il comignolo con fumo a spirale e l'abbaino rotondo!", en: "Add a chimney puffing spiral smoke and a round attic window!" },
            tips: { it: "Il fumo caldo fa capire che c'è una stufa accesa all'interno.", en: "Warm curling smoke shows a cozy fire crackling inside." },
            svgD: "M 235,140 L 235,95 L 260,95 L 260,165 M 230,95 L 265,95 M 248,85 C 240,70 255,60 245,45 C 240,35 255,25 250,15 M 200,140 A 15,15 0 1,0 200,170 A 15,15 0 1,0 200,140 Z M 200,140 L 200,170 M 185,155 L 215,155"
          }
        ]
      },
      {
        id: "mushroom_10",
        title: { it: "Funghetto Magico", en: "Magic Mushroom" },
        category: "Natura",
        difficulty: "Facile",
        iconEmoji: "🍄",
        steps: [
          {
            stepNumber: 1,
            instruction: { it: "Fai una linea curva morbida sotto e una grande cupola arrotondata sopra.", en: "Draw a curved base and a generous rounded dome cap over it." },
            tips: { it: "Immagina un ombrello aperto quando piove nel bosco.", en: "Like an open umbrella sheltering little forest critters." },
            svgD: "M 100,210 C 100,105 300,105 300,210 C 300,228 100,228 100,210 Z"
          },
          {
            stepNumber: 2,
            instruction: { it: "Sotto al cappello disegna un gambo paffuto che poggia a terra.", en: "Underneath the cap, draw a chubby stem resting on the forest floor." },
            tips: { it: "Un po' allargato verso il basso per sostenere il fungo.", en: "A thicker base keeps the fairy mushroom steady." },
            svgD: "M 160,220 C 150,270 145,310 160,330 C 180,335 220,335 240,330 C 255,310 250,270 240,220"
          },
          {
            stepNumber: 3,
            instruction: { it: "Riempi il cappello di cerchietti puliti tutti dentro la cupola!", en: "Decorate the cap with cute polka dots all neatly tucked inside!" },
            tips: { it: "I pallini bianchi sono tutti ben dentro i bordi del cappello.", en: "The dots fit nicely within the cap boundaries." },
            svgD: "M 200,145 A 13,13 0 1,1 200,145.1 M 165,175 A 10,10 0 1,1 165,175.1 M 235,175 A 10,10 0 1,1 235,175.1 M 175,130 A 7,7 0 1,1 175,130.1 M 225,130 A 7,7 0 1,1 225,130.1"
          },
          {
            stepNumber: 4,
            instruction: { it: "Aggiungi ciuffi d'erba sotto il gambo e due simpatici occhietti sul gambo!", en: "Add fresh grass blades at the base and a cute friendly face on the stem!" },
            tips: { it: "Dare un viso alle cose della natura le rende amiche dei bambini.", en: "Adding a friendly face makes nature come alive." },
            svgD: "M 180,260 A 4,4 0 1,1 180,261 M 220,260 A 4,4 0 1,1 220,261 M 195,275 Q 200,285 205,275 M 120,330 L 135,310 L 145,335 L 160,315 M 240,335 L 255,315 L 265,335 L 280,310"
          }
        ]
      },

      // NUOVI SOGGETTI PIÙ COMPLESSI (AVANZATI):
      {
        id: "dino_11",
        title: { it: "Dinosauro T-Rex", en: "T-Rex Dino" },
        category: "Animali",
        difficulty: "Medio",
        iconEmoji: "🦖",
        steps: [
          {
            stepNumber: 1,
            instruction: { it: "Disegna la grande testa del T-Rex con mascella aperta e narice!", en: "Draw the mighty T-Rex head with open jaws and nostril!" },
            tips: { it: "Una testa forte e squadrata pronta a lanciare un ruggito.", en: "A powerful blocky head ready to roar." },
            svgD: "M 250,135 C 250,105 160,105 140,140 L 185,160 L 140,175 C 160,205 210,210 225,185 C 225,185 240,215 240,240 M 240,130 A 3.5,3.5 0 1,1 240,130.1"
          },
          {
            stepNumber: 2,
            instruction: { it: "Aggiungi l'occhio fiero con la cresta e i dentini affilati a zig-zag!", en: "Add the bold eye with brow ridge and sharp zigzag teeth!" },
            tips: { it: "I dentini triangolari si incastrano perfettamente tra sopra e sotto.", en: "Interlocking triangle teeth make the dinosaur look ferocious yet friendly." },
            svgD: "M 185,132 A 7,7 0 1,1 185,132.1 M 175,122 Q 185,118 198,124 M 175,160 L 180,168 L 185,160 L 190,168 L 195,160 L 200,168 L 205,160 M 175,175 L 180,168 L 185,175 L 190,168 L 195,175 L 200,168 L 205,175"
          },
          {
            stepNumber: 3,
            instruction: { it: "Disegna la schiena curva che scende nella coda e la robusta zampa posteriore!", en: "Draw the curved back flowing into the tail and a powerful hind leg!" },
            tips: { it: "La zampa ha tre artigli robusti che poggiano saldamente a terra.", en: "The strong foot has three stout claws firmly planted on the ground." },
            svgD: "M 240,240 C 240,280 270,305 330,315 C 275,325 220,315 195,290 M 195,290 C 205,320 185,340 190,355 L 150,355 L 160,320 C 150,295 160,265 170,240 M 150,355 L 140,355 M 190,355 L 198,355 M 140,140 C 120,175 140,225 170,240"
          },
          {
            stepNumber: 4,
            instruction: { it: "Aggiungi il pancino, le braccine corte e le scaglie a punta sulla schiena!", en: "Add the round tummy, cute short arms, and pointed back armor spikes!" },
            tips: { it: "Le braccine del T-Rex sono minuscole e divertentissime!", en: "T-Rex front arms are famously small and funny!" },
            svgD: "M 170,180 C 190,200 200,240 185,270 M 185,215 L 210,225 L 205,232 L 190,225 M 205,225 L 212,228 M 245,215 L 255,205 L 250,225 M 260,240 L 272,230 L 265,250 M 280,265 L 292,255 L 285,275 M 305,285 L 317,277 L 310,295"
          }
        ]
      },
      {
        id: "castle_12",
        title: { it: "Castello delle Fiabe", en: "Fairy Castle" },
        category: "Natura",
        difficulty: "Avanzato",
        iconEmoji: "🏰",
        steps: [
          {
            stepNumber: 1,
            instruction: { it: "Disegna il muro centrale con i merli merlati e il portone medievale ad arco!", en: "Draw the center fortress wall with battlements and medieval arched gate!" },
            tips: { it: "I merli in cima al muro lasciano lo spazio per le sentinelle.", en: "Wall battlements protect the castle guards." },
            svgD: "M 130,330 L 130,220 L 145,220 L 145,230 L 160,230 L 160,220 L 175,220 L 175,230 L 225,230 L 225,220 L 240,220 L 240,230 L 255,230 L 255,220 L 270,220 L 270,330 Z M 180,330 L 180,265 C 180,245 220,245 220,265 L 220,330 M 180,295 L 220,295 M 200,250 L 200,330"
          },
          {
            stepNumber: 2,
            instruction: { it: "Ai due lati erigi due torri slanciate con i tetti a punta conica!", en: "Build two tall guard towers on both sides with pointed conical roofs!" },
            tips: { it: "I tetti conici a punta fanno sembrare il castello altissimo.", en: "Pointed conical turrets give the castle a majestic fairy-tale look." },
            svgD: "M 75,330 L 75,170 L 85,170 L 85,180 L 100,180 L 100,170 L 115,170 L 115,180 L 130,180 L 130,330 M 270,330 L 270,180 L 285,180 L 285,170 L 300,170 L 300,180 L 315,180 L 315,170 L 325,170 L 325,330 M 70,170 L 102,115 L 135,170 Z M 265,170 L 297,115 L 330,170 Z"
          },
          {
            stepNumber: 3,
            instruction: { it: "Al centro erigi la gran torre del re con il tetto maestoso e la bandiera al vento!", en: "Raise the grand royal keep in the center with conical roof and waving flag!" },
            tips: { it: "La bandiera sventola in alto per indicare che il re è nel castello.", en: "A fluttering pennant signals the royal presence in the keep." },
            svgD: "M 165,220 L 165,130 L 235,130 L 235,220 M 155,130 L 200,50 L 245,130 Z M 200,50 L 200,25 L 225,35 L 200,45"
          },
          {
            stepNumber: 4,
            instruction: { it: "Aggiungi finestrelle medievali con arco e mattoncini di pietra antica!", en: "Detail the arched stone windows and ancient masonry bricks!" },
            tips: { it: "Piccoli mattoncini rettangolari danno l'aspetto di vera roccia scolpita.", en: "Scattered brick rectangles make walls look like ancient stone." },
            svgD: "M 95,210 L 95,230 L 110,230 L 110,210 C 110,200 95,200 95,210 Z M 290,210 L 290,230 L 305,230 L 305,210 C 305,200 290,200 290,210 Z M 192,150 L 192,175 L 208,175 L 208,150 C 208,140 192,140 192,150 Z M 140,255 L 155,255 M 245,255 L 260,255 M 145,285 L 160,285 M 240,285 L 255,285 M 85,270 L 100,270 M 300,270 L 315,270"
          }
        ]
      },
      {
        id: "robot_13",
        title: { it: "Robot Esploratore", en: "Explorer Robot" },
        category: "Mezzi",
        difficulty: "Avanzato",
        iconEmoji: "🤖",
        steps: [
          {
            stepNumber: 1,
            instruction: { it: "Disegna la testa rettangolare, le antenne coi sensori e il collo meccanico!", en: "Draw the rectangular head, dish antennas, and mechanical neck!" },
            tips: { it: "Le antenne servono per ricevere i segnali da lontane galassie.", en: "Antenna dishes catch radio signals from distant stars." },
            svgD: "M 140,105 L 260,105 L 260,185 L 140,185 Z M 170,105 L 160,65 M 160,60 A 6,6 0 1,1 160,60.1 M 230,105 L 240,65 M 240,60 A 6,6 0 1,1 240,60.1 M 180,185 L 180,205 M 220,185 L 220,205 M 180,195 L 220,195"
          },
          {
            stepNumber: 2,
            instruction: { it: "Aggiungi il visore con occhi digitali e la griglia per l'altoparlante!", en: "Add an electronic visor screen with glowing eyes and speaker grille!" },
            tips: { it: "Come lo schermo luminoso di un computer di bordo spaziale.", en: "Like a futuristic computer screen visor." },
            svgD: "M 160,125 L 240,125 L 240,170 L 160,170 Z M 180,140 A 6,6 0 1,0 180,140.1 M 220,140 A 6,6 0 1,0 220,140.1 M 175,160 L 225,160 M 185,155 L 185,165 M 195,155 L 195,165 M 205,155 L 205,165 M 215,155 L 215,165"
          },
          {
            stepNumber: 3,
            instruction: { it: "Disegna il busto con pulsanti, indicatori e braccia articolate con pinze!", en: "Draw the chest chassis with meters and articulated arms with clamps!" },
            tips: { it: "Le pinze sono pronte a raccogliere minerali e campioni lunari.", en: "Mechanical clamps are ready to collect alien rock samples." },
            svgD: "M 130,205 L 270,205 L 270,305 L 130,305 Z M 160,230 A 10,10 0 1,1 160,230.1 M 200,230 A 10,10 0 1,1 200,230.1 M 240,230 A 10,10 0 1,1 240,230.1 M 155,270 L 245,270 L 245,290 L 155,290 Z M 175,270 L 175,290 M 195,270 L 195,290 M 215,270 L 215,290 M 235,270 L 235,290 M 130,225 L 85,245 L 85,275 M 85,275 C 65,265 65,295 85,285 M 85,275 C 105,265 105,295 85,285 M 270,225 L 315,245 L 315,275 M 315,275 C 335,265 335,295 315,285 M 315,275 C 295,265 295,295 315,285"
          },
          {
            stepNumber: 4,
            instruction: { it: "Collega i robusti cingoli da esplorazione planetaria con ruote dentate!", en: "Attach sturdy planetary rover tracks with heavy-duty drive wheels!" },
            tips: { it: "I cingoli permettono al rover di superare rocce e crateri.", en: "Rover tracks roll smoothly across craters and alien terrain." },
            svgD: "M 165,305 L 165,315 M 235,305 L 235,315 M 110,315 L 290,315 C 308,315 308,355 290,355 L 110,355 C 92,355 92,315 110,315 Z M 130,335 A 10,10 0 1,1 130,335.1 M 175,335 A 10,10 0 1,1 175,335.1 M 225,335 A 10,10 0 1,1 225,335.1 M 270,335 A 10,10 0 1,1 270,335.1"
          }
        ]
      },
      {
        id: "lion_14",
        title: { it: "Leone Coraggioso", en: "Brave Lion" },
        category: "Animali",
        difficulty: "Avanzato",
        iconEmoji: "🦁",
        steps: [
          {
            stepNumber: 1,
            instruction: { it: "Disegna il musetto rotondo al centro, il nasone e il sorriso fiero!", en: "Draw the central muzzle, proud nose, sweet eyes, and smile!" },
            tips: { it: "Partire dal muso assicura che il leone sia perfettamente centrato.", en: "Centering the muzzle ensures the lion's face is balanced." },
            svgD: "M 200,165 C 175,165 170,225 200,225 C 230,225 225,165 200,165 Z M 190,185 L 210,185 L 200,196 Z M 200,196 L 200,208 Q 188,216 180,208 M 200,208 Q 212,216 220,208 M 180,175 A 4.5,4.5 0 1,1 180,175.1 M 220,175 A 4.5,4.5 0 1,1 220,175.1"
          },
          {
            stepNumber: 2,
            instruction: { it: "Disegna le orecchie tonde e la magnifica criniera a ciuffi soffici!", en: "Draw rounded ears and the magnificent fluffy lock mane!" },
            tips: { it: "Curve morbide che circondano tutta la testa come petali di girasole.", en: "Soft flowing petals surround the head like a sunflower." },
            svgD: "M 155,135 C 145,110 170,105 175,125 M 225,125 C 230,105 255,110 245,135 M 175,130 C 160,95 200,80 200,95 C 215,75 250,90 240,125 C 265,115 285,150 270,175 C 290,195 280,235 255,245 C 265,275 235,290 215,275 C 200,295 170,285 165,265 C 140,275 125,240 135,220 C 115,200 120,160 145,150 C 135,125 160,110 175,130 Z"
          },
          {
            stepNumber: 3,
            instruction: { it: "Disegna il corpo seduto con due possenti zampe anteriori e gli artigli!", en: "Draw the sitting body, two sturdy front legs, and sharp claws!" },
            tips: { it: "Le zampe forti sostengono il fiero re della foresta.", en: "Strong legs support the proud king of the jungle." },
            svgD: "M 155,260 C 145,290 135,325 135,350 L 265,350 C 265,325 255,290 245,260 M 175,350 L 175,275 C 175,265 195,265 195,275 L 195,350 M 205,350 L 205,275 C 205,265 225,265 225,275 L 225,350 M 182,350 L 182,343 M 188,350 L 188,343 M 212,350 L 212,343 M 218,350 L 218,343"
          },
          {
            stepNumber: 4,
            instruction: { it: "Aggiungi la coda maestosa con il ciuffo di pelo finale e i fieri baffi!", en: "Add the regal curving tail with fluffy tuft tip and proud whiskers!" },
            tips: { it: "La coda si arriccia a 'S' e termina con una soffice nappa.", en: "The tail curves like an 'S' ending in a bushy paintbrush tuft." },
            svgD: "M 255,335 C 300,340 330,300 310,250 C 300,225 280,240 288,260 M 288,260 C 275,245 285,220 305,230 C 315,245 300,265 288,260 Z M 165,200 L 135,195 M 165,208 L 130,210 M 235,200 L 265,195 M 235,208 L 270,210"
          }
        ]
      }
    ];
'@

$indexPath = "$PSScriptRoot\index.html"
$content = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)

$startMarker = "    const lessonsData = ["
$endMarker = "    /* -------------------------------------------------------------`r`n       3. STATO DELL'APPLICAZIONE"
$useCRLF = $true

if (!$content.Contains($endMarker)) {
    $endMarker = "    /* -------------------------------------------------------------`n       3. STATO DELL'APPLICAZIONE"
    $useCRLF = $false
}

$startIndex = $content.IndexOf($startMarker)
$endIndex = $content.IndexOf($endMarker, $startIndex)

if ($startIndex -ge 0 -and $endIndex -gt $startIndex) {
    $before = $content.Substring(0, $startIndex)
    $after = $content.Substring($endIndex)
    $sep = if ($useCRLF) { "`r`n`r`n" } else { "`n`n" }
    $newContent = $before + $newLessonsData + $sep + $after
    [System.IO.File]::WriteAllText($indexPath, $newContent, [System.Text.Encoding]::UTF8)
    Write-Host "Aggiornato con successo index.html!"

    # Copia anche in android asset
    $androidAsset = "$PSScriptRoot\android-app\app\src\main\assets\index.html"
    [System.IO.File]::WriteAllText($androidAsset, $newContent, [System.Text.Encoding]::UTF8)
    Write-Host "Sincronizzato anche android-app/app/src/main/assets/index.html!"
} else {
    Write-Error "Marcatori non trovati: $startIndex, $endIndex"
}
