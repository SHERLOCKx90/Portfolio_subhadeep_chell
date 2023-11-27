import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Code from './components/Code.jsx';
import Design from './components/Design.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'design',
        element: <Design />,
    },
    {
        path: 'code',
        element: <Code />,
    },
]);

const Container = document.getElementById('root');
const root = ReactDOM.createRoot(Container);
root.render( <RouterProvider router={router} />);