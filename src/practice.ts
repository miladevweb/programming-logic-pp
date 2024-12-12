function battleHordePractice(zombies: string, humans: string) {
  // Pointers
  let z = 0
  let h = 0

  // This loop stores the total value of each zombie and human: O(z)
  for (let i = 0; i < zombies.length; i++) {
    z += Number(zombies[i])
    h += Number(humans[i])
  }

  // Who won?
  const diff = Math.abs(z - h)
  if (diff === 0) return 'draw'
  return z > h ? diff + 'z' : diff + 'h'
}

function run(zombies: string, humans: string) {
  let z = zombies.split('').reduce((pointer, val) => pointer + Number(val), 0)
  let h = humans.split('').reduce((pointer, val) => pointer + Number(val), 0)

  let diff = Math.abs(z - h)
  if (diff === 0) return 'draw'
  return z > h ? diff + 'z' : diff + 'h'
}

function execute(zombies: string, humans: string): string {
  let z = 0
  let h = 0

  for (let i = 0; i < zombies.length; i++) {
    z += Number(zombies[i])
    h += Number(humans[i])
  }

  let diff = Math.abs(z - h)
  if (diff === 0) return 'draw'
  return z > h ? diff + 'z' : diff + 'h'
}
