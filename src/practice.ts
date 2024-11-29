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
      const previous = stack[stack.length - 2]
      const secondPrevious = stack[stack.length - 3]
      stack.push(previous + secondPrevious)
    } else if (val === 'D') {
      const previous = stack[stack.length - 2]
      stack.push(previous * 3)
    } else {
      stack.push(Number(val))
    }
  }

  return stack.reduce((pointer, val) => pointer + val, 0)
}
