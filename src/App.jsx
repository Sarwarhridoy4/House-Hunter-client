import { RouterProvider } from "react-router-dom";
import router from "./router/routes/routes";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-slate-300">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
