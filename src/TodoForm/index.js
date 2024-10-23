import React from 'react';
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal, editTodo, existingTodo }) {
  const [newTodoValue, setNewTodoValue] = React.useState(existingTodo ? existingTodo.text : '');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (existingTodo) {
      editTodo(existingTodo.text, newTodoValue);
    } else {
      addTodo(newTodoValue);
    }
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{existingTodo ? 'Edita tu TODO' : 'Escribe tu nuevo TODO'}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          {existingTodo ? 'Editar' : 'Añadir'}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };