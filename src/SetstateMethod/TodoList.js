import React, { useState } from 'react';

export default function TodoList(props) {
    let formstyle={
        width:500,
    
    }
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");

    const submit=(e)=>{
e.preventDefault();
if(!title || !desc){
    alert("title dc cannot black")
}
props.addtododata(title,desc);
    }
  



    
  return (
    <div className='text-center' style={formstyle}>
      <form onSubmit={submit}>
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text"  value={title}  onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  
  </div>
  <div class="mb-3">
    <label for="desc" class="form-label">Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary" >AddToDo</button>
</form>

    </div>
  )
}
