//a reducer takes in 2 things
//1. the action - info about what happened
//2. a copy of the current state

//when the application starts, the state will be empty - this is to say that the default state is empty
//a reducer takes in state, modify it and then return it

//make sure to set the default state to an empty array, since the data in the posts is an array of posts
function posts(state=[], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES':
            console.log('Incrementing likes');
            const i = action.index;
            return [
                ...state.slice(0, i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1)
            ];
        break;
        default:
            return state;
    }
}

export default posts;