function run(prices: number[]): number {
  let minPrice = Infinity // it points the minimum price so far, this pointer help us to calculate the maximum profit
  let maxProfit = 0

  for (let price of prices) {
    // update lowest price
    if (price < minPrice) minPrice = price

    // calculate profit
    const profit = price - minPrice

    // update maxProfit only if it's greater
    if (profit > maxProfit) maxProfit = profit
    console.log({ price, profit, minPrice, maxProfit })
  }

  return maxProfit
}

console.log(run([5, 4, 10, 2, 1]))

function execute(prices: number[]): number {
  let minPrice = Infinity
  let maxProfit = 0

  for (let price of prices) {
    if (price < minPrice) minPrice = price
    const profit = price - minPrice
    if (profit > maxProfit) maxProfit = profit
  }

  return maxProfit
}
