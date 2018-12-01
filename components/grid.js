import React from 'react'
import styled from 'styled-components'

import { Fit } from '../components'

const Container = styled.div(props => ({
  display: 'grid',
  gridTemplateColumns: '100%',
  ...props.cols && {
    ['@media only screen and (min-width: 768px)']: {
      gridTemplateColumns: props.cols
    }
  }
}))


export default function Grid({ cols, children }) {
  return (
    <Container cols={cols}>
      {React.Children.map(children, (child, index) => <span key={index} style={{ fontSize: 48 }}>{child}</span>)}
    </Container>
  )
}
