import theme from 'mdx-deck/dist/themes/dark'
import prism from 'react-syntax-highlighter/styles/prism/coy'
import graphql from 'react-syntax-highlighter/languages/prism/graphql'

export default {
  ...theme,
  transitionTimingFunction: 'linear',
  transitionDuration: '0s',
  font: '"Lato", sans-serif',
  prism: {
    style: prism,
    languages: {
      graphql
    }
  },
  blockquote: {
    color: theme.colors.text,
    paddingLeft: '2rem',
    borderLeft: `5px solid ${theme.colors.text}`
  }
}
