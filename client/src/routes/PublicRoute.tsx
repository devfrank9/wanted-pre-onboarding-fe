import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }: any) => {
  const isAuth = localStorage.getItem('access_token');
  return isAuth !== null ? <Navigate to="/todo" /> : children;
};

export default PublicRoute;
