import React, { useContext, useState } from "react";

import TodoContext from "../Context/TodoContext";
function SingleTodo(props) {

    let [edit, setEdit] = useState(false);
    let [text, setText] = useState(props.item.name);
    let Todos = useContext(TodoContext);


    return (

        <>
            {!edit ? (
                <div className="col-6 mb-2">
                    <div className="d-flex justify-content-between align-items-center border rounded p-3">
                        <div>
                            {props.item.name}
                        </div>
                        <div>
                            <button onClick={() => { setEdit(true) }} type="button" className="btn btn-info btn-sm">edit</button>
                            <button onClick={() => { Todos.dispatch({ type: 'DELETE_TODO', payload: { key: props.item.key } }) }} type="button" className="btn btn-danger btn-sm ml-1">delete</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="col-6 mb-2">
                    <div className="d-flex justify-content-between align-items-center border rounded p-3">
                        <div>
                            <input value={text} onChange={(e) => { setText(e.target.value) }} />
                        </div>
                        <div>
                            <button onClick={() => { Todos.dispatch({ type: 'EDIT_TODO', payload: { text, key: props.item.key } }); setEdit(false) }} type="button" className="btn btn-success btn-sm ml-1">edit</button>
                        </div>
                    </div>
                </div>
            )
            }
        </>

    )
}
export default SingleTodo;