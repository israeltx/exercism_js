// Criei para testar usando o Node

const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'freen', 'blue', 'violet', 'grey', 'white']

function decodedValue (colors){
  let results = []

  for (i=0; i < 2; i++) {
    console.log(i)
  }

  colors.forEach(color => {
    COLORS.filter((colorName) => {
      if (colorName === color) {
        results.push(COLORS.indexOf(colorName))
      }
    })
  })

  // return Number(results.join(''))
  console.log(Number(results.join('')))
}

decodedValue(['brown', 'black'])

// console.log(colorName, color)

