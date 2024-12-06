function run(patches: string[]) {
  patches.sort((a, b) => {
    // split them into major, minor and patch and then transform into numbers and destructure them
    const [majorA, minorA, patchA] = a.split('.').map((n) => Number(n))
    const [majorB, minorB, patchB] = b.split('.').map((n) => Number(n))

    // if majors are equal then we'll evaluate the minors....
    if (majorA !== majorB) return majorA - majorB
    if (minorA !== minorB) return minorA - minorB
    return patchA - patchB
  })

  return patches
}

run(['1.10.1', '1.2.1', '3.1.0', '0.10.1'])
