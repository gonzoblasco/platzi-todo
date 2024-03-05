import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import App from '../App'
import { TodoSearch } from '../TodoSearch'
import { TodoItem } from '../TodoItem'

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
      <ComponentPreview
        path="/TodoItem">
        <TodoItem/>
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews