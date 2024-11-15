function lengthOfLastWord(s: string): number {
  // Eliminar los espacios iniciales y finales de la cadena
  s = s.trim()

  // Dividir la cadena en palabras por espacios
  const words = s.split(' ')

  // Devolver la longitud de la última palabra
  return words[words.length - 1].length
}
