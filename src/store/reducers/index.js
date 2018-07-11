import todos from './todos';
import ui from './ui';

export default combineForGlobalState({
    todos,
    ui,
});

function combineForGlobalState(childReducers) {
    return (state, action) => 
        Object.keys(childReducers).reduce(
            (newState, reducerName) => {
                newState[reducerName] = childReducers[reducerName](state[reducerName], action);
                return newState;
            },
            {}
        );
};

//function combineForGlobalState(childReducers) {
    //return (state, action) => 
        //Object.keys(childReducers).reduce(
            //(newState, reducerName) => childReducers[reducerName](newState, action),
            //state
        //);
//};
