
function TodoReducer(state, payload) {

    switch (payload.type) {
        case 'ADD_TODO':
            return add(state, payload);
        case 'DELETE_TODO':
            return remove(state, payload);
        case 'EDIT_TODO':
            return edit(state, payload);
    }

}

export default TodoReducer;

let add = (state, payload) => {
    return {
        ...state,
        todos: [
            ...state.todos,
            { key: Date.now(), name: payload.payload.text, done: true }
        ]

    }
}
let remove = (state, payload) => {

    return {
        ...state,
        todos: state.todos.filter(item => item.key !== payload.payload.key)
    }
}

let edit = (state, payload) => {
    let newTodo = state.todos.filter(((item) => {
        if (item.key === payload.payload.key) {
            item.name = payload.payload.text
        }
        return true
    }))

    return {
        ...state,
        todos: newTodo
    }


}