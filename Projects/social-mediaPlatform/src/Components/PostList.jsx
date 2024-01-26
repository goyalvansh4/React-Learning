import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = ()=>{

  const {postList,fetching} = useContext(PostListData);
  
    
  
   
  //   fetch('https://dummyjson.com/posts')
  //  .then(res => res.json())
  //  .then(data => {initialPost(data.posts)});
  

  
  return <div className="post-list">
  { fetching && <LoadingSpinner/>}
  {!fetching && postList.length === 0 && <WelcomeMessage />}
  {!fetching && postList.map(post=> <Post key={post.id} post={post}/>)}
  </div>
}

export default PostList;