function reverseWords(s: string): string {
  // Paso 1: Eliminar los espacios al inicio y final, y dividir la cadena en palabras
  const words = s.trim().split(/\s+/) // Usamos una expresión regular para dividir por uno o más espacios

  // Paso 2: Invertir el arreglo de palabras
  words.reverse()

  // Paso 3: Unir las palabras con un solo espacio y devolver el resultado
  return words.join(' ')
}
