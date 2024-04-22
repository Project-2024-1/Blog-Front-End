import { Route, Routes } from "react-router-dom";
import LayoutRootAdmin from "../../components/layouts/admin/LayoutRootAdmin";
import Dashboard from "./dashboard/Dashboard";
import Posts from "./posts/Posts";
import Users from "./users/Users";
import Help from "./help/Help";
import NotFound from "../../components/core/atoms/NotFound";
import IndexUser from "./users";
import CreateAndUpdateUser from "./users/createAndUpdate";
import CreateAndUpdatePost from "./posts/createAndUpdatePost";
import PostsIndex from "./posts";


const RootRouterAdmin = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LayoutRootAdmin />}>
        <Route index element={<Dashboard />} />
        <Route path="posts" element={<Posts />}>
          <Route index element={<PostsIndex />} />
          <Route path="create" element={<CreateAndUpdatePost />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route index element={<IndexUser />} />
          <Route path="create" element={<CreateAndUpdateUser />} />
        </Route>
        <Route path="help" element={<Help />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RootRouterAdmin;
