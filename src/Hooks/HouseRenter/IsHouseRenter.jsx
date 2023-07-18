import { Navigate, useLocation } from "react-router-dom";

const IsHouseRenter = ({ children }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if (user?.role === "House Renter") {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default IsHouseRenter;