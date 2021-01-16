import request from "umi-request";
import type {APICategoryListData} from "@/pages/Blog/components/write/models/API.CATEGORY_LIST.DATA";
import type {CategorySubmitParams} from "@/pages/Blog/components/write/category_add_button";

// 获取全部分类列表
export async function getCategoryList() {
  return request<APICategoryListData>('/api/blog/category-list', {
    method: 'GET'
  });
}

// 添加新分类
export async function addNewCategory(datas: CategorySubmitParams) {
  return request('/api/blog/category-add', {
    method: 'POST',
    data: datas,
  })
}
