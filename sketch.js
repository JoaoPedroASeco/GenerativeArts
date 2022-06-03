const CRYSTAL_SIZE = 250
const SIDES = 6

// layout
const MARGIN = CRYSTAL_SIZE / 2
const COLUMNS = 5
const ROWS = 5
const PADDING = CRYSTAL_SIZE * 0.2
const GRIDBOX = CRYSTAL_SIZE + PADDING
const START = (CRYSTAL_SIZE / 2) + MARGIN

let PALETTE = []
ALL_CRYSTALS = []

function setup() {
  const totalX = START + ( GRIDBOX * COLUMNS ) // Define a Altura do Layer 
  const totalY = START + ( GRIDBOX * ROWS ) // Define a Largura do Layer
  createCanvas(totalX, totalY, SVG) // Cria o Layer

  PALETTE = [
    color('#3D3D3D'), 
    color('#84B026'), 
  ] // Variedade de cores do projeto

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  for (let x = 0; x < COLUMNS; x++) {
    for (let y = 0; y < ROWS; y++) {
      const posX = START + (x * GRIDBOX)
      const posY = START + (y * GRIDBOX)
      const crystal = makeCrystal({x: posX, y: posY})
      ALL_CRYSTALS.push(crystal)
    }
  }

  ALL_CRYSTALS.forEach((crystal) => {
    drawCrystal(crystal)
  })
}
