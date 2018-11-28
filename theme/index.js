import theme from 'mdx-deck/dist/themes/dark'

export default {
  ...theme,
  transitionTimingFunction: 'linear',
  transitionDuration: '0s',
  font: '"Lato", sans-serif',
  blockquote: {
    color: theme.colors.text,
    paddingLeft: '2rem',
    borderLeft: `5px solid ${theme.colors.text}`
  }
}
