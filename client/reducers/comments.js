//a reducer takes in 2 things
//1. the action - info about what happened
//2. a copy of the current state

//when the application starts, the state will be empty - this is to say that the default state is empty
//a reducer takes in state, modify it and then return it
// function postComments(state = [], action) {
//     switch(action.type) {
//         case 'ADD_COMMENT':
//             return [...state, {
//                 user : action.author,
//                 text : action.comment
//             }];
//         case 'REMOVE_COMMENT':
//             return [
//                 ...state.slice(0, action.i),
//                 ...state.slice(action.i + 1)
//             ];
//         default:
//             return state;
//     }
// }

//make sure to set the default state to an empty object, since the data in the comments is an object
function comments(state = {}, action) {
    return state;
}

export default comments;