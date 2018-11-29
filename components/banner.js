import React from 'react'
import styled from 'styled-components'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import Fit from '../components/fit'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  background-color: white;
  color: black;

  width: 100%;
  padding: 1rem;
`

const LinkIcon = styled(FaExternalLinkSquareAlt)`
  margin-right: 1rem;
`
export default function Banner() {
  return (
    <Container><Fit max={48}><LinkIcon /> beyondstatic.dustinschau.com</Fit></Container>
  )
}