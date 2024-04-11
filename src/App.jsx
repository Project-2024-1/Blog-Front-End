import { RouterProvider } from "react-router-dom";
import RootRouter from "./pages/router";

function App() {
  return <RouterProvider router={RootRouter} />;
}

export default App;
