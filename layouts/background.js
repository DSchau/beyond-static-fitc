import React from 'react'
import { Invert } from 'mdx-deck/layouts'

export default function({ background, color }) {
  return ({ children }) => <Invert bg={background} color={color}>{children}</Invert>
}
