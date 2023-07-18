import { Navigate, useLocation } from "react-router-dom";

const IsHouseOwner = ({ children }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if (user?.role === "House Owner") {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default IsHouseOwner;
