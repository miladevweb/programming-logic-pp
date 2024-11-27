function isValid(s: string) {
  let stack: string[] = [] // La pila es un arreglo de cadenas
  const pairs: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  for (let char of s) {
    // Si es un bracket de apertura "{, [, (", lo agregamos a la pila
    if (pairs[char]) {
      stack.push(char)
    } else {
      // Si es un bracket de cierre "}, ], )", verificamos que coincida con el último de la pila(si es que existe)
      let last = stack.pop() // {, }, [, ], (, ), undefined
      if (last && pairs[last] !== char) {
        return false // No coincide con el tipo de paréntesis de apertura
      }
    }
  }

  // Si la pila está vacía (por usar pop()), todos los paréntesis se han cerrado correctamente
  return stack.length === 0 ? 'valid' : 'invalid'
}
