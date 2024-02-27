import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import App from '../App'
import { TodoSearch } from '../TodoSearch'

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/App">
        <App/>
      </ComponentPreview>
      <ComponentPreview
        path="/TodoSearch">
        <TodoSearch/>
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews