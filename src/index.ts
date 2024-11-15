function intToRoman(num: number): string {
  // Mapa de valores y símbolos romanos
  const romanMap: { value: number; symbol: string }[] = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
  ]

  let result = ''

  // Iteramos sobre el mapa de valores y símbolos
  for (const { value, symbol } of romanMap) {
    // Mientras el número sea mayor o igual al valor actual
    while (num >= value) {
      result += symbol // Añadimos el símbolo romano al resultado
      num -= value // Reducimos el número
    }
  }

  return result
}
