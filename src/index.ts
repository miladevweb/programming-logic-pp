function hIndex(citations: number[]): number {
  // Ordenamos el array en orden descendente
  citations.sort((a, b) => b - a)

  // Iteramos para encontrar el h-index
  let h = 0
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1 // Actualizamos el h-index
    } else {
      break // Salimos si no se cumple la condición
    }
  }

  return h
}

// [1, 2, 3, 4, 5] has 5 articles and each element is a number of citations for that article
function run(citations: number[]): number {
  citations.sort((a, b) => b - a) // order in descending order

  let h = 0
  for (let i = 0; i < citations.length; i++) {
    // número mínimo de citas que debe tener cada articulo
    if (citations[i] >= i + 1) h = i + 1
    else break
  }

  return h
}
