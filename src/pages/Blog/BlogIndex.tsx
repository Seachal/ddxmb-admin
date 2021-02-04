import * as React from "react";
import {PageContainer} from "@ant-design/pro-layout";
import {Card} from "antd";
import {getBlogList} from "@/pages/Blog/BlogService";
import {BlogObject} from "@/pages/Blog/components/list/DATA.D.ts";
import BlogTableColumn from "@/pages/Blog/components/list/column";
import ProTable from "@ant-design/pro-table";


// 博客列表首页

export default (): React.ReactNode => {

  return (
    <PageContainer>
      <Card>
        <ProTable<BlogObject> columns={BlogTableColumn} rowKey={'id'} request={async (params) => {
          console.log(params);
          const data = await getBlogList({page: params.current ?? 0, pageSize: params.pageSize});
          return {data: data.data.content, success: data && data.state == 200};
        }}>

        </ProTable>
      </Card>
    </PageContainer>
  );
}
