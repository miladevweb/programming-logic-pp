function isValidPractice(s: string) {
  const stack: string[] = []
  const pairs: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  for (let char of s) {
    if (pairs[char]) stack.push(char)
    else {
      let last = stack.pop()
      if (last && pairs[last] !== char) return 'invalid'
    }
  }
  return stack.length === 0 ? 'valid' : 'invalid'
}

function run(s: string) {
  const stack: string[] = []
  const pairs: { [key: string]: string } = {
    '}': '{',
    ')': '(',
    ']': '[',
  }

  for (let char of s) {
    if (pairs[char]) {
      let last = stack.pop()
      if (last !== pairs[char]) return 'invalid'
    } else {
      stack.push(char)
    }
  }

  return stack.length === 0 ? 'valid' : 'invalid'
}
