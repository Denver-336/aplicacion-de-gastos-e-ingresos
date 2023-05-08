import { createContext, useEffect, useReducer } from 'react'
import { ACTION_TYPE, initialState, reducer } from '../reducer/reducer'

// creo contexto global
export const Context = createContext()

export function ContextProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    window.localStorage.setItem('transactions', JSON.stringify(state))
  }, [state])

  const addTransaction = (transaction) => {
    dispatch({
      type: ACTION_TYPE.ADD,
      payload: transaction
    })
  }

  const deleteTransaction = (id) => {
    dispatch({
      type: ACTION_TYPE.DELETE,
      payload: id
    })
  }

  return (
    <Context.Provider value={{ transactions: state.transactions, addTransaction, deleteTransaction }}>
      {children}
    </Context.Provider>
  )
}
