import React from 'react'
import styled, { css } from 'styled-components'

import Fit from './fit'

const Container = styled.div`
  ${props => css`
    background-color: ${props.background};
    color: ${props.color};
  `}
`

export default function Box({ children, ...rest }) {
  return <Container {...rest}><Fit max={72}>{children}</Fit></Container>
}
