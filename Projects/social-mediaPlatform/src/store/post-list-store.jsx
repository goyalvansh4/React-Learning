import { createContext, useEffect, useReducer, useState } from "react";
  
// const DEFAULT_POST_LIST = [
//   {
//     id:'1',
//     title:"Going to Mumbai",
//     body:"Hi friends I am going to Mumbai for my Vacations. Hope to enjoy a lot.Peace out. ",
//     reaction:2,
//     userId:'user-9',
//     tag:["Mumbai","Vactions","Enjoying"],
//   },
//   {
//     id:'2',
//     title:"Pass ho gaye bhai",
//     body:"4 saal ki masti ke baad bhi ho gaye pass. Hard to belive.",
//     reaction:15,
//     userId:'user-12',
//     tag:["Gradute","Unbeliveable"], 
//   }
// ]
   

   export const PostList = createContext({
    postList:[],
    fetching:false,
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

     useEffect(()=>{
        const controller = new AbortController();
       const signal = controller.signal;
  
  
        setFetching(true);
        fetch('https://dummyjson.com/posts', { signal })
        .then(res => res.json())
        .then(data => {initialPost(data.posts)
          setFetching(false);
        }); 
  
        return ()=>{
           controller.abort();
        };
      },[]);

    return <PostList.Provider value={{postList,addPost,fetching,deletePost}}>
       {children}
    </PostList.Provider>
  }


  

  export default PostListProvider;