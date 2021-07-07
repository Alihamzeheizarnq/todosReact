import React, { useState, useReducer } from 'react';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import SingleTodo from './Components/SingleTodo';
import TodoContext from './Context/TodoContext';
import TodoReducer from './Reducer/TodoReducer';

function App() {

  let [done, setDone] = useState(false)
  const [state, dispatch] = useReducer(TodoReducer, {
    todos: []
  })

  let states = {
    dispatch,
  }



  let countOnDone = state.todos.filter(item => item.done !== false);
  let countDone = state.todos.filter(item => item.done === false);
  return (
    <TodoContext.Provider value={states} >
      <div className="App">
        <Header />
        <main>
          <AddTodo />
          <div className="todosList">
            <div className="container">
              <div className="d-flex flex-column align-items-center ">
                <nav className="col-6 mb-3">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a onClick={() => setDone(false)} className={`nav-item nav-link font-weight-bold ${!done ? 'active' : ''}`} id="nav-home-tab">undone <span className="badge badge-secondary">{countDone.length}</span></a>
                    <a onClick={() => setDone(true)} className={`nav-item nav-link font-weight-bold ${done ? 'active' : ''}`} id="nav-profile-tab">done <span className="badge badge-success"> {countOnDone.length}</span></a>
                  </div>
                </nav>
                {
                  done ? state.todos.map(item => item.done ? <SingleTodo key={item.key} item={item} /> : '')
                    : state.todos.map(item => !item.done ? <SingleTodo key={item.key} item={item} /> : '')

                }
              </div>

            </div>
          </div>
        </main>
      </div>
    </TodoContext.Provider>

  );
}

export default App;
