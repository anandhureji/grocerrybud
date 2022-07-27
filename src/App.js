import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [name,setName] = useState('');
  const [list,setList] =  useState([]);
  const [isEditing,setIsediting] =  useState(false);
  const [editId,setEditid] = useState(null);
  const [alert,setAlert] = useState({show:false,msg:'',type:''});

  const showAlert = (show=false,type="",msg="")=>{
    setAlert({show,type,msg});
  }

  const clearList = () =>{
    showAlert(true,'danger','List is Empty');
    setList([]);
  }

  const removeItem = (id) =>{
    showAlert(true,'danger','Item deleted successfully');
    setList(list.filter((item)=>item.id!==id))

  }


  const editItem = (id)=>{
    const specification = list.find((item)=>item.id===id);
    setIsediting(true);
    setEditid(id);
    setName(specification.title);
  }


  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!name)
    {
      showAlert(true,'danger','Please enter an item');

    }

    else if(name && isEditing)
    {
      setList(list.map((item)=>{
        if(item.id===editId)
        {
          return {...item,title:name}
        }
        return item
      })
      
      )
      setName('');
      setEditid(null);
      setIsediting(false);
      showAlert(true,'success','Item Updated');


    }

    else{
      const newItem = {id:new Date().getTime().toString(),title:name};
      setList([...list,newItem]);
      setName('');
      showAlert(true,'success','Item added successfully');
    }
  }

  return (
    <section className='section-center'>

      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} /> }
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
        <List  items = {list} removeItem = {removeItem} editItem={editItem} />
        <button className='clear-btn' onClick={clearList}>
          Clear Items
        </button>

      </div>
      )}
      

    </section>
  );
}

export default App
