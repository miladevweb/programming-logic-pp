function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return ''

  // Start by assuming the first string as the common prefix
  let prefix = strs[0]

  // Iterate through all strings
  for (let i = 1; i < strs.length; i++) {
    // Keep shortening the prefix until it matches the start of strs[i]
    while (strs[i].indexOf(prefix) !== 0) {
      // Lo itera reduciendo prefix a '' si no coincide
      prefix = prefix.substring(0, prefix.length - 1)

      if (prefix === '') return ''
    }
  }

  return prefix
}
