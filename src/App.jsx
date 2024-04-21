import { RouterProvider } from "react-router-dom";
import RootRouter from "./pages/router";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return <div>
    <RouterProvider router={RootRouter} />
    <ToastContainer />
  </div>;
}

export default App;
