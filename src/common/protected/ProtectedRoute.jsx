import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// useSelector eke kiyanne redux wala thiyena hook ekak

const ProtectedRoute = ({ stepRequired, children }) => {
  //useselector kiyanne data read karanna store eken kiyanne
  //form kiyanne slice eke name eka
  //step kiynne data store wenna ona me slice ekata
  const currentStep = useSelector(state => state.form.step);

  //current page eke idala ilga page ekata yanna
  if (currentStep < stepRequired) {
    return <Navigate to="/firstpage" replace />;  
  }

  return children;
};

export default ProtectedRoute;
