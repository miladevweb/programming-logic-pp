function canJump(nums: number[]): boolean {
  let farthest = 0 // El índice más lejano que se puede alcanzar actualmente

  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) {
      // Si no podemos alcanzar el índice actual, devolvemos false
      return false
    }
    // Actualizamos el índice más lejano que podemos alcanzar
    farthest = Math.max(farthest, i + nums[i])

    // Si podemos alcanzar el último índice, devolvemos true
    if (farthest >= nums.length - 1) {
      return true
    }
  }

  return false
}
