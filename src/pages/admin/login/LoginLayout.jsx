import { NavLink, Outlet } from "react-router-dom";


const LoginLayout = () => {
  return (
    <div className="layout-admin">
      <div className="main bg-Tbe py-4 px-6">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;
