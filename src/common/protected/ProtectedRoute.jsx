import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// useSelector eke kiyanne redux wala thiyena hook ekak

const ProtectedRoute = ({ stepRequired, children }) => {
  //useselector kiyanne data read karanna store eken kiyanne
  const currentStep = useSelector(state => state.form.step);

  if (currentStep < stepRequired) {
    return <Navigate to="/firstpage" replace />;  
  }

  return children;
};

export default ProtectedRoute;
