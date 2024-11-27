function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0 // Si el arreglo está vacío, no hay elementos únicos.

  // Number of unique elements
  let k = 1 // El primer elemento siempre es único.

  // Comenzamos desde el segundo elemento
  for (let i = 1; i < nums.length; i++) {
    // Si el valor actual es diferente al anterior
    // nums[1]: second element
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i] // Colocamos el número único en la posición k
      k++ // Incrementamos k para la siguiente posición de un número único
    }
  }

  return k // k es el número de elementos únicos
}

// Ejemplo de uso:
const nums1 = [1, 1, 2]
const k1 = removeDuplicates(nums1)
console.log(k1) // Salida: 2
console.log(nums1.slice(0, k1)) // Salida: [1, 2]

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const k2 = removeDuplicates(nums2)
console.log(k2) // Salida: 5
console.log(nums2.slice(0, k2)) // Salida: [0, 1, 2, 3, 4]
