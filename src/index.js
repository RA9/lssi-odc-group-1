import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import About from './route/about';
import reportWebVitals from './reportWebVitals';
import Services from './route/services';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/about",
    element: <About />
  },

  {
    path: "/services",
    element: <Services />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();