import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAutn } from '../context/AuthContext';
const ProtectedRoute = ({ children }) => {
  const { user } = UserAutn();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
