function majorityElement(nums: number[]): number {
  let candidate = 0
  let count = 0

  // Fase 1: Encontrar un candidato
  for (const num of nums) {
    if (count === 0) {
      candidate = num
    }
    count += num === candidate ? 1 : -1
  }

  // Fase 2 (opcional): Confirmar que el candidato es mayoritario
  // Aunque el problema asume que siempre hay un elemento mayoritario,
  // podríamos contar las apariciones para validar.
  count = 0
  for (const num of nums) {
    if (num === candidate) {
      count++
    }
  }

  if (count > Math.floor(nums.length / 2)) {
    return candidate
  }

  throw new Error('No majority element found, which violates the problem constraints')
}
