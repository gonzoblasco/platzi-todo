import { useContext } from 'react'
import { TodoContext } from '../TodoContext'

import { CreateTodoButton } from '../CreateTodoButton'
import { EmptyTodos } from '../EmptyTodos'
import { Modal } from '../Modal'
import { TodoCounter } from '../TodoCounter'
import { TodoForm } from '../TodoForm'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { TodoSearch } from '../TodoSearch'
import { TodosError } from '../TodosError'
import { TodosLoading } from '../TodosLoading'

function AppUI () {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext)

  return (
    <>
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        {loading && (
          <>
            <TodosLoading/>
            <TodosLoading/>
            <TodosLoading/>
          </>
        )}
        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

        {searchedTodos.map(todo => (
          <TodoItem
            completed={todo.completed}
            key={todo.text}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            text={todo.text}
          />
        ))}
      </TodoList>

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
    </>
  )
}

export { AppUI }