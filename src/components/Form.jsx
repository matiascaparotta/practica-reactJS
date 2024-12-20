import { useState } from "react";
import style from './form.module.css'

export default function Form({todos, setTodos}) {
  const [todo, setTodo] = useState({name:"", done:false});
  
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"", done:false});
  }
  return (
    <form className={style.todoform} onSubmit={handleSubmit}>
      <div className= {style.inputContainer}>
      <input
      className={style.modernInput}
        onChange={(e) => setTodo({name: e.target.value, done:false})}
        value={todo.name}
        type="text"
        placeholder="Enter todo item "
      />
      <button className = {style.modernButton}type="submit">Add</button>
      </div>
    </form>
  );
}
