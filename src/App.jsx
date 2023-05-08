import { IncomeAndExpenses } from './components/IncomeAndExpenses'
import { TransactionForm } from './components/TransactionForm'
import { TransactionList } from './components/TransactionList'
import { ContextProvider } from './context/context'
import { HeaderNavbar } from './components/HeaderNavbar'
import { Graphic } from './components/Graphic'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function App () {
  return (
    <ContextProvider>
      <Container>
        <HeaderNavbar />
        <Row className='d-flex align-items-end'>
          <Col className='col-transaction-form'>
            <Col>
              <IncomeAndExpenses />
            </Col>
            <Col className='col-form'><TransactionForm /></Col>
          </Col>
          <Col className='col-transaction-form'>
            <Graphic />
            <TransactionList />
          </Col>
        </Row>
      </Container>
    </ContextProvider>
  )
}
