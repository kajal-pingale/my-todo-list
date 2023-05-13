import React from 'react'
import TodoItem from "./TodoItem";

const ToDos = (props) => {
  return (
    <div className='containerr'>
      {/* <h3>Todos work!!</h3> */}
<h3 className='text-center my-3'>Todos list</h3> 

{props.todos.length===0?"no todos to display":
    
      props.todos.map((todo)=>{
return<>
<TodoItem todo={todo} onDelete={props.onDelete}/><hr/>
</>
      }
      )
      }
      {/* {props.todos} */}
      {/* <TodoItem todo={props.todos[0]}/> */}
    </div>
  )
}

export default ToDos;
