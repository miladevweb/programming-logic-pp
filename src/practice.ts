class Run {
  private values: number[]
  private indexMap: Map<number, number> // <value, index>

  constructor() {
    this.values = []
    this.indexMap = new Map()
  }

  insert(val: number): boolean {
    if (this.indexMap.has(val)) return false

    this.values.push(val)
    this.indexMap.set(val, this.values.length - 1)
    return true
  }

  remove(val: number): boolean {
    if (!this.indexMap.has(val)) return false

    const index = this.indexMap.get(val)!

    const lastValue = this.values[this.values.length - 1]
    this.values[index] = lastValue // replace removedElement with lastElement
    this.indexMap.set(lastValue, index)

    this.values.pop() // delete lastElement
    this.indexMap.delete(val) // delete value

    return true
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.values.length)
    return this.values[randomIndex]
  }
}
