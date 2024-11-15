class RandomizedSet {
  private values: number[] // Array para almacenar los elementos
  private indexMap: Map<number, number> // Mapa para rastrear índices en el array

  constructor() {
    this.values = []
    this.indexMap = new Map()
  }

  // Inserta un elemento si no está presente
  insert(val: number): boolean {
    if (this.indexMap.has(val)) {
      return false // El valor ya existe
    }
    this.values.push(val) // Añadir al array
    this.indexMap.set(val, this.values.length - 1) // Mapear valor a índice
    return true
  }

  // Elimina un elemento si está presente
  remove(val: number): boolean {
    if (!this.indexMap.has(val)) {
      return false // El valor no existe
    }

    // Obtener índice del elemento a eliminar
    const index = this.indexMap.get(val)!

    // Mover el último elemento al lugar del elemento eliminado
    const lastValue = this.values[this.values.length - 1]
    this.values[index] = lastValue
    this.indexMap.set(lastValue, index)

    // Eliminar el último elemento del array y mapa
    this.values.pop()
    this.indexMap.delete(val)

    return true
  }

  // Retorna un elemento aleatorio del conjunto
  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.values.length)
    return this.values[randomIndex]
  }
}
