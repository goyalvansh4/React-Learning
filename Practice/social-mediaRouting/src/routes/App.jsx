import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PostList from "../Components/PostList";
import Sidebar from "../Components/Sidebar";
import CreatePost from "../Components/CreatePost";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";
function App() {
  
  const [selectedTab,setSelectedTab]=useState("Home");



  return (
    <PostListProvider>
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="content">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
