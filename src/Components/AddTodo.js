import React, { useState } from 'react';

const AddTodo = (props) => {
    const[title,settitle]=useState("");
    const[desc,setdesc]=useState("");

    const submit=(e)=>{
e.preventDefault();//page reload nhi hoga
if(!title || !desc){
    alert("title dc cannot black")
}
props.addTodo(title,desc);
    }
  return (
    <div className='container'>
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label for="title" class="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="desc" class="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} class="form-control" id="desc"/>
  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  {/* <button type="submit" class="btn btn-sm btn-primary">Submit</button> */}
  <button type="submit" class="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
