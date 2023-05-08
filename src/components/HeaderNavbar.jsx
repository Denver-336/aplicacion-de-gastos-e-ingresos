import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

export function HeaderNavbar () {
  return (
    <Navbar bg='dark'>
      <Container>
        <Navbar.Brand className='fs-1 mx-auto'>Financial Manager</Navbar.Brand>
      </Container>
    </Navbar>

  )
}
