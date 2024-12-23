import React from 'react'
import { useState } from 'react'
import './todo.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const Todo = () => {

    const [listTodo,setListTodo]=useState([]);

     let addList = (inputText) =>{
        setListTodo([...listTodo,inputText]);
    }

    const deleteListItem = (key)=>{
        let newListTodo = [...listTodo];
        newListTodo.splice(key,1)
        setListTodo([...newListTodo])
    }

  return (
    
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">List of Your Todo's</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}

      </div>
    </div>
   
  )
}

export default Todo