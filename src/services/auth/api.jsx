import { getService, postService } from '../../lib/api';

export const signUpApi = ({ email, password, employerIds }) => {
  return postService('/register', { email, password, employerIds });
};

export const signInApi = ({ username, password }) => {
  return postService('/login', { username, password });
};

export const accountApi = () => {
  return getService('/account');
};

export const forgotPassword = (email) => {
  const localToken = localStorage.getItem('token');
  const sessionToken = sessionStorage.getItem('token');
  return fetch('/api/account/reset-password/init/customer', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + (localToken || sessionToken),
    },
    body: email,
  });
};
