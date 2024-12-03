function removeDuplicatesPractice(nums: number[]) {
  if (nums.length === 0) return 0

  let k = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]
      k++
    }
  }

  return k
}

// nums is a non-decreasing array
// remove elements in-place such that each element is unique
function run(nums: number[]): number {
  if (nums.length === 0) return 0
  let k = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]
      k++
    }
  }

  return k
}

// non-decreasing => [1,1,1,4,5,5]
function execute(nums: number[]) {
  if (nums.length === 0) return 0
  let k = 1 // the first element is always unique

  // it iterates from second value
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]
      k++
    }
  }
}
