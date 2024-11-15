function strStr(haystack: string, needle: string): number {
  // Si la subcadena needle está vacía, devolver 0
  if (needle === '') {
    return 0
  }

  // Buscar la primera aparición de needle en haystack
  return haystack.indexOf(needle)
}
