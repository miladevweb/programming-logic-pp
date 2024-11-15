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
