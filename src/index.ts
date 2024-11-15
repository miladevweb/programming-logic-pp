function maxProfit(prices: number[]): number {
  let minPrice = Infinity // Precio mínimo encontrado hasta ahora
  let maxProfit = 0 // Máximo beneficio encontrado hasta ahora

  for (const price of prices) {
    // Actualizar el precio mínimo
    if (price < minPrice) minPrice = price

    // Calcular el beneficio si vendemos en el precio actual
    const profit = price - minPrice

    // Actualizar el beneficio máximo si es mayor
    if (profit > maxProfit) maxProfit = profit
  }

  return maxProfit
}
