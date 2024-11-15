function romanToInt(s: string): number {
  // Mapa de valores romanos
  const romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let total = 0

  for (let i = 0; i < s.length; i++) {
    // Valor del carácter actual
    const current = romanMap[s[i]]
    // Valor del carácter siguiente (si existe)
    const next = romanMap[s[i + 1]]

    // Si el valor actual es menor que el siguiente, se aplica la sustracción
    if (current < next) {
      total -= current
    } else {
      total += current
    }
  }

  return total
}
