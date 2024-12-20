import styles from "./todoitem.module.css";

export default function TodosItem({ item,todos, setTodos }) {
  function handleDelete(item) {
    console.log("This item is deleted: ", item);
    setTodos(todos.filter((todo)=> todo !== item));
    
      
    }
    function handleClick(name){
      setTodos(todos.map((todo)=> 
        todo.name=== name? {...todo,done:!todo.done}:todo)
    )
      
    }
    const className = item.done ? styles.completed : ""
  
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={()=>handleClick(item.name)}>{item.name}</span>
        <span>
          <button onClick={()=>handleDelete(item)} className={styles.deleteButton}>
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );

}