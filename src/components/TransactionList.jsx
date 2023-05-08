import { useContextProvider } from '../hooks/useContextProvider'
import Stack from 'react-bootstrap/Stack'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

export function TransactionList () {
  const { transactions, deleteTransaction } = useContextProvider()
  return (
    <ListGroup>
      {
        transactions?.map((transaction) => (
          <ListGroup.Item key={transaction.id} action>
            <Stack direction='horizontal' gap={3}>
              <div>{transaction.description}</div>
              <div className='ms-auto'>${transaction.amount}</div>
              <Badge onClick={() => deleteTransaction(transaction.id)} bg='danger'>Eliminar</Badge>
            </Stack>
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  )
}
