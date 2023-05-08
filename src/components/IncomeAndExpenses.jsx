import { totals } from '../tools/totals'
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack'

export function IncomeAndExpenses () {
  const { income, expenses, balance } = totals()

  return (
    <ListGroup>
      <ListGroup.Item>
        <Stack direction='horizontal' gap={3}>
          <div>Income:</div>
          <div className='ms-auto'>${income}</div>
        </Stack>
      </ListGroup.Item>

      <ListGroup.Item>
        <Stack direction='horizontal' gap={3}>
          <div>Expenses:</div>
          <div className='ms-auto'>${expenses}</div>
        </Stack>
      </ListGroup.Item>

      <ListGroup.Item>
        <Stack direction='horizontal' gap={3}>
          <div>Balance:</div>
          <div className='ms-auto'>${balance}</div>
        </Stack>
      </ListGroup.Item>
    </ListGroup>
  )
}
