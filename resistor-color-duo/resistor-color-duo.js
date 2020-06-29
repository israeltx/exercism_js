const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

export const decodedValue = ([color1, color2]) => {

  return (COLORS.indexOf(color1) * 10) + COLORS.indexOf(color2)

};

// To whoever is reviewing this code, and helping me grow. Thank you!