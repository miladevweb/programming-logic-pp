function majorityElement(nums: number[]): number {
  let candidate: number | null = null
  let count = 0

  // Primera pasada: Encontrar el candidato
  for (let num of nums) {
    if (count === 0) {
      candidate = num
    }
    count += num === candidate ? 1 : -1
  }

  // Dado que el problema garantiza que siempre existe un elemento mayoritario, no es necesario hacer una segunda pasada.
  return candidate!
}

// Ejemplo 1:
const nums1 = [3, 2, 3]
console.log(majorityElement(nums1)) // Salida: 3

// Ejemplo 2:
const nums2 = [2, 2, 1, 1, 1, 2, 2]
console.log(majorityElement(nums2)) // Salida: 2


