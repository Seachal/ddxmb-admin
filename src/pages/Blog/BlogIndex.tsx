import * as React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Card } from 'antd';
import { getBlogList } from '@/pages/Blog/BlogService';
import { BlogObject } from '@/pages/Blog/components/list/DATA.D.ts';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import InputDailog from '@/pages/Components/inputdialog/InputDialog';
import { useState } from 'react';
import { Chip } from '@material-ui/core';

// 博客列表首页

export default (): React.ReactNode => {
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const BlogTableColumn: ProColumns<BlogObject>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '分类',
      dataIndex: 'category',
      render: (_, obj) => {
        return (
          <Chip
            avatar={<Avatar alt="Natacha" src={obj.category.logo} />}
            label={obj.category.name}
            variant="outlined"
          />
        );
      },
    },
    {
      title: '操作',
      valueType: 'option',
      render: (text, obj, _, action) => [
        <a key="show" onClick={() => {}}>
          查看
        </a>,
        <a key="edit" onClick={() => {}}>
          编辑
        </a>,
        <a
          key="edit"
          onClick={() => {
            setShowDialog(true);
          }}
        >
          修改头图
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <Card>
        <ProTable<BlogObject>
          columns={BlogTableColumn}
          rowKey={'id'}
          request={async (params) => {
            const data = await getBlogList({
              page: params.current ?? 0,
              pageSize: params.pageSize,
            });
            return { data: data.data.content, success: data && data.state == 200 };
          }}
        ></ProTable>

        <InputDailog
          onOk={(value) => {
            console.log(value);
          }}
          show={showDialog}
        />
      </Card>
    </PageContainer>
  );
};
