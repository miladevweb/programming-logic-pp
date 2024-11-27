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
  // 0: initial value of accumulator
  return stack.reduce((sum, score) => sum + score, 0)
}
