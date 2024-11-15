function isPalindrome(s: string): boolean {
  // Filtrar solo caracteres alfanuméricos y convertir todo a minúsculas
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  // Verificar si la cadena limpia es un palíndromo comparando con su reverso
  return cleaned === cleaned.split('').reverse().join('')
}
