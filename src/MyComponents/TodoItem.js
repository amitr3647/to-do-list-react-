import React from "react";

export default function Todo({ todo, onDelete }) {
  
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      {/* {console.log(onDelete,'grandfather')}
            {console.log(todo,'father')} */}
      <button className="btn btn-sm btn-danger" 
      onClick={() => onDelete(todo)}>
        Delete
      </button>
    </div>
  );
}
//here todo is object which was inside todos array.
