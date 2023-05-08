// creo el reduce, las acciones y  estado inicial
export const initialState = JSON.parse(window.localStorage.getItem('transactions')) || { transactions: [] }

export const ACTION_TYPE = {
  ADD: 'ADD_TRANSACTION',
  DELETE: 'DELETE_TRANSACTION'
}

export function reducer (state, action) {
  switch (action.type) {
    case ACTION_TYPE.ADD:
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      }

    case ACTION_TYPE.DELETE:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        )
      }

    default:
      return state
  }
}
