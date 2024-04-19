import { RouterProvider } from "react-router-dom";
import RootRouter from "@src/pages/router";

function App() {
  return <RouterProvider router={RootRouter} />;
}

export default App;
