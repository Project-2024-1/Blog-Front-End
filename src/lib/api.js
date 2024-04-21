import axios from "axios";
import { toast } from "react-toastify";
export const HOST_API = "http://localhost:3000/api"; 


const instance = axios.create({
  baseURL: HOST_API,
  // withCredentials: true,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm interceptor để xử lý mọi yêu cầu trước khi gửi đi
instance.interceptors.request.use(
  config => {
      // Kiểm tra và thêm token vào header nếu cần
      const token = localStorage.getItem('accessToken');
      if (token) {
          config.headers.Authorization = `Bearer ${token}`;
      }
      console.log("Trước khi requset")
      return config;
  },
  error => {
      return Promise.reject(error);
  }
);


// Thêm interceptor để xử lý mọi yêu cầu sau khi nhận phản hồi
instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    // Kiểm tra lỗi từ phản hồi HTTP
    if (error.response && error.response.data.statusCode === 8) {
      // Lấy refreshToken từ localStorage
      const rfToken = localStorage.getItem('refreshToken');
      if (rfToken) {
        try {
          // Gửi request để refresh token
          const res = await instance.post(`${HOST_API}/auth/refreshToken`, { rsToken: rfToken });
          if (res.data.message.statusCode === 22) {
            // Cập nhật accessToken mới vào localStorage
            localStorage.setItem("accessToken", res.data.token);
            
            // Thay đổi Authorization header trong request mới
            error.config.headers.Authorization = `Bearer ${res.data.token}`;

            // Thực hiện lại request gốc đã bị reject với token mới
            return instance(error.config);
          }
        } catch (refreshError) {
          // Xử lý lỗi khi refresh token không thành công
          console.error('Error refreshing token:', refreshError);
          // Xử lý thông báo cho người dùng hoặc gửi lỗi đến hệ thống monitoring
          // toast.error("Error refreshing token");
        }
      } else {
        // Nếu không có refreshToken trong localStorage, đưa người dùng về trang đăng nhập hoặc xử lý theo logic của bạn
        // redirect hoặc hiển thị thông báo
        console.error('No refreshToken found in localStorage');
        // Xử lý thông báo cho người dùng hoặc gửi lỗi đến hệ thống monitoring
        // toast.error("No refreshToken found");
      }
    } else {
      // Xử lý các trường hợp lỗi khác ở đây
      // console.error('HTTP Error:', error.response.status);
       toast.error(error.response.data.UserMsg);
    }

    // Nếu không cần thực hiện lại request, reject error để chuyển control sang catch block ở code gọi api
    return Promise.reject(error);
  }
);


const handelError = (error) => {
  if (error.response) {
    const res = error.response.data?.message || error.response.data?.title;
    throw res;
  }
  if (error.message) {
    throw error.message.toString();
  }

  throw JSON.stringify(error);
};

export const signUpApi = async (body) => {
  try {
    const response = await axios.post(`${HOST_API}/auth/signin`, body);
    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error) {
    // throw handelError(error);
    return error.response.data;
  }
};

export const postService = async (url, body, authentication = true) => {
  try {
    const localToken = localStorage.getItem("token");
    const sessionToken = sessionStorage.getItem("token");
    const headers = {
      Accept: "application/json ",
      "Content-Type": "application/json",
      ...(localToken || (sessionToken && authentication)
        ? {
            Authorization: "Bearer " + (localToken || sessionToken),
          }
        : {}),
    };
    axios.defaults.withCredentials = false;
  console.log(body)
    const response = await axios.post(
      `${HOST_API + url}`,
      JSON.stringify(body),
      { headers }
    );
    console.log(response)
    return response.data
    // if (response.status >= 200 && response.status <= 210) {
    //   return response.data;
    // }
  } catch (error) {
    console.log(error);
    throw handelError(error);
  }
};

export const getService = async (url, params) => {
  try {
    const localToken = localStorage.getItem("token");
    
    const sessionToken = sessionStorage.getItem("token");
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(localToken || sessionToken
        ? {
            Authorization: "Bearer " + (localToken || sessionToken),
          }
        : {}),
    };
    console.log(headers)
    let queryString = "";
    if (params) {
      // queryString = `?${Object.keys(params)
      //   .filter((k) => !!params[k])
      //   .map((key) => `${key}=${params[key] || ""}`)
      //   .join("&")}`;
      queryString = params
    }
    // console.log(queryString)
    const response = await instance.get(
      `${url}${encodeURI(queryString)}`,
      {
        headers,
        // withCredentials: true,
      }
    );
    return response.data
    // if (response.status >= 200 && response.status <= 210) {
    //   return response.data;
    // }
  } catch (error) {
    console.log(error);
    throw handelError(error);
  }
};

export const putService = async (url, body) => {
  try {
    const localToken = localStorage.getItem("token");
    const sessionToken = sessionStorage.getItem("token");

    const headers = {
      Accept: "application/json ",
      "Content-Type": "application/json",
      ...(localToken || sessionToken
        ? {
            Authorization: "Bearer " + (localToken || sessionToken),
          }
        : {}),
    };

    const response = await axios.put(
      `${HOST_API + url}`,
      JSON.stringify(body),
      {
        headers: headers,
        withCredentials: true,
      }
    );

    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      const res = error.response.data?.message || error.response.data?.title;
      throw res;
    }
    throw JSON.stringify(error);
  }
};

export const deleteService = async (url, body) => {
  try {
    const localToken = localStorage.getItem("token");
    const sessionToken = sessionStorage.getItem("token");

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(localToken || sessionToken
        ? {
            Authorization: "Bearer " + (localToken || sessionToken),
          }
        : {}),
    };

    const response = await axios.delete(`${HOST_API + url}`, {
      headers: headers,
      withCredentials: true,
      data: body,
    });
    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      const res = error.response.data?.message || error.response.data?.title;
      throw res;
    }
    throw JSON.stringify(error);
  }
};

export const axiosBaseQuery =
  ({ baseUrl = "" }) =>
  async ({ url, method, data, params }) => {
    try {
      let result;
      switch (method) {
        case "GET":
          result = await getService(baseUrl + url, params);
          break;
        case "POST":
          result = await postService(baseUrl + url, data);
          break;
        case "PUT":
          result = await putService(baseUrl + url, data);
          break;
        case "DELETE":
          result = await deleteService(baseUrl + url, data);
          break;
        default:
          result = await getService(baseUrl + url, params);
          break;
      }
      return { data: result };
    } catch (axiosError) {
      if (typeof axiosError === "string") {
        return {
          error: {
            data: axiosError,
          },
        };
      }

      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.response?.data?.title || err.message,
        },
      };
    }
  };
