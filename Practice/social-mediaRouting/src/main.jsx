import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,  RouterProvider,} from "react-router-dom";
import App from './routes/App.jsx';
import PostList, { postLoader } from './Components/PostList.jsx';
import CreatePost from './Components/CreatePost.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
     {path:"/",element:<PostList/>, loader:postLoader},
     {path:"/create-post",element:<CreatePost/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
