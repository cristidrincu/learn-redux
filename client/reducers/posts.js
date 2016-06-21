//a reducer takes in 2 things
//1. the action - info about what happened
//2. a copy of the current state

//when the application starts, the state will be empty - this is to say that the default state is empty
//a reducer takes in state, modify it and then return it
function posts(state=[], action) {
    console.log('The post will change');
    console.log(state, action);
    return state;
}

export default posts;