function execute(ops: string[]): number {
  if (ops.length === 0) return 0
  let stack: number[] = []

  for (let val of ops) {
    if (val === 'C') stack.pop()
    else if (val === 'D') {
      let last = stack[stack.length - 1]
      stack.push(last * 2)
      //
    } else if (val === '+') {
      let previous = stack[stack.length - 1]
      let secondPrevious = stack[stack.length - 2]
      stack.push(previous + secondPrevious)
      //
    } else stack.push(Number(val))
  }

  return stack.reduce((acc, val) => acc + val, 0)
}

function calPointsPractice(ops: string[]) {
  let stack: number[] = []

  // O(n)
  for (let o of ops) {
    if (o === 'C') stack.pop()
    //
    else if (o === 'D') {
      let previousScore = stack.at(-1)!
      stack.push(previousScore * 2)
      //
    } else if (o === '+') {
      let last = stack[stack.length - 1]
      let secondLast = stack[stack.length - 2]
      stack.push(last + secondLast)
      //
    } else stack.push(Number(o))
  }

  // sum: accumulator of the iterations
  // score: current value of array
  // The callback does a sum += score
  // 0: initial value of accumulator
  return stack.reduce((sum, score) => sum + score, 0)
}

function run(ops: string[]): number {
  let stack: number[] = []

  for (let val of ops) {
    if (val === 'C') stack.pop()
    else if (val === '+') {
      const previous = stack[stack.length - 1]
      const secondPrevious = stack[stack.length - 2]
      stack.push(previous + secondPrevious)
    } else if (val === 'D') {
      const previous = stack[stack.length - 1]
      stack.push(previous * 2)
    } else {
      stack.push(Number(val))
    }
  }

  return stack.reduce((pointer, val) => pointer + val, 0)
}
