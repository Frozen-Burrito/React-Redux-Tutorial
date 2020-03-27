export const deletePost = (id) => {
    return { 
        type: 'DELETE_POST',
        id
    }
}

export const addPost = (post) => {
    return {
        type: 'ADD_POST',
        post
    }
}