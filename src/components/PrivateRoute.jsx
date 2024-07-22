// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
