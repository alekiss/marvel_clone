import React, { useState } from 'react'
import { Container, Logo, Options, Text } from './styles'
import { Link } from 'react-router-dom'

const Header = () => {

    const [activeNav, setActiveNav] = useState('')

  return (
    <Container>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo src="https://journalist-machinery-28864.netlify.app/img/MarvelLogo1.svg" onClick={() => setActiveNav('')}/>
        </Link>
        <Options>
            <Link to="/characters" style={{ textDecoration: 'none' }}>
                <Text onClick={() => setActiveNav('characters')} className={activeNav === 'characters' ? 'active' : ''}>Characters</Text>
            </Link>
            <Link to="/comics" style={{ textDecoration: 'none' }}>
                <Text onClick={() => setActiveNav('comics')} className={activeNav === 'comics' ? 'active' : ''}>Comics</Text>
            </Link>
            <Link to="/series" style={{ textDecoration: 'none' }}>
                <Text onClick={() => setActiveNav('series')} className={activeNav === 'series' ? 'active' : ''}>Series</Text>
            </Link>
        </Options>
    </Container>
  )
}

export default Header