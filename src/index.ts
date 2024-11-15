function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0
  let tIndex = 0

  // Recorremos ambas cadenas
  while (sIndex < s.length && tIndex < t.length) {
    // Si los caracteres coinciden, avanzamos en la cadena s
    if (s[sIndex] === t[tIndex]) {
      sIndex++
    }
    // Siempre avanzamos en la cadena t
    tIndex++
  }

  // Si recorrimos toda la cadena s, significa que es una subsecuencia de t
  return sIndex === s.length
}
