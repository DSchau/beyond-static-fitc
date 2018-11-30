import React from 'react'
import styled from 'styled-components'

const Link = styled.a([], {
  color: 'inherit',
  textDecoration: 'none'
})

Link.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer'
}

export default Link
