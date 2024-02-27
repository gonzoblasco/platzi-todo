import './TodoItem.css'

export function TodoItem ({ text, completed, index }) {
  return (<li className="TodoItem" key={index}>
    <span className={`Icon Icon-check ${completed &&
    'Icon-check--active'}`}>V</span>
    <p
      className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
    <span className="Icon Icon-delete">X</span>
  </li>)
}
