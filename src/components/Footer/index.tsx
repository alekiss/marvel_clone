import React from 'react'
import { Container, Link, LinksContainer, Logo, Text } from './styles'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <Container>
        <Logo src="https://journalist-machinery-28864.netlify.app/img/MarvelLogo1.svg"/>
        <Text>Project developed from Zappts PDI.</Text>
        <Text>Data provided by Marvel. © 2022 MARVEL</Text>
        <LinksContainer>
          <Link href='https://www.linkedin.com/in/alekissmelo/' target="_blank">
            <FaLinkedin />
          </Link>
          <Link href='https://github.com/alekiss' target="_blank">
            <FaGithub />
          </Link>
        </LinksContainer>
    </Container>
  )
}

export default Footer