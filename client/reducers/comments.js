//a reducer takes in 2 things
//1. the action - info about what happened
//2. a copy of the current state

//when the application starts, the state will be empty - this is to say that the default state is empty
//a reducer takes in state, modify it and then return it
function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            return [...state, {
                user : action.author,
                text : action.comment
            }];
        case 'REMOVE_COMMENT':
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ];
        default:
            return state;
    }
}

function comments(state = {}, action) {
    if (typeof action.postId !== 'undefined') {
        return {
            // Take the current state
            ...state,
            // overwrite this post with the new one
            [action.postId]: postComments(state[action.postId], action)
        };
    }

    return state;
}

export default comments;