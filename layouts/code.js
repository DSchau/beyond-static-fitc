import styled from 'styled-components'

import theme from '../theme'

const bgColor = theme.prism.style['pre[class*="language-"]'].background

const FullCode = styled.div([], {
  width: '100vw',
  height: '100vh',
  textAlign: 'left',
  backgroundColor: bgColor,
  '& pre': {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    // needed to override inline styles from syntax highlighting
    margin: '0 !important',
    width: '100vw',
    height: '100vh'
  }
})

export default FullCode