type PartialTransaction = { amount: number }

type PartialMerchant = {
  transactions: PartialTransaction[]
}

export const calcSumTransactions = (
  transactions: Array<PartialTransaction>
): string =>
  transactions
    .reduce((acc: number, curr: PartialTransaction) => acc + curr.amount, 0)
    .toFixed(2)

export const calcSumMerchants = (merchants: PartialMerchant[]): string =>
  merchants
    .reduce((total: number, merchant: PartialMerchant) => {
      const merchantTotal = merchant.transactions.reduce(
        (acc: number, transaction: PartialTransaction) =>
          acc + transaction.amount,
        0
      )
      return total + merchantTotal
    }, 0)
    .toFixed(2)
