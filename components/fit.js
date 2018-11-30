import React from 'react'
import Textfit from 'react-textfit'
import styled from 'styled-components'

const Container = styled.div([], props => ({
  fontWeight: 'bold',
  width: '100vw',
  padding: '0 2.5vw',
  ...(props.background && {
    background: props.background
  }),
  ...(props.color && {
    color: props.color
  }),
  ...(props.caps && {
    textTransform: 'uppercase'
  })
}))

export default function Fit({ caps, children, className, compressor, max = 250, style = {}, ...rest }) {
  return (
    <Container className={className} style={style} caps={caps} {...rest}>
      <Textfit compressor={compressor} mode="single" max={max}>{children}</Textfit>
    </Container>
  )
}