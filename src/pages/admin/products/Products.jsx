import { Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <div className="pr-5">
      <Outlet />
    </div>
  );
};

export default Products;
