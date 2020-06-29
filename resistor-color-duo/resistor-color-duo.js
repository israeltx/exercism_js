//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

export const decodedValue = (colors) => {
  let results = []

  for (let i=0; i < 2; i++) {

    COLORS.filter((colorName) => {
      if (colorName === colors[i]) {
        results.push(COLORS.indexOf(colorName))
      }
    })

  }

  return Number(results.join(''))
};

// To whoever is reviewing this code, and helping me grow. Thank you!