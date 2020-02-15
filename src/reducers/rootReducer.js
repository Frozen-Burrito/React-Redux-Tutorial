const initState = {
    posts: [
        {id: 1, title: 'Some Post Title', body: 'This is random text with no logic, just to fill my post.'},
        {id: 2, title: 'Some Other Post Title', body: 'This is random text with no logic, just to fill my post.'},
        {id: 3, title: 'And Another Post Title', body: 'This is random text with no logic, just to fill my post.'},
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let updatedPosts = state.posts.filter(post => {
            return post.id !== action.id
        })

        return {
            ...state,
            posts: updatedPosts
        }
    }
    return state;
}

export default rootReducer;