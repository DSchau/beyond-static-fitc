import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import styled from 'styled-components'

const StyledTwitterEmbed = styled(TwitterTweetEmbed)`
  margin: 0 auto;
`

export default class extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const els = document.querySelectorAll(`[id^="twitter-widget"]`)
      els.forEach(el => {
        if (el.shadowRoot.lastChild.getAttribute('id') !== 'custom-style') {
          const shadowStyle = document.createElement('style')
          shadowStyle.innerHTML = `
            .Tweet-text {
              font-size: 30px;
            }
          `
          el.shadowRoot.appendChild(shadowStyle)

          const elStyle = document.createElement('style')
          elStyle.innerHTML = `
            twitter-widget {
              margin: 0 auto;
            }
          `
          el.appendChild(elStyle)
        }
      })
    }, 1000)

  }
  render() {
    return (
      <StyledTwitterEmbed {...this.props} />
    )
  }
}
