import React from 'react'
import { Container, Logo, Options, Text } from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Container>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo src="https://journalist-machinery-28864.netlify.app/img/MarvelLogo1.svg"/>
        </Link>
        <Options>
            <Link to="/characters" style={{ textDecoration: 'none' }}>
                <Text>Characters</Text>
            </Link>
            <Link to="/comics" style={{ textDecoration: 'none' }}>
                <Text>Comics</Text>
            </Link>
            <Link to="/series" style={{ textDecoration: 'none' }}>
                <Text>Series</Text>
            </Link>
        </Options>
    </Container>
  )
}

export default Header