/* eslint-disable react/prop-types */
// import { useDispatch } from 'react-redux';
import { Button, Form, Input, Select, Switch } from 'antd';
import { Fragment, useState } from 'react';
// import axios from 'axios';
import { toast } from 'react-toastify';

const roles = [
  {
    label: 'Admin',
    value: 'Admin',
  },
  {
    label: 'User',
    value: 'User',
  },
  {
    label: 'CTV',
    value: 'CTV',
  },
];

const AddOrUpdateUser = ({ type = 'ADD' }) => {
  // const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [previewImage, setPreviewImage] = useState('');
  const [urlImage, setUrlImage] = useState('');
  // const [previewOpen, setPreviewOpen] = useState(false);
  // const [fileList, setFileList] = useState([]);
  const onFinish = async (values) => {
    console.log('🚀 ~ onFinish ~ values:', { ...values, UserAvatar: urlImage });
    // dispatch(onAppLoading());
    try {
      if (type === 'ADD') {
        // await postAdd();
        toast.success('ADD Products To Existed Own List successfully');
      } else {
        // await update();
        toast.success('UPDATE Products To Existed Own List successfully');
      }
    } catch (error) {
      toast.error(error);
    } finally {
      // dispatch(offAppLoading());
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = async (e) => {
    const file = e.target.files[0];
    e.target.value = null;
    setPreviewImage(URL.createObjectURL(file));

    setUrlImage('');
    // const config = {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     // Nếu cần thêm các header khác, bạn có thể thêm vào đây
    //   },
    // };
    try {
      // const response = await axios.post(
      //   'http://localhost:3000/api/image/addImage',
      //   { image: file, folderName: 'users' },
      //   config,
      // );
      // console.log('🚀 ~ handleChange ~ response:', response);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleDeleteImage = async () => {
    try {
      setPreviewImage('');
      // const imageUrlNow = imageUrl;
      // const imageName = imageUrlNow.match(/\/([^/]+)\.([^/]+)\/?$/)[1];
      // let response = await axios.delete(
      //   `http://localhost:3000/api/image/deleteImage?nameImage=${folderImage}/${imageName}`,
      // );
      // console.log(response);
      // if (response.data.statusCode === 17) {
      //   setImageUrl('');
      //   alert(response.data.UserMsg);
      // }
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical">
      <h1 className="text-lg font-semibold mt-[28px] mb-4">
        {type === 'MOVE' ? 'Update to product' : 'Add to product'}
      </h1>

      <Form.Item label="Post Name" name="PostName" rules={[{ required: true, message: 'Please input post name!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="User Email"
        name="UserEmail"
        rules={[
          { required: true, message: 'Please input user email!' },
          { type: 'email', message: 'Invalid email format!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="User Avatar"
        name="UserAvatar"
        getValueFromEvent={(e) => {
          if (Array.isArray(e)) {
            return e;
          }
          return e;
        }}
        extra="Please upload a square image"
      >
        <div className="cursor-pointer flex items-center justify-center border border-dashed w-[200px] h-[200px] rounded-lg relative overflow-hidden group">
          <label htmlFor="avatar" className="absolute inset-0 cursor-pointer">
            <input
              type="file"
              name="avatar"
              id="avatar"
              placeholder="Enter your avatar"
              onChange={handleChange}
              className="hidden-input"
            />
          </label>
          {previewImage ? (
            <Fragment>
              <img src={previewImage} alt="" />
              <div className="absolute inset-0">
                <button
                  type="button"
                  className="absolute flex items-center justify-center invisible w-10 h-10 text-center text-red-600 transition-all -translate-x-1/2 -translate-y-1/2 bg-white rounded-full opacity-0 cursor-pointer top-1/2 left-1/2 z-100 group-hover:opacity-100 group-hover:visible"
                  onClick={handleDeleteImage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </Fragment>
          ) : (
            <p>Upload</p>
          )}
        </div>
      </Form.Item>

      <Form.Item label="User Status" name="UserStatus" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item label="User Role" name="UserRole" rules={[{ required: true, message: 'Please select user role!' }]}>
        <Select options={roles}></Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {type === 'ADD' ? 'Add User' : 'Update User'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddOrUpdateUser;
