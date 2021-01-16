import { request } from 'umi';

export type LoginParamsType = {
  username: string;
  password: string;
};

export async function fakeAccountLogin(params: LoginParamsType) {
  return request<API.LoginStateType>('/api/login', {
    method: 'POST',
    data: params,
  });
}

export async function outLogin() {
  return request('/api/login/outLogin');
}
