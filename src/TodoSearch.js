import { useState } from 'react'
import './TodoSearch.css'

export function TodoSearch () {
  const [searchValue, setSearchValue] = useState('')

  return (<input className="TodoSearch"
                 onChange={(event) => {
                   setSearchValue(event.target.value)
                 }}
                 placeholder="Cortar Cebolla"
                 value={searchValue}
  />)
}
