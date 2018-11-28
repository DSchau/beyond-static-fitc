import React from 'react'
import Textfit from 'react-textfit'
import styled, { css } from 'styled-components'

const Container = styled.div`
  font-weight: bold;
  width: 100vw;
  padding: 0 2.5vw;
  ${props => props.caps && css`
    text-transform: uppercase;
  `}
`;

export default function Fit({ caps, children, className, compressor, max = 250, style = {} }) {
  return (
    <Container className={className} style={style} caps={caps}>
      <Textfit compressor={compressor} mode="single" max={max}>{children}</Textfit>
    </Container>
  )
}