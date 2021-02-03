import PushNewBlogParams from "@/services/models/PushNewBlogParamsModel";
import request from "umi-request";
import {BlogPushNewResultData} from "@/services/models/BlogPushNewResultData";


// 发布一篇新博客
export async function pushNewBlog(params:PushNewBlogParams) {
  return request<BlogPushNewResultData>('/api/blog/push-new',{
    method: "POST",
    data: params,
    requestType: "form"
  })



}
