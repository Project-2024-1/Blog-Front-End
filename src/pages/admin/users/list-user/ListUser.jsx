import TableListData from '@src/components/core/atoms/TableListData';
// import { useSelector } from 'react-redux';

const TableListUser = () => {
  // const userColumnsConfig = useSelector((state) => state.userReducer.userColumnsConfig);
  const userColumnsConfig = ['id', 'UserName', 'UserEmail', 'UserAvatar', 'UserStatus', 'UserRole', 'createdAt'];

  const data = [
    {
      id: 'id',
      UserName: 'UserName',
      UserEmail: 'UserEmail',
      UserAvatar: 'UserAvatar',
      UserStatus: 'UserStatus',
      UserRole: 'UserRole',
      createdAt: 'createdAt',
    },
    {
      id: 'id 2',
      UserName: 'UserName 2',
      UserEmail: 'UserEmail 2',
      UserAvatar: 'UserAvatar 2',
      UserStatus: 'UserStatus 2',
      UserRole: 'UserRole 2',
      createdAt: 'createdAt 2',
    },
    {
      id: 'id 3',
      UserName: 'UserName 3',
      UserEmail: 'UserEmail 3',
      UserAvatar: 'UserAvatar 3',
      UserStatus: 'UserStatus 3',
      UserRole: 'UserRole 3',
      createdAt: 'createdAt 3',
    },
  ];

  const renderRowUser = (key, row) => {
    switch (key) {
      case 'id':
        return <p>{row.id}</p>;
      case 'UserName':
        return <p className="text-blue2">{row.UserName}</p>;
      case 'UserEmail':
        return <p className="max-w-[150px] break-words">{row.UserEmail}</p>;
      case 'UserAvatar':
        return <img src={row.UserEmail} alt={row.UserName} />;
      case 'UserStatus':
        return <p>{row.UserStatus}</p>;
      case 'createdAt':
        return <p>{row.createdAt}</p>;
      default:
        return typeof row[key];
    }
  };

  return <TableListData data={data} columnsConfig={userColumnsConfig} renderRowValue={renderRowUser} />;
};

export default TableListUser;
