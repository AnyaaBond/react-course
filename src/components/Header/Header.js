import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <Container>
      <Navbar bg='light'>
        <Link to='/home'><Navbar.Brand>Книга рецептов</Navbar.Brand></Link>
      </Navbar>
    </Container>
  )
}

export default Header
