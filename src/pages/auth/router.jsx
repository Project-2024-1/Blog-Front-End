import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import ForgotPassword from "./Forgot";

const AuthRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      {/* <Route path="register" element={<Register />} /> */}
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default AuthRouter;
