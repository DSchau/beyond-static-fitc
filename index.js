import Intro from './sections/01-intro.mdx'
import ContentMesh from './sections/02-content-mesh.mdx'
import Demo from './sections/98-demo.mdx'
import Conclusion from './sections/99-conclusion.mdx'

export { default as theme } from './theme'

export default [
  ...Intro,
  ...ContentMesh,
  ...Demo,
  ...Conclusion
]
