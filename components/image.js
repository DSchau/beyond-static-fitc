import React from 'react'
import styled, { css } from 'styled-components'
import { Image } from 'mdx-deck'

const StyledImage = styled(Image)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Darken = styled.div`
  ${props => props.darken && css`
    :after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), black);
      opacity: ${props.darken};
    }
`}
`

const Children = styled.div`
  z-index: 2;
`

function ImageComponent({ children, darken, src, ...rest }) {
  return (
    <StyledImage src={src} {...rest}>
      <Darken darken={darken} />
      <Children>{children}</Children>
    </StyledImage>
  )
}

export default ImageComponent