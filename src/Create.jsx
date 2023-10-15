import React, { useState } from 'react'
import axios from 'axios'


function Create() {
    const[task, setTask] = useState()
    const handleAdd = () => {
        axios.post('http://localhost:3000/add', {task:task})
        .then(result => console.log(result))
        .catch(err =>  console.log(err))
    }

  return ( 
    <div>
        <input type="text" id="input" placeholder='Enter task' onChange={(e) => setTask(e.target.value)} />
        <button type="button" id = "button" onClick={handleAdd}><a>+</a></button>
    </div>
  )
}

export default Create