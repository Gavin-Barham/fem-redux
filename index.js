import { createStore, combineReducers, applyMiddleware, bindActionCreators, compose } from "redux";
const add = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return state + 1
    }
    return state
}
const stateLogEnhancer = (createStore) => (reducer, initialState, enhancer) => {
    const stateLogReducer = (state = initialState, action) => {
        console.log(state);
        const newState = reducer(state, action);
        console.log(state);

        return newState;
    };
    return createStore(stateLogReducer, initialState, enhancer);
};
const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {
    const monitorReducer = (state = initialState, action) => {
        console.log(state);
        const newState = reducer(state, action);
        console.log(state);

        return newState;
    };
    return createStore(stateLogReducer, initialState, enhancer);
};
const store = createStore(add, 0, stateLogEnhancer);
store.dispatch({ type:"INCREMENT" })
console.log(store.getState());