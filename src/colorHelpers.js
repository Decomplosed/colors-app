import chroma from 'chroma-js'

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

function generatePalette(starterPalette) {
  let newPlatette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  }

  for (let level of levels) {
    newPlatette.colors[level] = []
  }

  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10).reverse()
    for (let i in scale) {
      newPlatette.colorsp[level[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowercase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css()
      })
    }
  }
}

function getRange(hexColor) {
  const end = '#fff'
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ]
}

function generateScale(hexColor, numberOfColors) {
  return chroma
    .scale(getRange(hexColor))
    .mode('lab')
    .colors(numberOfColors)
}

export { generatePalette }
