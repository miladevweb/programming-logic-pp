// Delete all val elements in nums
function removeElementPractice(nums: number[], val: number) {
  let k = 0 // Pointer that tracks which elements are valid

  // O(n)
  for (let n of nums) {
    if (n !== val) {
      nums[k] = n
      k++
    }
  }

  return k
}
// Return the number of elements that are not equal to val

function run(nums: number[], val: number) {
  let k = 0 // Pointer that tracks which elements are different from val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++
    }
  }

  return k
}
