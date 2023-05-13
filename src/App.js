import logo from './logo.svg';
import React,{useState} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import './App.css';
import AddTodo from './Components/AddTodo';
import Setstate from './SetstateMethod/Setstate';
import ForceUpdateState from "./SetstateMethod/ForceUpdateState";
import UncontrolledForm from './SetstateMethod/UncontrolledForm';
import ControlledForm from './SetstateMethod/ControlledForm';
import ReactEventEx from './SetstateMethod/ReactEventEx';
import ToDos from"./Components/ToDos";
import TodoList from './SetstateMethod/TodoList';
function App() {


  const addtododata=(title,desc)=>{
console.log(title,desc);

  }

  const addTodo=(title,desc)=>{
    console.log("i am adding",title,desc);
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
     sno=todos[todos.length-1].sno+1;}
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo)
    
    }

  const [todos,setTodos]=useState([
    {sno:1,
     title:"Go to Market",
     desc:"You have to go to market for buying fruits"
    
    },
    {sno:2,
      title:"Go to Mall",
      desc:"You have to go to mall for viewing movies"
     
     },
     {sno:3,
      title:"Go to picnic",
      desc:"You have to go to lonavala for picnic"
     
     }
  ]);

  const onDelete=(todo)=>{
    console.log("I am on delete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  return (
    <div className="App">
      {/* <Setstate/>
      <ForceUpdateState/>
      <UncontrolledForm/>
      <ControlledForm/>
      <ReactEventEx/> */}


      <Header title="MyToDo" searchbar={false}/>
      <AddTodo addTodo={addTodo}/>
      <ToDos todos={todos} onDelete={onDelete}/>
      <Footer/>


     {/* <TodoList addtododata={addtododata}/> */}

     
    </div>
  );
}

export default App;
