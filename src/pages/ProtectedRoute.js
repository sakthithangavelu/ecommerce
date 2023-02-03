import { Redirect, Route } from "react-router-dom";
import useAuth from "use-auth";

const ProtectedRoute = (props) => {
  const { user } = useAuth();
  if (!user) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
