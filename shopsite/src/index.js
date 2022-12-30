import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import Products from './pages/Products';
import NewProducts from './pages/NewProducts';
import Home from './pages/Home';
import ProductsDetail from './pages/ProductsDetail';
import ProtectedRoute from './pages/ProtectedRoute';
import Carts from './pages/Carts';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      {
        path: '/products/new',
        element:
          <ProtectedRoute requireAdmin={true}>
            <NewProducts />
          </ProtectedRoute>
      },
      { path: '/products/:id', element: <ProductsDetail /> },
      {
        path: '/carts',
        element:
          <ProtectedRoute>
            <Carts/>
          </ProtectedRoute>
      }
    ]
  }

]);
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
