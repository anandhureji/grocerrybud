import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [name,setName] = useState('');
  const [list,setList] =  useState([]);
  const [isEditing,setIsediting] =  useState(false);
  const [editId,setEditid] = useState(null);
  const [alert,setAlert] = useState({show:false,msg:'',type:''});

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!name)
    {

    }

    else if(name && isEditing)
    {

    }

    else{
      const newItem = {id:new Date().getTime().toString(),title:name};
      setList([...list,newItem]);
      setName('');
    }
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
      {list.length>0 && (
        <div className='grocery-continer'>
        <List  items = {list} />
        <button className='clear-btn' onClick={()=>{setName('')}}>
          Clear Items
        </button>

      </div>
      )}
      

    </section>
  );
}

export default App
