import { Navigate } from 'react-router-dom';

import { ProtectedRouteProps } from '~components/ProtectedRoute/ProtectedRoute.types';

const ProtectedRoute = ({
  component,
  isAllowed,
  redirectPath,
}: ProtectedRouteProps): JSX.Element => {
  if (isAllowed) {
    return component;
  }

  return <Navigate to={redirectPath} />;
};

export default ProtectedRoute;
