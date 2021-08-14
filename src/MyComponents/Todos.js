import React from "react";
import TodoItem from "./TodoItem";
export default function Todos(props) {
  return (
    <div className="container">
      <h3 className="text-center ">TO DO LIST:-</h3>
      {/* {console.log(props.todos,'a')}
       {console.log(props.onDelete,'b')} */}



{props.todos.length===0 ? <h5 style={{color:'green',fontSize:'40px',textAlign:'center',padding:'5vw'}}>👍...all done for the day</h5>:
       props.todos.map((value,index)=>{
        // console.log(value);
        // console.log(index);
        // return <TodoItem todo={props.todos[index]}/>
        return <TodoItem
            todo={value}
            onDelete={props.onDelete}
            key={index}
            />
        
       } )
       }
    </div>

  );
}
//NOTE2- this is child of app.js and will obtain the jsx attributes(todos and onClick) of its parent(app.js).this can access the parent attributes by props.onClick.
//NOTE3- here Todos also have a child i.e TodoItem.js. yeh father ka and grandfather dono ka jsx attributes leta hai i.e todo and onDelete
