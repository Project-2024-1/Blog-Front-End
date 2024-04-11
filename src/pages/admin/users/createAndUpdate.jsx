import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import NameBase from "../base/nameBase";
import StatusButton from '../base/statusButton';


const CreateAndUpdateUser = () => {
    const location = useLocation();
    let paramValue = "";

    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
       paramValue = queryParams.get('id');
      console.log(paramValue); // In ra giá trị của query param
    }, [location]);


    return <div>
        <NameBase name={paramValue === null || paramValue === "" ? "Create User" : "Update User"}/>
        <form>
            <div className=''>
                <label htmlFor="name">Tên người dùng</label>
                <input type="text" placeholder='Enter your name' />
            </div>
            <div className=''>
                <label htmlFor="name">Mật khẩu</label>
                <input type="password" />
            </div>
            <div className=''>
                <label htmlFor="name">Email</label>
                <input type="email" placeholder='Enter your email'/>
            </div>
            <div>
                <img src="" alt="" />
            </div>
            <div className=''>
                <label htmlFor="name">Ảnh đại diện</label>
                <input type="file" placeholder='Enter your avatar'/>
            </div>
            <div className=''>
                <label htmlFor="name">Mô tả</label>
                <textarea type="file" placeholder='Enter your Description'/>
            </div>
            <div className=''>
                <label htmlFor="name">Trạng thái</label>
                <StatusButton status={"1"}/>
            </div>
            <div>
                <div>Box Permission</div>
                <div>
                    <input type="checkbox" />
                    <span>Permission 1</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span>Permission 2</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span>Permission 3</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span>Permission 4</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span>Permission 5</span>
                </div>
            </div>
            <button type='submit'>
                {paramValue === null || paramValue === "" ? "Create" : "Update"}
            </button>
        </form>
    </div>;
  };
  
  export default CreateAndUpdateUser;