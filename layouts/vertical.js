import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;

  height: 100vh;
  width: 100vw;

  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  > div > * {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`

export default function Vertical({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}