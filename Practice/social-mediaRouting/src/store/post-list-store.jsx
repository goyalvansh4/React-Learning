import { createContext, useEffect, useReducer, useState } from "react";
  

   export const PostList = createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},});

    const postListReducer=(currPostList,action)=>{
      let newPostList = currPostList;
      if(action.type === 'DELETE_POST'){
        newPostList=currPostList.filter((post)=>post.id !== action.payload.postId);
      }
      else if(action.type === 'ADD_POST'){
        newPostList=[action.payload,...currPostList]
      }
      else if(action.type === 'INITIALS_POST'){
        newPostList=action.payload.posts;
      }
      return newPostList;
   }
    
  const PostListProvider =({children})=>{

    

   const [postList,dispatchPostList]=useReducer(postListReducer,[]);
   const [fetching ,setFetching]=useState(false);

   

   const addPost =(post)=>{
      dispatchPostList({
        type:"ADD_POST",
        payload:post,
      })
   }

   const initialPost =(posts)=>{
    dispatchPostList({
      type:"INITIALS_POST",
      payload:{
        posts,
      }
    })
 }

   const deletePost =(postId)=>{
      dispatchPostList({
        type:"DELETE_POST",
        payload:{
          postId
        },
      });
   }  

     

    return <PostList.Provider value={{postList,addPost,deletePost}}>
       {children}
    </PostList.Provider>
  }


  

  export default PostListProvider;