// [1, 2, 3, 4, 5] - 2 => [4, 5, 1, 2 ,3]
function run(nums: number[], k: number): number[] {
  const n = nums.length
  k = k % n // if k is greater than n

  // Step 1: Revert the entire array
  reverse(nums, 0, n - 1) // [5, 4, 3, 2, 1]

  // Step 2: Revert first k elements
  reverse(nums, 0, k - 1) // [4, 5, 3, 2, 1]

  //   // Step 3: Revert the remaining elements
  reverse(nums, k, n - 1) // [4, 5, 1, 2, 3]
  return nums
}

function reverse(nums: number[], start: number, end: number) {
  while (start < end) {
    ;[nums[start], nums[end]] = [nums[end], nums[start]] // we don't need temporal variables to change values
    start++
    end--
  }
}

function execute(nums: number[], k: number): number[] {
  const n = nums.length
  k = k % n // If k is greater than n, we reduce it to an effective value
  if (k === 0) return nums

  const leftPart = nums.slice(-k) // Last k elements
  const rightPart = nums.slice(0, n - k) // First n - k elements

  nums.splice(0, n, ...leftPart, ...rightPart) // remove n elements from index 0 and replace them with right and left part destructured values, we don't need what it returns
  return nums
}
