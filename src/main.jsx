import React from 'react'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import MainFeedPage from './pages/main-feed-page';
import MainProfilePage from './pages/main-profile-page';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "feed",
        element: <MainFeedPage />,
      },
      {
        path: "profile",
        element: <MainProfilePage />,
      },
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(

 

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
