import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const RestrictedRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};