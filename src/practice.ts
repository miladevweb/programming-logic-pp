function mergePractice(nums1: number[], m: number, nums2: number[], n: number) {
  let i = m - 1 // It points the last valid index in nums1
  let j = n - 1 // It points the last index in nums2
  let k = m + n - 1 // It points the last index in nums1

  // While nums1 AND nums2 have elements: O(m + n)
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i--
      //
    } else {
      nums1[k] = nums2[j]
      j--
    }
    k--
  }

  // If there are elements left in nums2: O(n)
  while (j >= 0) {
    nums1[k] = nums2[j]
    j--
    k--
  }
}
