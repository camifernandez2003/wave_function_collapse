const celdas = [];
const RETICULA = 4;
let ancho;
let alto;

const azulejos = [];
const NA = 11; // Número de azulejos
const reglas = [
  // reglas de los bordes de cada tile
  {
    //tile 0
    UP: 1,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 1,
  },
  {
    //tile 1
    UP: 1,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },
  {
    //tile 2
    UP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 1,
  },
  {
    //tile 3
    UP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },
  {
    //tile 4
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },
  {
    //tile 5
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },
  {
    //tile 6
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 7
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },
  {
    //tile 8
    UP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },
  {
    //tile 9
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 10
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
];

function preload() {
  for (let i = 0; i < NA; i++) {
    azulejos[i] = loadImage("tiles/tile" + i + ".png");
  }
}

function setup() {
  createCanvas(1080, 1080);

  let opcionesI = [];
  for (let i = 0; i < azulejos.length; i++) {
    opcionesI.push(i);
  }

  for (let i = 0; i < RETICULA * RETICULA; i++) {
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    };
  }
  celdas[8].colapsada = true;
  celdas[3].colapsada = true;

  celdas[12].colapsada = [5, 6, 8];
  celdas[4].colapsada = [4, 7, 12];
  celdas[1].colapsada = [6, 4, 8, 10];
  celdas[5].colapsada = [11, 6, 4, 8, 10];
}

function draw() {
  const celdasDisponibles = celdas.filter((celda) => {
    return celda.colapsada == false;
  });
  if (celdasDisponibles.length > 0) {
    celdasDisponibles.sort((a, b) => {
      return a.opciones.length - b.opciones.length;
    });
  }
  print(celdasDisponibles);
  noLoop();
}
