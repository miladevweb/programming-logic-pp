// increasing order
function merge(nums1: number[], m: number, nums2: number[], n: number) {
  let i = m - 1 // points the last element of the valid part of nums1
  let j = n - 1 // points the last element of nums2
  let k = m + n - 1 // points the last index of nums1

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

  // If there are any remaining elements in nums2, copy them over
  while (j >= 0) {
    nums1[k] = nums2[j]
    j--
    k--
  }

  // No need to check for nums1, as if any elements are left, they're already in place
}
