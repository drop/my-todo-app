export function removeTodo(todo) {
    return {
        type: 'REMOVE_TODO',
        id: todo.id,
    };
}

export function setDone(todo) {
    return {
        type: 'SET_DONE',
        id: todo.id,
    };
}

export function addTodo(todo) {
    return (dispatch, getState) => {
        const timestamp = Date.now();
        dispatch({
            type: 'ADD_TODO',
            id: timestamp.toString(),
            todo
        });
    };
}
