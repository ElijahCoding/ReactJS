var redux = require('redux');

var reducer = (state = { name: 'anonymous' }, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            }
        default:
            return state;
    }
}

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState:', currentState);


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Elijah'
});

console.log('Name should be Elijah:', store.getState());
