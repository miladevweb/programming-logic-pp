function isValid(s: string): boolean {
  let stack: string[] = [] // La pila es un arreglo de cadenas
  const matchingBrackets: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  for (let char of s) {
    // Si es un paréntesis de apertura, lo agregamos a la pila
    if (matchingBrackets[char]) {
      stack.push(char)
    } else {
      // Si es un paréntesis de cierre, verificamos que coincida con el último de la pila
      let last = stack.pop()
      if (matchingBrackets[last as keyof typeof matchingBrackets] !== char) {
        return false // No coincide con el tipo de paréntesis de apertura
      }
    }
  }

  // Si la pila está vacía, todos los paréntesis se han cerrado correctamente
  return stack.length === 0
}
