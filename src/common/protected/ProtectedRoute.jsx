import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ stepRequired, children }) => {
  const currentStep = useSelector(state => state.form.step);

  if (currentStep < stepRequired) {
    return <Navigate to="/firstpage" replace />;  // redirect if step not reached
  }

  return children;
};

export default ProtectedRoute;
