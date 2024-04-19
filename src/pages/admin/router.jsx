import { Route, Routes } from "react-router-dom";
import LayoutRootAdmin from "@src/components/layouts/admin/LayoutRootAdmin";
import NotFound from "@src/components/core/atoms/NotFound";
import Dashboard from "./dashboard/Dashboard";
import Products from "./products/Products";
import Users from "./users/Users";
import Help from "./help/Help";
import User1 from "./users/1/1";
import Users2 from "./users/2/2";

const RootRouterAdmin = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LayoutRootAdmin />}>
        <Route index element={<Dashboard />} />
        <Route path="products/*" element={<Products />} />
        <Route path="users" element={<Users />}>
          <Route index element={<User1 />} />
          <Route path="2" element={<Users2 />} />
        </Route>
        <Route path="help" element={<Help />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RootRouterAdmin;
