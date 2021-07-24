// import logo from "./logo.svg";
import React, {useState } from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";

function App() {
  let [todos, setTodos] = useState([
    {
      sno: 1,
      title: "go to shop",
      desc: "buy milk",
    },
    {
      sno: 2,
      title: "go to mall",
      desc: "buy utensils",
    },
    {
      sno: 3,
      title: "go to market",
      desc: "buy veggie",
    },
  ]);

  const onDelete = (todo) => {
    // todos.pop(todo);
    // setTodos(todos);

    // console.log(todos);
    setTodos(
      todos.filter((e) => {
        console.log(e);
        return e !== todo;
      })
    );
  };

const addTodo=(title,desc)=>{
  let sno=todos[todos.length-1].sno;
  const myTodo={
    sno:sno,
    title:title,
    desc:desc,
  }
  setTodos([...todos,myTodo]);
}  

  return (
    <>
      <Header title="to-do-list" searchBar={false} />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} length={todos.length} />
      <Footer />
    </>
  );
}
//NOTE-here App.js is a parent and todos and onDelete is jsx attributes.also {todos} ek array hai..... and {onDelete} ek method hai.todos and onDelete yeh dono app.js(parent) ka kamai hai jo woh apne beta(i.e Todos.js)  ko dega.

export default App;
