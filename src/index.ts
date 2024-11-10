function battleHorde(zombies: string, humans: string) {
  let z = 0
  let h = 0

  for (let i = 0; i < zombies.length; i++) {
    z += Number(zombies[i])
    h += Number(humans[i])
  }

  const diff = Math.abs(z - h)
  if (diff === 0) return 'Draw'
  return z > h ? diff + 'z' : diff + 'h'
}

const zombies = '242'
const humans = '334'

const result = battleHorde(zombies, humans)
console.log(result) // '2h'
