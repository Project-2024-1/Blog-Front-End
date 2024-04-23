import { Outlet } from 'react-router-dom';

const Users = () => {
  return (
    <div className="pr-5">
      <Outlet />
    </div>
  );
};

export default Users;
