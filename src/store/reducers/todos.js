export default function todos(state = {}, action) {
    switch (action.type) {
        case 'REMOVE_TODO':
            return removeTodo(action.id, state);
        case 'SET_DONE':
            return setDone(action.id, state);
        case 'ADD_TODO':
            return addTodo(action.id, action.todo, state);
        default:
            return state;
    }
}

function removeTodo(id, todos) {
    let newTodos = {};
    Object.keys(todos).forEach(todoId => {
        if (todoId != id) { 
            newTodos[todoId] = todos[todoId];
        }
    });
    return newTodos;
}

function setDone(id, todos) {
    let newTodos = {};
    Object.keys(todos).forEach(todoId => {
        if (todoId != id) { 
            newTodos[todoId] = todos[todoId];
        } else {
            let td = todos[todoId];
            newTodos[todoId] = {
                color: td.color,
                text: td.text,
                done: !td.done,
            };
        }
    });
    return newTodos;
}

function addTodo(id, todo, todos) {
    let newTodos = {};
    Object.keys(todos).forEach(todoId => {
        newTodos[todoId] = todos[todoId];
    });
    newTodos[id] = {
        color: todo.color,
        text: todo.text,
        done: todo.done,
    };
    return newTodos;
}
