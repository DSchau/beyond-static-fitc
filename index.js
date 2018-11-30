import Intro from './sections/01-intro.mdx'
import Jamstack from './sections/02-jamstack.mdx'
import ContentMesh from './sections/03-content-mesh.mdx'
import Gatsby from './sections/04-gatsby.mdx'
import Demo from './sections/98-demo.mdx'
import Conclusion from './sections/99-conclusion.mdx'

export { default as theme } from './theme'

export default [
  ...Intro,
  ...Jamstack,
  ...ContentMesh,
  ...Gatsby,
  ...Demo,
  ...Conclusion
]
