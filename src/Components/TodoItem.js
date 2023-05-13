import React from 'react'

const TodoItem = ({todo,onDelete}) => {


  return (
    <div className='text-center'>
       <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
        
      {/* function tick(){
//     <>
// return <h2>{new Date().toLocaleTimeString()}</h2>
// <h2>{new Date().toLocaleDateString()}</h2>
// </>

// }
setInterval(tick,1000);
       <div>{tick}</div> */}

    </div>
    
  )
 
}

export default TodoItem;

