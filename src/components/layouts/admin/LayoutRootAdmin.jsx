import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import "@src/assets/style/admin.css";

const LayoutRootAdmin = () => {
  return (
    <div className="layout-admin">
      <Navbar />
      <Header />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutRootAdmin;
