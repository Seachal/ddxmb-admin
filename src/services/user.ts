import { request } from 'umi';
import {APILoginData} from "@/services/models/API.LOGIN";

// 获取全部用户列表
export async function query() {
  return request<API.CurrentUser[]>('/api/users');
}

// 获取当前登录用户
export async function queryCurrent() {
  return request<APILoginData>('/api/user/current');
}

export async function queryNotices(): Promise<any> {
  return request<{ data: API.NoticeIconData[] }>('/api/notices');
}
