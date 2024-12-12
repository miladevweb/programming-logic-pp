function execute(patches: string[]): string[] {
  patches.sort((a, b) => {
    const [majorA, minorA, patchA] = a.split('.').map((n) => Number(n))
    const [majorB, minorB, patchB] = b.split('.').map((n) => Number(n))

    if (majorA !== majorB) return majorA - majorB
    if (minorA !== minorB) return minorA - minorB
    return patchA - patchB
  })

  return patches
}
