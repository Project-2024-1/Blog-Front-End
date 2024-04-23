// import { useSelector } from 'react-redux';

import TableListData from '@src/components/core/atoms/TableListData';

const TableListProduct = () => {
  // const userColumnsConfig = useSelector((state) => state.userReducer.userColumnsConfig);
  const userColumnsConfig = [
    'id',
    'PostTitle',
    'PostDescription',
    'PostLink',
    'PostImage',
    'PostMetaTitle',
    'PostMetaDescription',
    'PostMetaKeyword',
    'PostTag',
    'PostContent',
    'PostStatus',
    'PostSortOrder',
    'createdAt',
  ];

  const data = [
    {
      id: 'id',
      PostTitle: 'PostTitle',
      PostDescription: 'PostDescription',
      PostLink: 'PostLink',
      PostImage: 'PostImage',
      PostMetaTitle: 'PostMetaTitle',
      PostMetaKeyword: 'PostMetaKeyword',
      PostTag: 'PostTag',
      PostMetaDescription: 'PostMetaDescription',
      PostContent: 'PostContent',
      PostStatus: 'PostStatus',
      PostSortOrder: 'PostSortOrder',
      createdAt: 'createdAt',
    },
    {
      id: 'id 2',
      PostTitle: 'PostTitle 2',
      PostDescription: 'PostDescription 2',
      PostLink: 'PostLink 2',
      PostImage: 'PostImage 2',
      PostMetaTitle: 'PostMetaTitle 2',
      PostMetaDescription: 'PostMetaDescription 2',
      PostMetaKeyword: 'PostMetaKeyword 2',
      PostTag: 'PostTag 2',
      PostContent: 'PostContent 2',
      PostStatus: 'PostStatus 2',
      PostSortOrder: 'PostSortOrder 2',
      createdAt: 'createdAt 2',
    },
    {
      id: 'id 3',
      PostTitle: 'PostTitle 3',
      PostDescription: 'PostDescription 3',
      PostLink: 'PostLink 3',
      PostImage: 'PostImage 3',
      PostMetaTitle: 'PostMetaTitle 3',
      PostMetaDescription: 'PostMetaDescription 3',
      PostMetaKeyword: 'PostMetaKeyword 3',
      PostTag: 'PostTag 3',
      PostContent: 'PostContent 3',
      PostStatus: 'PostStatus 3',
      PostSortOrder: 'PostSortOrder 3',
      createdAt: 'createdAt 3',
    },
  ];

  const renderRowUser = (key, row) => {
    switch (key) {
      case 'id':
        return <p>{row.id}</p>;
      case 'PostTitle':
        return <p className="text-blue2">{row.PostTitle}</p>;
      case 'PostDescription':
        return <p className="max-w-[150px] break-words">{row.PostDescription}</p>;
      case 'PostLink':
        return <img src={row.PostDescription} alt={row.PostTitle} />;
      case 'PostImage':
        return <p>{row.PostImage}</p>;
      case 'PostMetaTitle':
        return <p>{row.PostMetaTitle}</p>;
      case 'PostMetaDescription':
        return <p>{row.PostMetaDescription}</p>;
      case 'PostMetaKeyword':
        return <p>{row.PostMetaKeyword}</p>;
      case 'PostTag':
        return <p>{row.PostTag}</p>;
      case 'PostContent':
        return <p>{row.PostContent}</p>;
      case 'PostStatus':
        return <p>{row.PostStatus}</p>;
      case 'PostSortOrder':
        return <p>{row.PostSortOrder}</p>;
      case 'createdAt':
        return <p>{row.createdAt}</p>;
      default:
        return typeof row[key];
    }
  };

  return <TableListData data={data} columnsConfig={userColumnsConfig} renderRowValue={renderRowUser} />;
};

export default TableListProduct;
