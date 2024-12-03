function run(nums: number[]): number {
  let candidate: number | null = null
  let count = 0

  for (let num of nums) {
    if (count === 0) {
      candidate = num
    }

    count += candidate === num ? 1 : -1
  }

  return candidate!
}

function execute(nums: number[]) {
  let count = 0
  let winner: number | null = null

  for (let val of nums) {
    if (count === 0) winner = val

    count += winner === val ? 1 : -1
  }
  return winner
}
