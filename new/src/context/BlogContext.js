import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state,action) =>{
    switch(action.type){
        case'ADD_BLOGPOST':
            return [...state,{id:Math.floor(Math.random()*99999),title: `Blog Post #${state.length +1}`}];
        case 'DELETE_BLOGPOST':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
}

export const BlogProvider = ({children}) => {
    const[blogPosts,dispatch] = useReducer(blogReducer,[]);

    const addBlogPost = () => {
        dispatch({
            type: 'ADD_BLOGPOST'
        });
    };

    const deleteBlogPost = (id) => {
        dispatch({
            type:'DELETE_BLOGPOST',
            payload: id
        })
    }
    


    return <BlogContext.Provider value={{data:blogPosts, addBlogPost,deleteBlogPost}}>
        {children}
    </BlogContext.Provider>;
};
 
export default BlogContext;



// import React, { useReducer } from 'react';
// import createDataContext from './createDataContext';


// const blogReducer = (state,action) =>{
//     switch(action.type){
//         case'ADD_BLOGPOST':
//             return [...state,{title: `Blog Post #${state.length+1}`}];
//         default:
//             return state;
//     }
// }

// const addBlogPost = dispatch => {
//     return () =>{
//         dispatch({type: 'ADD_BLOGPOST'});
//     };
    
// };


// export const {Context,Provider} = createDataContext(blogReducer,{addBlogPost},[]);