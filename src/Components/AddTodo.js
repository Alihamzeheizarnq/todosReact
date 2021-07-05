import React, { useState, useContext } from 'react';
import TodoContext from '../Context/TodoContext';
function AddTodo() {
  let Context = useContext(TodoContext);
  let [text, setText] = useState('');

  let formHanler = (e) => {
    e.preventDefault();
    Context.add(text);
    setText('')
  }
  return (
    <section className="jumbotron">
      <div className="container d-flex flex-column align-items-center">
        <h1 className="jumbotron-heading">Welcome!</h1>
        <p className="lead text-muted">To get started, add some items to your list:</p>
        <form className="form-inline" onSubmit={formHanler}>
          <div className="form-group" >
            <input type="text" onChange={(e) => setText(e.target.value)}
              className="form-control mx-sm-3" value={text} placeholder="i want to do ..." />
            <button type='submit' className="btn btn-primary" >add</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddTodo;