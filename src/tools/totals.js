import { useContextProvider } from '../hooks/useContextProvider'

// funciones
export function totals () {
  const { transactions } = useContextProvider()

  const amounts = transactions.map((transaction) => transaction.amount)

  const balance = amounts.reduce((acc, item) => (acc += item), 0)
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)
  const expenses = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1

  return { balance, income, expenses }
}
