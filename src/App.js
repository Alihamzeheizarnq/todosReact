import React , { useState } from 'react';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import SingleTodo from './Components/SingleTodo';
import TodoContext from './Context/TodoContext';

function App() {

  let [todos , setTodos] = useState({todos : []})
  let add = (text) => {

    setTodos(prevState => {
      return {
        todos : [
             ...prevState.todos,
        {key : Date.now() , name : text , done : false}
        ]
     
    }
    })

  }

  let state = {
    todos,
    add
  }
  

  return (
    <TodoContext.Provider value={state} >
      <div className="App">
        <Header />
        <main>
          <AddTodo />
          <div className="todosList">
            <div className="container">
              <div className="d-flex flex-column align-items-center ">
                <nav className="col-6 mb-3">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active font-weight-bold" id="nav-home-tab">undone <span className="badge badge-secondary">9</span></a>
                    <a className="nav-item nav-link font-weight-bold" id="nav-profile-tab">done <span className="badge badge-success">9</span></a>
                  </div>
                </nav>
                {todos.todos.map(item => <SingleTodo key={item.ket} item={item} />)}
                
              </div>

            </div>
          </div>
        </main>
      </div>
    </TodoContext.Provider>

  );
}

export default App;
