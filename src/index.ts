function calPoints(ops: string[]) {
  let stack: number[] = []

  for (let op of ops) {
    if (op === 'C') {
      // Eliminar el último puntaje
      stack.pop()
    } else if (op === 'D') {
      // Duplicar el último puntaje
      stack.push(stack[stack.length - 1] * 2)
    } else if (op === '+') {
      // Sumar los dos últimos puntajes
      let last = stack[stack.length - 1]
      let secondLast = stack[stack.length - 2]
      stack.push(last + secondLast)
    } else {
      // Es un puntaje numérico
      stack.push(Number(op))
    }
  }

  // Retornar la suma total de los puntajes
  return stack.reduce((sum, score) => sum + score, 0)
}
