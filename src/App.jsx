import { RouterProvider } from "react-router-dom";
import router from "./router/routes/routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Toaster/>
      <RouterProvider router={router}></RouterProvider>
  
    </div>
  );
};

export default App;
