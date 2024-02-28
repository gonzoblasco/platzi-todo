import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoSearch.css'

function TodoSearch () {
  const { searchValue, setSearchValue } = useContext(TodoContext)

  const onChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      onChange={onChange}
      value={searchValue}
    />
  )
}

export { TodoSearch }
