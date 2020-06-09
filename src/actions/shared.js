import API from 'goals-todos-api';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveData(goals, todos) {
    return {
        type: RECEIVE_DATA,
        goals,
        todos,
    }
}

export function handleInitialData() {
    return (dispatch) => {
        Promise.all([
            API.fetchTodos(),
            API.fetchGoals()
        ]).then(([todos, goals])=>{
            dispatch(receiveData(goals, todos));
        })
    }
}