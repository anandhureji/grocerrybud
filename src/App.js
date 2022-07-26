import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [name,setName] = useState('');
  const [list,setList] =  useState([]);
  const [isEditing,setIsediting] =  useState(true);
  const [editId,setEditid] = useState(null);
  const [alert,setAlert] = useState({show:false,msg:'',type:''});

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("form");
  }

  return (
    <section className='section-center'>

      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert /> }
        <h3>Grocery Shop</h3>
        <div className='form-control'>
          <input type='text' className='grocery' placeholder='Enter the item name' value={name} onChange={(e)=>setName(e.target.value)}></input>
          <button type='submit' className='submit-btn'>
            {isEditing?'edit':'submit'}
          </button>
        </div>

      </form>
      <div className='grocery-continer'>
        <List />
        <button className='clear-btn'>
          Clear Items
        </button>

      </div>

    </section>
  );
}

export default App
