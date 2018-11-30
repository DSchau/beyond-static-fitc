import React from 'react'
import styled from 'styled-components'
import { FaGlobe, FaGithub, FaTwitter, FaHome } from 'react-icons/fa'
import { MdBusiness } from 'react-icons/md'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const List = styled.ul`
  padding: 0;
  text-align: left;

  margin: 2rem;
`

const ListItem = styled.li`
  list-style-type: none;
  margin: 0.25rem;

  font-size: 44px;
`

const Image = styled.img`
  border-radius: 100%;
  width: auto;
  height: auto;

  margin-left: 2rem;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`

Link.defaultProps = {
  rel: 'noopener noreferrer',
  target: '_blank'
}

export default function Social() {
  return (
    <Container>
      <Row>
        <List>
          <ListItem><FaTwitter /> <Link href="https://twitter.com/schaudustin">schaudustin</Link></ListItem>
          <ListItem><FaGithub /> <Link href="https://github.com/dschau">dschau</Link></ListItem>
          <ListItem><FaGlobe /> <Link href="https://dustinschau.com">dustinschau.com</Link></ListItem>
          <ListItem><MdBusiness /> Gatsby</ListItem>
          <ListItem><FaHome /> Omaha, Nebraska</ListItem>
        </List>
        <Image src="images/dustin-schau.png" />
      </Row>
    </Container>
  )
}