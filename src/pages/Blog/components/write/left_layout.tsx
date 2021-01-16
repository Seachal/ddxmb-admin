import * as React from 'react';
import {Card, Divider} from "antd";
import Title from "antd/lib/typography/Title";
import CategoryListShow from "@/pages/Blog/components/write/category_list";


/**
 * 2021年1月16日 14:48:34
 * 梁典典
 * 发布博客左边布局
 * @constructor
 */
const WriteLeftLayout: React.FC = () => {
  return (
    <Card>
      <Title level={1}>选项</Title>
      <Divider/>
      <CategoryListShow/>
    </Card>
  );
}

export default WriteLeftLayout;
