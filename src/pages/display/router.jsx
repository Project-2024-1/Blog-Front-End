import { Route, Routes } from "react-router-dom";
import LayoutRootDisplay from "@src/components/layouts/display/LayoutRootDisplay";
import HomePage from "./home/HomePage";

const RootRouterDisplay = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutRootDisplay />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default RootRouterDisplay;
