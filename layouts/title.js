import React, { Component } from 'react'
import styled from 'styled-components'

import { Banner } from '../components'
import { colors, particles } from '../constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${colors.gatsby};

  height: 100vh;
  width: 100vw;
`

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 0;
`


export default class Title extends Component {
  static containerId = '__title_slide__'

  componentDidMount() {
    if (process.env.USE_PARTICLES !== false) {
      import('@dschau/particles.js')
        .then(({ default: Particles }) => {
          Particles(Title.containerId, particles)
        })
    }
  }

  render() {
    const { children } = this.props;
    return (
      <Container>
        <Banner twitter={true} />
        <ParticlesContainer id={Title.containerId} />
        {children}
      </Container>
    )
  }
}
