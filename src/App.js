import { TodoCounter } from './TodoCounter'
import { TodoItem } from './TodoItem'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { CreateTodoButton } from './CreateTodoButton'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: true },
  { text: 'Llorar con la Llorona', completed: false },
]

function App () {
  return (<>
    <TodoCounter completed={2} total={3}/>
    <TodoSearch/>

    <TodoList>
      {defaultTodos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
      ))}
    </TodoList>

    <CreateTodoButton/>

  </>)
}

export default App
