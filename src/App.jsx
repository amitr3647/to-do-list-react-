// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";

function App() {
  // let initTodo;
  // if (localStorage.getItem("todos") === null) {
  //   initTodo = [];
  // } else {
  //   initTodo = localStorage.getItem("todos");
  // }

  const [todos, setTodos] = useState([]);

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    const myTodo = {
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]); //this will add todo to todos
  };
  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <>
      <Header title="to-do-list" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} length={todos.length} />
      <Footer />
    </>
  );
}
//NOTE-here App.js is a parent and todos and onDelete is jsx attributes.also {todos} ek array hai..... and {onDelete} ek method hai.todos and onDelete yeh dono app.js(parent) ka kamai hai jo woh apne beta(i.e Todos.js)  ko dega.

export default App;
