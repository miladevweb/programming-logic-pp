function removeElementPractice(nums: number[], val: number) {
  let k = 0 // Number of elements that are not equal to val

  // O(n)
  for (let n of nums) {
    if (n !== val) {
      nums[k] = n
      k++
    }
  }

  return k
}
