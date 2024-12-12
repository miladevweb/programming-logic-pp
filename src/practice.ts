function execute(s: string): 'valid' | 'invalid' {
  let stack: string[] = []
  const pairs: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  // It empties stack array
  for (let char of s) {
    if (!(char in pairs)) stack.push(char) // add open bracket
    else {
      let last = stack.pop() // remove open bracket
      if (last !== pairs[char]) return 'invalid' // If last isn't an open bracket return invalid, since only open brackets must be added into the stack
    }
  }

  return stack.length === 0 ? 'valid' : 'invalid'
}

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

function run(s: string): 'valid' | 'invalid' {
  const stack: string[] = []
  const pairs: { [key: string]: string } = {
    '}': '{',
    ')': '(',
    ']': '[',
  }

  // It empties stack
  for (let val of s) {
    if (pairs[val]) {
      const last = stack.pop() // delete and get last bracket - it must be the same as the one we just popped
      if (last !== pairs[val]) return 'invalid' // it validates if the last bracket is the same as the one we just popped
    } else {
      stack.push(val) // Add open bracket
    }
  }

  return stack.length === 0 ? 'valid' : 'invalid'
}
