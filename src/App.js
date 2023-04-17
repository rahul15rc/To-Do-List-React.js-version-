import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [todoList, setTodoList] = useState([
    "Todo1", "Todo2", "Todo3"
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodoList([...todoList, newTodo]);
    setNewTodo("");
  };

  const deleteTodo = (index) => {
    let newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  console.log(newTodo);
  return (
    <div className="App">
      <div className='box' id="heading">
          <h1>
            Hello World
          </h1>
      </div>
      <div className='box'>
        {todoList.map((item, index) => {
            return (
              <div className="item">
                <input 
                  type="checkbox"
                  isChecked="false"
                  onChange={()=>deleteTodo(index)} 
                />
                <p>{item}</p>
              </div>
            )
          })
        }
        <form className='item'>
          <input 
            type="text" 
            name="newTodo" 
            placeholder="New Item" 
            autocomplete="off"
            onChange={(e) => {
              setNewTodo(e.target.value)
            }}
            value={newTodo}
          />
          <button 
            type="submit" 
            name="listSubmit"
            onClick={addTodo}  
          >+</button>
        </form>
      </div>
    </div>
  );
}

export default App;
