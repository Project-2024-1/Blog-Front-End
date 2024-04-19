import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthRouter from "./auth/router";
import RootRouterAdmin from "./admin/router";
import RootRouterDisplay from "./display/router";
import Login from "./auth/Login";

const RootRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootRouterDisplay />} />
      <Route path="admin/*" element={<RootRouterAdmin />} />
      <Route path="auth/*" element={<AuthRouter />} />
      <Route path="login/" element={<Login />} />
    </Route>
  )
);

export default RootRouter;
