import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import "../../../assets/style/admin.css";

const LayoutRootAdmin = () => {
  return (
    <div className="layout-admin">
      <Navbar />
      <Header />
      <div className="main bg-Tbe py-4 px-6">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutRootAdmin;
