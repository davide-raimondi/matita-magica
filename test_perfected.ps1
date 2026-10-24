$testDrawings = @'
const testLessons = [
  {
    id: "cat_01",
    title: { it: "Gattino Dolce", en: "Sweet Kitten" },
    category: "Animali",
    difficulty: "Facile",
    iconEmoji: "🐱",
    steps: [
      {
        stepNumber: 1,
        svgD: "M 120,180 C 100,195 100,230 130,245 C 160,255 240,255 270,245 C 300,230 300,195 280,180 C 260,160 140,160 120,180 Z"
      },
      {
        stepNumber: 2,
        svgD: "M 135,170 L 115,100 L 175,155 M 225,155 L 285,100 L 265,170 M 135,155 L 125,115 L 165,148 M 235,148 L 275,115 L 265,155"
      },
      {
        stepNumber: 3,
        svgD: "M 160,195 A 8,8 0 1,0 160,195.1 M 240,195 A 8,8 0 1,0 240,195.1 M 195,212 L 205,212 L 200,218 Z M 200,218 L 200,222 Q 190,230 182,222 M 200,222 Q 210,230 218,222 M 115,208 L 75,202 M 115,216 L 70,218 M 115,224 L 75,234 M 285,208 L 325,202 M 285,216 L 330,218 M 285,224 L 325,234"
      },
      {
        stepNumber: 4,
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
        svgD: "M 200,115 C 135,115 130,225 200,235 C 270,225 265,115 200,115 Z"
      },
      {
        stepNumber: 2,
        svgD: "M 145,150 C 95,165 85,245 115,265 C 135,265 145,215 142,180 M 255,150 C 305,165 315,245 285,265 C 265,265 255,215 258,180"
      },
      {
        stepNumber: 3,
        svgD: "M 170,165 A 7,7 0 1,1 170,165.1 M 230,165 A 7,7 0 1,1 230,165.1 M 172,163 A 2,2 0 1,1 172,163.1 M 232,163 A 2,2 0 1,1 232,163.1 M 190,195 Q 200,186 210,195 Q 200,210 190,195 Z M 200,208 L 200,218 Q 188,228 178,218 M 200,218 Q 212,228 222,218 M 194,222 C 194,236 206,236 206,222"
      },
      {
        stepNumber: 4,
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
        svgD: "M 200,145 C 145,145 135,245 200,245 C 265,245 255,145 200,145 Z"
      },
      {
        stepNumber: 2,
        svgD: "M 175,155 C 150,60 165,40 185,40 C 200,40 198,105 192,150 M 208,150 C 202,105 200,40 215,40 C 235,40 250,60 225,155 M 178,135 C 165,75 172,60 185,60 C 193,60 192,105 188,135 M 212,135 C 208,105 207,60 215,60 C 228,60 235,75 222,135"
      },
      {
        stepNumber: 3,
        svgD: "M 170,185 A 6,6 0 1,1 170,185.1 M 230,185 A 6,6 0 1,1 230,185.1 M 194,200 L 206,200 L 200,206 Z M 200,206 L 200,212 Q 192,218 184,212 M 200,212 Q 208,218 216,212 M 194,213 L 194,225 L 206,225 L 206,213 M 200,213 L 200,225 M 155,202 L 115,198 M 155,210 L 110,214 M 245,202 L 285,198 M 245,210 L 290,214"
      },
      {
        stepNumber: 4,
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
        svgD: "M 110,240 C 110,140 290,140 290,240 C 290,250 110,250 110,240 Z"
      },
      {
        stepNumber: 2,
        svgD: "M 160,240 L 175,195 L 225,195 L 240,240 M 175,195 L 200,160 L 225,195 M 140,205 L 115,230 M 260,205 L 285,230 M 175,195 L 140,205 M 225,195 L 260,205"
      },
      {
        stepNumber: 3,
        svgD: "M 285,225 C 325,205 350,225 340,248 C 330,260 295,255 285,242 M 325,224 A 4,4 0 1,1 325,224.1 M 335,236 Q 330,244 322,240 M 250,245 C 265,290 300,305 285,260 M 260,175 C 285,150 310,170 280,195 M 135,245 C 110,280 130,300 155,265 M 140,175 C 120,155 105,175 125,195 M 110,235 L 85,240 L 110,245"
      },
      {
        stepNumber: 4,
        svgD: "M 350,195 A 6,6 0 1,1 350,195.1 M 370,165 A 9,9 0 1,1 370,165.1 M 345,140 A 5,5 0 1,1 345,140.1"
      }
    ]
  },
  {
    id: "car_05",
    title: { it: "Macchinina Sprint", en: "Speedy Car" },
    category: "Mezzi",
    difficulty: "Facile",
    iconEmoji: "🚗",
    steps: [
      {
        stepNumber: 1,
        svgD: "M 65,270 L 105,270 C 105,240 165,240 165,270 L 235,270 C 235,240 295,240 295,270 L 335,270 L 335,240 L 290,235 L 255,175 L 145,175 L 110,235 L 65,245 Z"
      },
      {
        stepNumber: 2,
        svgD: "M 110,270 A 25,25 0 1,0 160,270 A 25,25 0 1,0 110,270 Z M 125,270 A 10,10 0 1,0 145,270 A 10,10 0 1,0 125,270 Z M 240,270 A 25,25 0 1,0 290,270 A 25,25 0 1,0 240,270 Z M 255,270 A 10,10 0 1,0 275,270 A 10,10 0 1,0 255,270 Z"
      },
      {
        stepNumber: 3,
        svgD: "M 205,185 L 245,185 L 275,230 L 205,230 Z M 155,230 L 125,230 L 150,185 L 195,185 L 195,230 Z M 335,245 C 342,245 342,258 335,258 Z M 200,230 L 200,270 M 175,240 L 190,240"
      },
      {
        stepNumber: 4,
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
        svgD: "M 75,190 C 75,160 300,160 330,185 C 335,190 335,195 330,200 C 300,215 75,215 75,190 Z"
      },
      {
        stepNumber: 2,
        svgD: "M 175,175 L 235,90 L 275,90 L 225,175 Z M 185,215 L 215,265 L 240,265 L 215,215 Z"
      },
      {
        stepNumber: 3,
        svgD: "M 115,175 L 70,110 L 105,110 L 135,175 Z M 110,205 L 80,235 L 100,235 L 125,205 Z"
      },
      {
        stepNumber: 4,
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
        svgD: "M 160,260 L 160,155 C 160,120 200,75 200,75 C 200,75 240,120 240,155 L 240,260 Z"
      },
      {
        stepNumber: 2,
        svgD: "M 160,215 L 115,265 C 135,270 155,265 160,250 Z M 240,215 L 285,265 C 265,270 245,265 240,250 Z M 195,215 L 200,260 L 205,215 Z M 175,260 L 170,272 L 230,272 L 225,260"
      },
      {
        stepNumber: 3,
        svgD: "M 200,150 A 24,24 0 1,0 200,198 A 24,24 0 1,0 200,150 Z M 200,158 A 16,16 0 1,0 200,190 A 16,16 0 1,0 200,158 Z M 165,135 Q 200,145 235,135"
      },
      {
        stepNumber: 4,
        svgD: "M 175,272 L 180,340 L 195,295 L 200,360 L 205,295 L 220,340 L 225,272 Z M 185,272 L 190,315 L 200,335 L 210,315 L 215,272 Z M 95,115 L 105,115 M 100,110 L 100,120 M 300,135 L 310,135 M 305,130 L 305,140 M 110,200 A 3,3 0 1,1 110,200.1 M 295,210 A 3,3 0 1,1 295,210.1"
      }
    ]
  },
  {
    id: "star_08",
    title: { it: "Stella Sorridente", en: "Smiling Star" },
    category: "Natura",
    difficulty: "Facile",
    iconEmoji: "⭐",
    steps: [
      {
        stepNumber: 1,
        svgD: "M 200,80 L 230,155 L 310,160 L 250,210 L 270,290 L 200,245 L 130,290 L 150,210 L 90,160 L 170,155 Z"
      },
      {
        stepNumber: 2,
        svgD: "M 175,185 A 8,8 0 1,1 175,185.1 M 225,185 A 8,8 0 1,1 225,185.1"
      },
      {
        stepNumber: 3,
        svgD: "M 185,210 Q 200,225 215,210 M 160,205 A 6,6 0 1,1 160,205.1 M 240,205 A 6,6 0 1,1 240,205.1"
      },
      {
        stepNumber: 4,
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
        svgD: "M 120,200 L 280,200 L 280,330 L 120,330 Z"
      },
      {
        stepNumber: 2,
        svgD: "M 100,205 L 200,105 L 300,205"
      },
      {
        stepNumber: 3,
        svgD: "M 180,330 L 180,260 C 180,250 220,250 220,260 L 220,330 M 212,290 A 2.5,2.5 0 1,1 212,290.1 M 135,235 L 165,235 L 165,265 L 135,265 Z M 150,235 L 150,265 M 135,250 L 165,250 M 235,235 L 265,235 L 265,265 L 235,265 Z M 250,235 L 250,265 M 235,250 L 265,250"
      },
      {
        stepNumber: 4,
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
        svgD: "M 100,210 C 100,105 300,105 300,210 C 300,228 100,228 100,210 Z"
      },
      {
        stepNumber: 2,
        svgD: "M 160,220 C 150,270 145,310 160,330 C 180,335 220,335 240,330 C 255,310 250,270 240,220"
      },
      {
        stepNumber: 3,
        svgD: "M 200,145 A 13,13 0 1,1 200,145.1 M 165,175 A 10,10 0 1,1 165,175.1 M 235,175 A 10,10 0 1,1 235,175.1 M 175,130 A 7,7 0 1,1 175,130.1 M 225,130 A 7,7 0 1,1 225,130.1"
      },
      {
        stepNumber: 4,
        svgD: "M 180,260 A 4,4 0 1,1 180,261 M 220,260 A 4,4 0 1,1 220,261 M 195,275 Q 200,285 205,275 M 120,330 L 135,310 L 145,335 L 160,315 M 240,335 L 255,315 L 265,335 L 280,310"
      }
    ]
  },
  {
    id: "dino_11",
    title: { it: "Dinosauro T-Rex", en: "T-Rex Dino" },
    category: "Animali",
    difficulty: "Medio",
    iconEmoji: "🦖",
    steps: [
      {
        stepNumber: 1,
        svgD: "M 250,135 C 250,105 160,105 140,140 L 185,160 L 140,175 C 160,205 210,210 225,185 C 225,185 240,215 240,240 M 240,130 A 3.5,3.5 0 1,1 240,130.1"
      },
      {
        stepNumber: 2,
        svgD: "M 185,132 A 7,7 0 1,1 185,132.1 M 175,122 Q 185,118 198,124 M 175,160 L 180,168 L 185,160 L 190,168 L 195,160 L 200,168 L 205,160 M 175,175 L 180,168 L 185,175 L 190,168 L 195,175 L 200,168 L 205,175"
      },
      {
        stepNumber: 3,
        svgD: "M 240,240 C 240,280 270,305 330,315 C 275,325 220,315 195,290 M 195,290 C 205,320 185,340 190,355 L 150,355 L 160,320 C 150,295 160,265 170,240 M 150,355 L 140,355 M 190,355 L 198,355 M 140,140 C 120,175 140,225 170,240"
      },
      {
        stepNumber: 4,
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
        svgD: "M 130,330 L 130,220 L 145,220 L 145,230 L 160,230 L 160,220 L 175,220 L 175,230 L 225,230 L 225,220 L 240,220 L 240,230 L 255,230 L 255,220 L 270,220 L 270,330 Z M 180,330 L 180,265 C 180,245 220,245 220,265 L 220,330 M 180,295 L 220,295 M 200,250 L 200,330"
      },
      {
        stepNumber: 2,
        svgD: "M 75,330 L 75,170 L 85,170 L 85,180 L 100,180 L 100,170 L 115,170 L 115,180 L 130,180 L 130,330 M 270,330 L 270,180 L 285,180 L 285,170 L 300,170 L 300,180 L 315,180 L 315,170 L 325,170 L 325,330 M 70,170 L 102,115 L 135,170 Z M 265,170 L 297,115 L 330,170 Z"
      },
      {
        stepNumber: 3,
        svgD: "M 165,220 L 165,130 L 235,130 L 235,220 M 155,130 L 200,50 L 245,130 Z M 200,50 L 200,25 L 225,35 L 200,45"
      },
      {
        stepNumber: 4,
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
        svgD: "M 140,105 L 260,105 L 260,185 L 140,185 Z M 170,105 L 160,65 M 160,60 A 6,6 0 1,1 160,60.1 M 230,105 L 240,65 M 240,60 A 6,6 0 1,1 240,60.1 M 180,185 L 180,205 M 220,185 L 220,205 M 180,195 L 220,195"
      },
      {
        stepNumber: 2,
        svgD: "M 160,125 L 240,125 L 240,170 L 160,170 Z M 180,140 A 6,6 0 1,0 180,140.1 M 220,140 A 6,6 0 1,0 220,140.1 M 175,160 L 225,160 M 185,155 L 185,165 M 195,155 L 195,165 M 205,155 L 205,165 M 215,155 L 215,165"
      },
      {
        stepNumber: 3,
        svgD: "M 130,205 L 270,205 L 270,305 L 130,305 Z M 160,230 A 10,10 0 1,1 160,230.1 M 200,230 A 10,10 0 1,1 200,230.1 M 240,230 A 10,10 0 1,1 240,230.1 M 155,270 L 245,270 L 245,290 L 155,290 Z M 175,270 L 175,290 M 195,270 L 195,290 M 215,270 L 215,290 M 235,270 L 235,290 M 130,225 L 85,245 L 85,275 M 85,275 C 65,265 65,295 85,285 M 85,275 C 105,265 105,295 85,285 M 270,225 L 315,245 L 315,275 M 315,275 C 335,265 335,295 315,285 M 315,275 C 295,265 295,295 315,285"
      },
      {
        stepNumber: 4,
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
        svgD: "M 200,165 C 175,165 170,225 200,225 C 230,225 225,165 200,165 Z M 190,185 L 210,185 L 200,196 Z M 200,196 L 200,208 Q 188,216 180,208 M 200,208 Q 212,216 220,208 M 180,175 A 4.5,4.5 0 1,1 180,175.1 M 220,175 A 4.5,4.5 0 1,1 220,175.1"
      },
      {
        stepNumber: 2,
        svgD: "M 155,135 C 145,110 170,105 175,125 M 225,125 C 230,105 255,110 245,135 M 175,130 C 160,95 200,80 200,95 C 215,75 250,90 240,125 C 265,115 285,150 270,175 C 290,195 280,235 255,245 C 265,275 235,290 215,275 C 200,295 170,285 165,265 C 140,275 125,240 135,220 C 115,200 120,160 145,150 C 135,125 160,110 175,130 Z"
      },
      {
        stepNumber: 3,
        svgD: "M 155,260 C 145,290 135,325 135,350 L 265,350 C 265,325 255,290 245,260 M 175,350 L 175,275 C 175,265 195,265 195,275 L 195,350 M 205,350 L 205,275 C 205,265 225,265 225,275 L 225,350 M 182,350 L 182,343 M 188,350 L 188,343 M 212,350 L 212,343 M 218,350 L 218,343"
      },
      {
        stepNumber: 4,
        svgD: "M 255,335 C 300,340 330,300 310,250 C 300,225 280,240 288,260 M 288,260 C 275,245 285,220 305,230 C 315,245 300,265 288,260 Z M 165,200 L 135,195 M 165,208 L 130,210 M 235,200 L 265,195 M 235,208 L 270,210"
      }
    ]
  }
];
'@

$out = @"
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Nuova Anteprima Disegni Perfezionati</title>
<style>
body { font-family: 'Segoe UI', Tahoma, sans-serif; background: #EAE6DF; margin: 0; padding: 24px; display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; }
.card { background: white; border-radius: 16px; padding: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); width: 320px; text-align: center; }
.card h2 { margin: 0 0 10px; font-size: 1.2rem; color: #2B2D42; }
.svg-wrap { width: 300px; height: 300px; margin: 0 auto; background: #FAF9F6; border-radius: 12px; border: 2px dashed #D5DDD8; display: flex; align-items: center; justify-content: center; }
svg { width: 280px; height: 280px; }
.legend { display: flex; justify-content: space-around; margin-top: 10px; font-size: 0.75rem; font-weight: bold; }
.s1 { color: #8D99AE; }
.s2 { color: #3A86FF; }
.s3 { color: #FF9F1C; }
.s4 { color: #FF5E7E; }
</style>
</head>
<body>
"@

$colors = @('#8D99AE', '#3A86FF', '#FF9F1C', '#FF5E7E')

# Extract with regex
$pattern = 'id:\s*"([^"]+)",[\s\S]*?title:\s*\{\s*it:\s*"([^"]+)"[\s\S]*?iconEmoji:\s*"([^"]+)",[\s\S]*?steps:\s*\[([\s\S]*?)\n\s*\]\s*\}'
$matches = [regex]::Matches($testDrawings, $pattern)

foreach ($m in $matches) {
    $id = $m.Groups[1].Value
    $title = $m.Groups[2].Value
    $emoji = $m.Groups[3].Value
    $stepsBlock = $m.Groups[4].Value

    $stepPattern = 'svgD:\s*"([^"]+)"'
    $stepMatches = [regex]::Matches($stepsBlock, $stepPattern)

    $svgPaths = ""
    for ($i = 0; $i -lt $stepMatches.Count; $i++) {
        $c = $colors[$i]
        $d = $stepMatches[$i].Groups[1].Value
        $svgPaths += "<path d=`"$d`" fill=`"none`" stroke=`"$c`" stroke-width=`"5`" stroke-linecap=`"round`" stroke-linejoin=`"round`" />`n"
    }

    $out += @"
    <div class="card">
      <h2>$emoji $title ($id)</h2>
      <div class="svg-wrap">
        <svg viewBox="0 0 400 400">
          $svgPaths
        </svg>
      </div>
      <div class="legend">
        <span class="s1">Passo 1</span>
        <span class="s2">Passo 2</span>
        <span class="s3">Passo 3</span>
        <span class="s4">Passo 4</span>
      </div>
    </div>
"@
}

$out += "</body></html>"
[System.IO.File]::WriteAllText("$PSScriptRoot\preview_perfected.html", $out, [System.Text.Encoding]::UTF8)
Write-Host "Generato preview_perfected.html con $($matches.Count) disegni perfezionati"
