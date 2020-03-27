const initState = {
    posts: [
        {id: 1, title: 'Some Post Title', body: 'This is random text with no logic, just to fill my post.'},
        {id: 2, title: 'Some Other Post Title', body: 'This is random text with no logic, just to fill my post.'},
        {id: 3, title: 'And Another Post Title', body: 'This is random text with no logic, just to fill my post.'},
    ]
}

const rootReducer = (state = initState, action) => {

    let updatedPosts = state.posts;

    switch (action.type) {
        case 'DELETE_POST':

            updatedPosts = updatedPosts.filter(post => {
                return post.id !== action.id
            })
    
            return {
                ...state,
                posts: updatedPosts,
            }

        case 'ADD_POST':

            updatedPosts.push(action.post);
            return {
                ...state,
                posts: updatedPosts,
            }
    
        default:
            return state;
    }
}

export default rootReducer;