import { useState } from 'react'
import { useContextProvider } from '../hooks/useContextProvider'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'

export function TransactionForm () {
  const { addTransaction } = useContextProvider()
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    addTransaction({
      description,
      amount: +amount,
      id: window.crypto.randomUUID()
    })

    setDescription('')
    setAmount('')

    setSuccess(true)
  }

  const handleChange = (event) => {
    if (event.target.name === 'description') setDescription(event.target.value)
    if (event.target.name === 'amount') setAmount(event.target.value)

    setSuccess(false)
  }

  return (
  // <div>
  //   <form onSubmit={handleSubmit}>
  //     <input onChange={(e) => setDescription(e.target.value)} value={description} placeholder='Ingresa una descripción...' />
  //     <input onChange={(e) => setAmount(e.target.value)} value={amount} placeholder='00.00' type='number' step='0.01' />
  //     <button>Guardar</button>
  //   </form>
  // </div>
    <>
      <Form onSubmit={handleSubmit}>
        {success === true && <Alert variant='success'>Transacción agregada correctamente</Alert>}

        <Form.Group className='mb-3'>
          <Form.Label>Ingresa una descripción...</Form.Label>
          <Form.Control onChange={handleChange} value={description} name='description' type='text' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Ingresa un monto...</Form.Label>
          <Form.Control onChange={handleChange} name='amount' value={amount} type='number' />
        </Form.Group>

        <Button variant='primary' type='submit'>Guardar</Button>
      </Form>
    </>
  )
}
