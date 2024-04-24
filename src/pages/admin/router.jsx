import { Route, Routes } from 'react-router-dom';
import LayoutRootAdmin from '@src/components/layouts/admin/LayoutRootAdmin';
import NotFound from '@src/components/core/atoms/NotFound';
import Dashboard from './dashboard/Dashboard';
import Products from './products/Products';
import Users from './users/Users';
import Help from './help/Help';
import Users2 from './users/add-or-update/AddOrUpdateUser';
import TableListUser from './users/list-user/ListUser';
import TableListProduct from './products/list-products/ListProducts';

const RootRouterAdmin = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LayoutRootAdmin />}>
        <Route index element={<Dashboard />} />
        <Route path="products/*" element={<Products />}>
          <Route index element={<TableListProduct />} />
        </Route>
        <Route path="users/*" element={<Users />}>
          <Route index element={<TableListUser />} />
          <Route path="2" element={<Users2 />} />
        </Route>
        <Route path="help" element={<Help />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RootRouterAdmin;
