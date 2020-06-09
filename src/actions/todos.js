import API from 'goals-todos-api';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo(todo){
    return {
        type: ADD_TODO,
        todo
    }
}

function removetodo(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

function toggletodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function handleAddTodo(name, callback) {
    return (dispatch) => {
        return API.saveTodo(name).then((todo)=>{
            dispatch(addTodo(todo));
            callback();
        })
            .catch(()=>alert('An error occurred. Try again.'))
    }
}

export function handleDeleteTodo(todo) {
    return (dispatch) => {
        dispatch(removetodo(todo.id));
        return API.deleteTodo(todo.id)
            .catch(()=>{
                dispatch(removetodo(todo));
                alert('An error occurred. Try again.');
            });
    };
}

export function handleToggleTodo(id) {
    return (dispatch) => {
        dispatch(toggletodo(id));
        return API.saveTodoToggle(id)
            .catch(()=>{
                dispatch(toggletodo(id));
                alert('An error occured. Try again.');
            })
    }
}