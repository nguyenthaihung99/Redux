import { combineReducers } from 'redux';

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return state + 1;
        case 'Minus_Counter':
            return state - 1;
        case 'Core_Counter':
            return state * state;
        case 'Divide-Counter':
            return state / state;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    counter
});

export default rootReducer;
