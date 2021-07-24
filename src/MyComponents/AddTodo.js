import React,{useState} from "react";

export default function AddTodo(props) {
const[title,setTitle]=useState('');
const [desc, setDesc] = useState('');

const submit=(e)=>{
  e.preventDefault();
  console.log('submitted');
  if(!title||!desc){
    alert('title and description are must');
  }
props.addTodo(title,desc);
  
}


  return (
    <div className='ms3'>
        
      <form onSubmit={submit}      
      className='form-control-sm '>
        <div className>
          <label htmlFor="title" className="form-label">
            
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder='Todo title'
            className="form-control form-control-sm"
            id="title"
            aria-describedby="emailHelp"
          />

        </div>
        <div className="mb-1">
          <label htmlFor="description" className="form-label ">
            
          </label>
          <input
          onChange={(e)=>setDesc(e.target.value)}
          
            type="text"
            value={desc}
            placeholder='Description'
            className="form-control form-control-sm"
            id="description"
          />
        </div>
        
        <button 
        // onClick={()=>{console.log('clicked')}}
          type="submit" className="btn btn-dark btn-sm">
          Add
        </button>
      </form>
    
    </div>
  );
}
