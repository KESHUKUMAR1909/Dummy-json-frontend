// Routes.jsx
import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';


const PageRoutes = () => {
  const isAuthenticated = localStorage.getItem('token');
  console.log(isAuthenticated)

  const routeList = [
    {
      path: '/',
      element: isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
    },
    {
      path: '/login',
      element:isAuthenticated ? <Navigate to="/dashboard" /> :<Login />
       },
    {
      path: '/products',
      element: isAuthenticated?<ProductPage />:<Navigate to="/login" />
    },
    {
      path: '/dashboard',
      element: isAuthenticated?<Dashboard />:<Navigate to="/login" />
    },
  ];

  return (
    <RouterRoutes>
      {routeList.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </RouterRoutes>
  );
};

export default PageRoutes;
