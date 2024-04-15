import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NameBase from "../base/nameBase";
import StatusButton from '../base/statusButton';
import { getService } from '../../../lib/api';


const CreateAndUpdateUser = () => {
    const location = useLocation();
    const [users, setUsers] = useState([]);
    let paramValue = "";

    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
       paramValue = queryParams.get('idUser');
      console.log(paramValue); // In ra giá trị của query param
    }, [location]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getService("http://localhost:3000/api/user?", `idUser=${paramValue}`);
                setUsers(result.users);
                console.log(result)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return <div>
        <NameBase name={paramValue === null || paramValue === "" ? "Create User" : "Update User"}/>
        <form className='flex gap-2 flex-col'>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Tên người dùng</label>
                <input className='w-[600px] p-3' type="text" placeholder='Enter your name' value={users.UserName || ""}/>
            </div>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Mật khẩu</label>
                <input className='w-[600px] p-3' type="password" readOnly/>
            </div>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Email</label>
                <input className='w-[600px] p-3' type="email" placeholder='Enter your email' value={users.UserEmail || ""}/>
            </div>
           
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Ảnh đại diện</label>
                <div>
                <img className='w-[200px]' src={users.UserAvatar || ""} alt="" />
            </div>
                <input type="file" placeholder='Enter your avatar'/>
            </div>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Mô tả</label>
                <textarea className='w-[600px] p-3' type="text" placeholder='Enter your Description' value={users.UserDescription || ""}/>
            </div>
            <div className='flex gap-2 items-center'>
                <label className='w-[200px]' htmlFor="name">Trạng thái</label>
                <StatusButton status={`${users.UserStatus} || ""`}/>
            </div>
            <div className='flex gap-2 flex-col'>
                <div className='font-bold'>Box Permission</div>
                <div className='flex gap-3 flex-wrap'>
                    <div className='w-[calc((100%-36px)/4)]'>
                        <input type="checkbox" />
                        <span>Permission 1</span>
                    </div>
                    <div className='w-[calc((100%-36px)/4)]'>
                        <input type="checkbox" />
                        <span>Permission 2</span>
                    </div>
                    <div className='w-[calc((100%-36px)/4)]'>
                        <input type="checkbox" />
                        <span>Permission 3</span>
                    </div>
                    <div className='w-[calc((100%-36px)/4)]'>
                        <input type="checkbox" />
                        <span>Permission 4</span>
                    </div>
                    <div className='w-[calc((100%-36px)/4)]'>
                        <input type="checkbox" />
                        <span>Permission 5</span>
                    </div>
                </div>
            </div>
            <button type='submit' className='bg-Txanh text-Twhite p-3 rounded-3xl'>
                {paramValue === null || paramValue === "" ? "Create" : "Update"}
            </button>
        </form>
    </div>;
  };
  
  export default CreateAndUpdateUser;