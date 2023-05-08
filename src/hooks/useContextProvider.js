import { useContext } from 'react'
import { Context } from '../context/context'

// creo hook para contexto
export function useContextProvider () {
  const data = useContext(Context)
  return data
}
