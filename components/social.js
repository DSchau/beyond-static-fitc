import React from 'react'
import styled from 'styled-components'
import { FaGlobe, FaGithub, FaTwitter, FaGit } from 'react-icons/fa'

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

export default function Social() {
  return (
    <Container>
      <Row>
        <List>
          <ListItem><FaTwitter /> schaudustin</ListItem>
          <ListItem><FaGithub /> dschau</ListItem>
          <ListItem><FaGlobe /> dustinschau.com</ListItem>
        </List>
        <Image src="images/dustin-schau.png" />
      </Row>
    </Container>
  )
}