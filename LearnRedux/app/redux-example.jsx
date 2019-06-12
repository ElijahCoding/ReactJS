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

var store = redux.createStore(reducer, redux.compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('Name is ', state.name);
    document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState:', currentState);


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Elijah'
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Ivan'
});
