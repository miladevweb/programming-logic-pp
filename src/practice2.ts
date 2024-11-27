function run(s: string) {
  const stack: string[] = []
  const pairs: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  for (let char of s) {
    if (pairs[char]) {
      let last = stack.pop()
      if (last !== pairs[char]) return 'invalid'
      //
    } else stack.push(char)
  }

  return stack.length === 0 ? 'valid' : 'invalid'
}
