function removeElement(nums: number[], val: number) {
  let k = 0 
  for (let n of nums) {
    if (n !== val) {
      nums[k] = n
      k++
    }
  }

  return k
}

const r1 = removeElement([3, 2, 2, 3], 3)
const r2 = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)

console.log(r1, '🔥') // 2
console.log(r2, '🔥') // 5
