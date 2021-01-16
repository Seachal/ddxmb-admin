import * as React from "react";
import {useModel} from "umi";
import {useRequest} from "@@/plugin-request/request";
import {getCategoryList} from "@/pages/Blog/BlogService";
import type {APICategoryListData} from "@/pages/Blog/components/write/models/API.CATEGORY_LIST.DATA";
import CategoryItem from "@/pages/Blog/components/write/render/category_item";
import Title from "antd/lib/typography/Title";
import {Spin} from "antd";
import CategoryAddButton from "@/pages/Blog/components/write/category_add_button";

const CategoryListShow: React.FC = () => {


  const {loading, data} = useRequest<APICategoryListData>(() => {
    return getCategoryList();
  });


  const {set} = useModel('category_model', (ret) => ({
    set: ret.setList
  }));

  if (loading) {
    return <div><Spin/></div>
  }


  set(data);

  return (
    <>

      <Title level={4}>选择分类</Title>


      {data?.map((item) => <CategoryItem render={item}/>)}



      <CategoryAddButton />



    </>
  );
}
export default CategoryListShow;
