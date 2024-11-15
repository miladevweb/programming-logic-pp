function rotate(nums: number[], k: number): void {
  const n = nums.length
  k = k % n // Asegurarnos de no rotar más de lo necesario

  // Helper para invertir una parte del array
  function reverse(start: number, end: number): void {
    while (start < end) {
      ;[nums[start], nums[end]] = [nums[end], nums[start]]
      start++
      end--
    }
  }

  // Pasos del algoritmo
  reverse(0, n - 1) // Paso 1: Invertir todo el array
  reverse(0, k - 1) // Paso 2: Invertir los primeros k elementos
  reverse(k, n - 1) // Paso 3: Invertir el resto
}
