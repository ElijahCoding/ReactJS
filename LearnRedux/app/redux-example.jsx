var redux = require('redux');

var stateDefault = {
    name: 'anonymous',
    hobbies: [],
    movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

var nameReducer = (state = 'anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name
        default:
            return state;
    }
};

var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter(hobbdy => hobby.id !== action.id)
        default:
            return state
    }
};

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer
});

var store = redux.createStore(reducer, redux.compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('Name is ', state.name);
    document.getElementById('app').innerHTML = state.name;

    console.log('New state', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState:', currentState);


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Elijah'
});
//
store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
})
//
// store.dispatch({
//     type: 'CHANGE_NAME',
//     name: 'Ivan'
// });
//
// store.dispatch({
//     type: 'ADD_MOVIE',
//     title: 'TEST',
//     genre: 'TEST'
// });
