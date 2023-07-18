import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import HouseOwner from "../../Layouts/DashBoard/HouseOwner/HouseOwner";
import AccessDenied from "../../Pages/AccessDenied/AccessDenied";
import OwnerHome from "../../Layouts/DashBoard/HouseOwner/OwnerHome/OwnerHome";
import HouseRenter from "../../Layouts/DashBoard/HouseRenter/HouseRenter";
import RenterHome from "../../Layouts/DashBoard/HouseRenter/RenterHome/RenterHome";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard/house-owner",
    element: <HouseOwner />,
    errorElement: <AccessDenied />,
    children: [
      {
        path: "/dashboard/house-owner",
        element: <OwnerHome />,
      },
    ],
  },
  {
    path: "/dashboard/house-renter",
    element: <HouseRenter />,
    errorElement: <AccessDenied />,
    children: [
      {
        path: "/dashboard/house-renter",
        element: <RenterHome />,
      },
    ],
  },
]);
export default router;
