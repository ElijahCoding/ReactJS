var redux = require('redux');

var stateDefault = {
    name: 'anonymous',
    hobbies: [],
    movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

var reducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            }

        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            }

        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter(hobby => hobby.id !== action.id)
            }
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre
                    }
                ]
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

    console.log('New state', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState:', currentState);


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Elijah'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
})

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Ivan'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'TEST',
    genre: 'TEST'
});
