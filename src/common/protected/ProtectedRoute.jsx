import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ step, children }) => {
  const currentStep = useSelector((state) => state.form.currentStep);

  if (currentStep < step) {
    return <Navigate to="/firstpage" replace />;
  }

  return children;
};

export default ProtectedRoute;
